import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../hoc/Input'

const Signup = () => {
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



  const signUpFormFeilds = [
     {
      type: "text",
      name: "firstname",
      label : "First Name",
    },
    {
      type: "text",
      name: "lastname",
      label : "Last Name"
    },
    {
      type: "tel",
      name: "phone",
      label : "Phone",
      validation : {
        pattern: {
          value: /[0-9]{10}/,
          message: "Please enter a valid phone number"
        }
      }
    },
    {
      type: "email",
      name: "email",
      label: "Email",
      validation: {
        pattern: {
          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: 'Please enter a valid email address',
      },
      }
    },
    {
      type: "password",
      name: "password",
      label: "Password",
      validation: {
        pattern: {
          value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          message: 'Password must be at least 8 characters and include one special character',
      },
      }
    },
    {
      type: "text",
      name: "telegranchat_id",
      label : "Telegram Chat ID",
      required : false
    },
  ];
  
  return (
    <div className='container-fluid sign-bck'>
      <div className="sign-container col-12 col-md-6">
        <h2>Testing</h2>
        <form onSubmit={handleSubmit(signUpHandler, errorHandler)}>
          <Input
            formFeilds={signUpFormFeilds}
            register={register}
            errors={errors}
          ></Input>
          <button type='submit'>Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Signup