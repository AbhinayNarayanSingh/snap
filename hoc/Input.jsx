import React from 'react'


const Input = ({formFeilds, register}) => {
    return (
        <>
            {formFeilds.map((item, index) => {

                const {type, name, label, option, name2, label2, className="", required=true, twoFeild=false, feilds} = item
                
                switch (type || "text") {
                    case "text":
                        return !twoFeild ? (
                            <div className={`form-feilds ${className}`} key={index}>
                                <label htmlFor={name} className={`feild-label ${required ? "required-feild" : ""}`}>{label}</label>
                                <input type={type} {...register(name)} id={name} required={required}/>    
                            </div>
                            ) : (
                            <div className='form-row' key={index}>
                                {feilds.map((i, indx) => {
                                    const {name, label, required=true} = i
                                    return (
                                    <div className={`form-feilds col-12 col-md-6 ${className}`} key={indx}>
                                        <label htmlFor={name} className={`feild-label ${required ? "required-feild" : ""}`}>{label}</label>
                                        <input type={type} {...register(name)} id={name} required={required}/>    
                                    </div>
                                )})}
                            </div>
                            )

                    case "password":
                        return (
                            <div className={`form-feilds ${className}`} key={index}>
                                <label htmlFor={name} className={`feild-label ${required ? "required-feild" : ""}`}>{label}</label>
                                <input type={type} {...register(name)} id={name} required={required}/>    
                            </div>
                        )
                        
                    case "tel":
                        return (
                            <div className={`form-feilds ${className}`} key={index}>
                                <label htmlFor={name} className={`feild-label ${required ? "required-feild" : ""}`}>{label}</label>
                                <input type={type} {...register(name)} id={name} required={required}/>    
                            </div>
                        )

                    case "email":
                        return (
                            <div className={`form-feilds ${className}`} key={index}>
                                <label htmlFor={name} className={`feild-label ${required ? "required-feild" : ""}`}>{label}</label>
                                <input type={type} {...register(name)} id={name} required={required}/>    
                            </div>
                        )

                    case "select":
                        return (
                            <div className={`form-feilds ${className}`} key={index}>
                                <label htmlFor={name} className={`feild-label ${required ? "required-feild" : ""}`}>{label}</label>
                                <select id={name} {...register(name)}>
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
                                <input type={type} {...register(name)} id={name} />    
                                <label htmlFor={name} className={`feild-label`}>{label}</label>
                            </div>
                        )
                }
            })}
        </>
    )
}

export default Input