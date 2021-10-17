import React from 'react';
import {img_300, unavailable} from "../../config/config";
import style from "./singleContent.module.css"
import Badge from "@material-ui/core/Badge";
const SingleContent = ({id, poster, title, date, media_type, vote_average}) => {
  return (
    <>
     <div className={style.media}>
       <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"}/>
       <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} all={title}/>
       <b className='title'>{title}</b>
       <span className={style.subTitle}>
         {media_type === "tv" ? "TV Series" : "Movie"}
       <span className="sunTitle">{date}</span>
       </span>
     </div>
    </>
  );
};

export default SingleContent;
