import React from "react";
import headerImg from "../../../asets/employVector.png"
import './PostFile.scss';

const PostFile =()=>{
    return(
        <>
            <div className="postFile">
              {/*   <img src={headerImg} alt="dummieImg"></img> */}
              <img src="https://picsum.photos/1000/1000" alt="dummieImg"></img>
            </div>
        </>
    );
}

export default PostFile;