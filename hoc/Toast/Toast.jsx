import React from 'react'
import { useSelector } from 'react-redux'

const Toast = () => {
    const {open, label: {type="warning", msg}} = useSelector((state) => state.toast)

  return (
    <>
    {open && (
        <div className='toast-container'>
            <img src="" alt={type} />
            <p>{msg}</p>
        </div>
    )}
    <style jsx>{`
            .toast-container {
                position: absolute;
                bottom: 1rem;
                left: 1rem;
                display: flex;
                
                transform: none;
                transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
            }
        `}</style>
    </>
  )
}

export default Toast