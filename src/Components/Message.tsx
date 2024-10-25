import React from 'react'

const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src="https://renaissancedentalcenter.com/wp-content/uploads/2014/03/smiling-faces.jpg" alt=""/>
                
                <p>Just Now</p>

            </div>
            <div className="messageContent">
                <p>Hello</p>
                {/*<img src="https://renaissancedentalcenter.com/wp-content/uploads/2014/03/smiling-faces.jpg" alt="" />*/}
            </div>
        </div>
    )
}

export default Message