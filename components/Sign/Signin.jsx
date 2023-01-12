import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Input from '../../hoc/Input'

const Signin = () => {
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

  const [loginViaEmail, setLoginViaEmail] = useState(true)

  const signInEmailFormFeilds = [
    {
      type: "text",
      name: "email",
      label: "Email",
    },
    {
      type: "password",
      name: "password",
      label: "Password",
    }
  ];
  
  const signInPhoneFeilds = [
    {
      type: "text",
      name: "phone",
      label: "Phone",
    },
    {
      type: "password",
      name: "password",
      label: "Password",
    }
  ];

  return (
    <div className='container-fluid sign-bck'>
      <div className="sign-container col-12 col-md-2">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit(signUpHandler, errorHandler)}>
          {loginViaEmail ? 
          <Input
          formFeilds={signInEmailFormFeilds}
          register={register}
          ></Input>
          :
          <Input
          formFeilds={signInPhoneFeilds}
          register={register}
          ></Input>}
          <button type='submit'>Submit</button>
        </form>
        <button onClick={() => setLoginViaEmail((state) => !state)} className="option-btn">Login via Phone</button>
      </div>

    </div>
  )
}

export default Signin