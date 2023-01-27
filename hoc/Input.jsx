import React, { useEffect, useState } from 'react'
import { countryCode } from './CountryCodes';


const Input = ({formFeilds, register, errors}) => {
    useEffect(() => {
        console.log(errors, "error +++");
      }, [errors])

      const [selectedCountry, setSelectedCountry] = useState("")
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

                    case "radio":
                        // {
                        //     type: "radio",
                        //     name: "shape-of-button",
                        //     label: "What is the shape of a radio button’s selector?",
                        //     option: [
                        //       {
                        //         label: "Square",
                        //       },
                        //       {
                        //         label: "circle",
                        //       },
                        //       {
                        //         label: "hexagon",
                        //       },
                        //     ]
                        //   }
                        return (
                            <div key={index}>
                                <p>{label}</p>
                                {option && option.map((i, index) => {
                                    const {label} = i
                                    return (
                                        <label htmlFor={label} className='html_input_radio' key={index}>
                                            <input type="radio" {...register(name, {...validation})} id={label} required={required} className='radio_input' />
                                            {label}
                                        </label>
                                    )
                                })}
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

                    case "mobile": 
                        return (
                            <div className={`mobile-form-feilds ${className}`} key={index}>
                                <label htmlFor={name} className={`feild-label`}>Mobile</label>
                                <div className="input row">
                                    <p>{selectedCountry.dial_code} {selectedCountry.name}</p>
                                        
                                    <select name="" id="" className='col-3' onChange={(event) => setSelectedCountry(countryCode[event.target.selectedIndex])
}>
                                        {countryCode.map((item, index) => {
                                            return (
                                                <option value={item.name} dial-code={item.dial_code} key={index}>
                                                    {item.name}
                                                </option>
                                            )
                                        })}
                                    </select>
                                    <input type="text" className='col-8'/>
                                </div>
                            </div>
                        )
                }
            })}
        </>
    )
}

export default Input