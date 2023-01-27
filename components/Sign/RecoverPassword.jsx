import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Input from '../../hoc/Input';

const RecoverPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const signUpHandler = (data) => {
    console.log(data, "data");
    console.log(errors, "formState > errors");
  };

  const errorHandler = () => {
    console.log(errors, "error");
  };

  const [recoveryPasswordStep, setRecoveryPasswordStep] = useState(1)

  const phoneNumberConfirmFormFeilds = [
    {
      type: "tel",
      name: "phone",
      label : "Phone number",
      validation : {
        pattern: {
          value: /[0-9]{10}/,
          message: "Please enter a valid phone number"
        }
      }
    }
  ];

  const resetPasswordFeilds = [
    {
      type: "password",
      name: "new-password",
      label: "New password",
    },
    {
      type: "password",
      name: "confirm-password",
      label: "Confirm new password",
    }
  ]

  const verifyOTPFormFeilds = [
    {
      type: "text",
      name: "otp",
      label: "OTP",
    },
  ]
  
  return (
    <div className='container-fluid sign-bck'>
      <div className="sign-container col-12 col-md-6">
        {recoveryPasswordStep === 1 ? (
          <>
            <h2>Forgot password?</h2>
            <p className='my-1'>Don’t worry! It happens. Please enter the phone number associated with your account.</p>

            <form onSubmit={handleSubmit(signUpHandler, errorHandler)}>
              <Input
                formFeilds={phoneNumberConfirmFormFeilds}
                register={register}
                errors={errors}
              ></Input>
              <button type='submit' onClick={()=> setRecoveryPasswordStep(2)}>Continue</button>
            </form>
          </>
        ) :  recoveryPasswordStep === 2 ? (
          <>
            <h2>Verify your phone number</h2>
            <p className='my-1'>We’ve sent an OTP to your phone +91 8795675599</p>

            <form onSubmit={handleSubmit(signUpHandler, errorHandler)}>
              <Input
                formFeilds={verifyOTPFormFeilds}
                register={register}
                errors={errors}
              ></Input>
              <button type='submit' onClick={()=> setRecoveryPasswordStep(3)}>Verify</button>
            </form>
          </>
        ) : 
          <>
            <h2>Reset password</h2>
            <p className='my-1'>Please type something you’ll remember</p>

            <form onSubmit={handleSubmit(signUpHandler, errorHandler)}>
              <Input
                formFeilds={resetPasswordFeilds}
                register={register}
                errors={errors}
              ></Input>
              <button type='submit'>Reset Password</button>
            </form>
          </>
        }


      </div>

    </div>
  )
}

export default RecoverPassword