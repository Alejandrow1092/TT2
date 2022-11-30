import React from "react";
import './PostCommentButton.scss'
import CommentImg from './../../../asets/comment.png'

const PostCommentButton =()=>{
    return(
        <>
            <div className="postCommentButton">
                <img className="postCommentImg" src={CommentImg} alt="icon" />
                <button>Comentar</button>
            </div>
        </>
    )
}

export default PostCommentButton;