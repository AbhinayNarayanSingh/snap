import React, { useEffect } from 'react'


const Input = ({formFeilds, register, errors}) => {
    useEffect(() => {
        console.log(errors, "error +++");
    
      }, [errors])
    return (
        <>
            {formFeilds.map((item, index) => {

                const {type, name, label, option, validation, name2, label2, className="", required=true, twoFeild=false, feilds} = item
                
                switch (type || "text") {
                    case "text":
                        return !twoFeild ? (
                            <div className={`form-feilds ${className}`} key={index}>
                                <span>{errors?.[name]?.message}</span>
                                <label htmlFor={name} className={`feild-label ${required ? "required-feild" : ""} `}>{label}</label>
                                <input type={type} {...register(name, {...validation})} id={name} required={required}/>    
                            </div>
                            ) : (
                            <div className='form-row' key={index}>
                                {feilds.map((i, indx) => {
                                    const {name, label, required=true} = i
                                    return (
                                    <div className={`form-feilds col-12 col-md-6 ${className}`} key={indx}>
                                        <span>{errors?.[name]?.message}</span>
                                        <label htmlFor={name} className={`feild-label ${required ? "required-feild" : ""}`}>{label}</label>
                                        <input type={type} {...register(name, {...validation})} id={name} required={required}/>    
                                    </div>
                                )})}
                            </div>
                            )

                    case "password":
                        return (
                            <div className={`form-feilds ${className}`} key={index}>
                                <span>{errors?.[name]?.message}</span>
                                <label htmlFor={name} className={`feild-label ${required ? "required-feild" : ""}`}>{label}</label>
                                <input type={type} {...register(name, {...validation})} id={name} required={required}/>    
                            </div>
                        )
                        
                    case "tel":
                        return (
                            <div className={`form-feilds ${className}`} key={index}>
                                <span>{errors?.[name]?.message}</span>
                                <label htmlFor={name} className={`feild-label ${required ? "required-feild" : ""}`}>{label}</label>
                                <input type={type} {...register(name, {...validation})} id={name} required={required}/>    
                            </div>
                        )

                    case "email":
                        return (
                            <div className={`form-feilds ${className}`} key={index}>
                                <span>{errors?.[name]?.message}</span>
                                <label htmlFor={name} className={`feild-label ${required ? "required-feild" : ""}`}>{label}</label>
                                <input type={"text"} {...register(name, {...validation})} id={name} required={required}/>    
                            </div>
                        )

                    case "select":
                        // {
                        //     type: "select",
                        //     name: "country",
                        //     label : "Country",
                        //     option: [
                        //         {
                        //           label : "India",
                        //           value : "in"
                        //         },
                        //       ]
                        //   },
                        return (
                            <div className={`form-feilds ${className}`} key={index}>
                                <span>{errors?.[name]?.message}</span>
                                <label htmlFor={name} className={`feild-label ${required ? "required-feild" : ""}`}>{label}</label>
                                <select id={name} {...register(name, {...validation})}>
                                    {option.map((item, index) => {
                                        return (
                                            <option value={item.value} name={name} key={index}>{item.label}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        )

                    case "checkbox":
                        return (
                            <div className={`form-feilds-checkbox ${className}`} key={index}>
                                <span>{errors?.[name]?.message}</span>
                                <input type={type} {...register(name, {...validation})} id={name} />    
                                <label htmlFor={name} className={`feild-label`}>{label}</label>
                            </div>
                        )
                }
            })}
        </>
    )
}

export default Input