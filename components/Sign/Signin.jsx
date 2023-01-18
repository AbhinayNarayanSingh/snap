import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Input from '../../hoc/Input'
import { SignInAction } from '../../store/saga/Auth';

const Signin = ({setCurrentPage}) => {
  const {register, handleSubmit, formState: { errors },} = useForm();
  const dispatch = useDispatch()

  const signUpHandler = (data) => {
    data["operation"] = loginViaEmail ? 1 : 2
    dispatch(SignInAction(data))
    console.log(data);
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

      <div className="sign-container sign-in col-12 col-md-6">
        <h2>Testing</h2>
        <button onClick={()=> setCurrentPage("SIGNUP")} className="my-1 btn-text">Don’t have an account?  <span> Sign up</span></button>

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
            ></Input>
          }
          <label className="toggle" htmlFor="myToggle">
            <input className="toggle__input" name="" type="checkbox" id="myToggle" onChange={(e) => setLoginViaEmail((state) => !state)}/>
            <div className="toggle__fill"></div>
            <span>
              Login via {loginViaEmail ? "Phone" : "Email"}
            </span>
          </label>
          <button type='submit'>Sign in</button>
        </form>

        <button className='btn-text'>Forgot password?</button>

        <div className="other-social-sign-in-option">
          <span className='or my-1'>Other sign in options</span>

        </div>

      </div>

    </div>
  )
}

export default Signin