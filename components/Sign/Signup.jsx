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
      label : "First Name"
    },
    {
      type: "text",
      name: "lastname",
      label : "Last Name"
    },
    {
      type: "tel",
      name: "phone",
      label : "Phone"
    },
    {
      type: "email",
      name: "email",
      label: "Email",
    },
    {
      type: "password",
      name: "password",
      label: "Password",
    },
    {
      type: "text",
      name: "telegranchat_id",
      label : "Telegram Chat ID",
      required : false
    },
    {
      type: "select",
      name: "country",
      label : "Country",
      option: [
          {
            label : "India",
            value : "in"
          },
          {
            label : "United States of America",
            value : "us"
          },
          {
            label : "Canada",
            value : "ca"
          },
        ]
    },
    {
      type: "checkbox",
      name: "t&c",
      label : <>I accept the terms and privacy policy</>
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
          ></Input>
          <button type='submit'>Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Signup