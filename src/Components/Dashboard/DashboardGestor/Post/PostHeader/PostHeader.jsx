import React from "react";
import './PostHeader.scss'

const PostHeader =()=>{
    return(
        <>
            <div className="postHeader">
                <div className="postTitle">
                    <span>
                        Título
                    </span>
                </div>
                <div className="postType">
                    <span>
                        Tipo
                    </span>
                </div>
            </div>
            <div className="postSubject">
                <span>
                    Asunto
                </span>
            </div>
        </>
    )
}

export default PostHeader;