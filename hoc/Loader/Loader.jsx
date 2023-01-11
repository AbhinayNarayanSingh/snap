import { useSelector } from "react-redux"

const Loader = () => {
    const {open} = useSelector((state) => state.loader)
  return (
    <>
    {open && (
        <div className='loader-container'>
                
            <div className="loader">
                <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 100 100" enable-background="new 0 0 0 0" className='full-loader'>
                        <path fill="rgba(0, 0, 0, 0.8)" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                        <animateTransform 
                            attributeName="transform" 
                            attributeType="XML" 
                            type="rotate"
                            dur="1s" 
                            from="0 50 50"
                            to="360 50 50" 
                            repeatCount="indefinite" />
                    </path>
                </svg>
            </div>

            <style jsx>{`
                .loader-container {
                    width: 100vw;
                    height: 100vh;
                    background: #0000004d;
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    z-index: 99999;
                    }
                .inline-loader{
                    height: 27px;
                    width: 61px;
                }
                .full-loader{
                    height: 125px;
                }
                .loader{
                    height: 100vh;
                    width: 100vw;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </div>
    )}
    </>
  )
}

export default Loader