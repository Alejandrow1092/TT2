import React from "react";
import './Post.scss'
import PostComment from "./PostComment/PostComment";
import PostCommentBox from "./PostComment/PostCommentBox";
import PostCommentButton from "./PostComment/PostCommentButton";
import PostFile from "./PostFile/PostFile";
import PostHeader from "./PostHeader/PostHeader";
import PostMessage from "./PostMessage/PostMessage";

const Post =()=>{
    return(
        <>
            <div className="post">
                <PostHeader/>
                <PostMessage/>
                <PostFile/>
                <PostCommentButton/>
                <PostCommentBox/>
                <PostComment/>
            </div>
        </>
    )
}

export default Post;