
import react from 'react';



function Button({btnName, btnColor, btnHandleClick}) {
    return (
        <>
            <button className={btnColor} onClick={btnHandleClick}>{btnName}</button>
        </>
    )
}

export default Button;