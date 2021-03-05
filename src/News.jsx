import React from "react";

function News(props){
    return(
    <>

        <div className="newscontent">

            <div className="newsposts">
                <div className="post_one">

                    <img src={props.imgsrc} alt="pic" className="post_img"/>

                    <div className="post_info">
                        <h3 className="post_title">{props.title}</h3>

                        <p className="post_content">{props.sname}</p>

                        {/* <span>{props.sname}</span> */}

                        <a href={props.link}>
                            <button className="readmore">Read More</button>
                        </a>

                    </div>

                </div>
            </div>
        </div>
  
    </>
    )
  }


  export default News;