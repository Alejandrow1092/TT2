import React from "react";
import './PostComment.scss'
//import SendVector from './../../../asets/sendVector.png';

const PostComment =()=>{
    return(
        <>
            <div className="postComment">
                <textarea rows="4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</textarea>
                <button></button>
            </div>
        </>
    );
}

export default PostComment;