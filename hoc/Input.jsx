import React from 'react'


const Input = ({formFeilds, register}) => {
    return (
        <>
            {formFeilds.map((item, index) => {

                const {type, name, label, name2, label2, options, className} = item
                    
                switch (type || "text") {
                    case "text":
                        return (
                            <div key={index}>
                                <label htmlFor={name}>{label}</label>
                                <input {...register(name)} id={name}/>    
                            </div>
                        )

                    case "password":
                        return (
                            <div key={index}>
                                <label htmlFor="">{label}</label>
                                <input type={type} {...register(name)}/>    
                            </div>
                        )
                }
            })}
        </>
    )
}

export default Input