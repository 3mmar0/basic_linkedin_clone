import { FiberManualRecord, Info } from "@mui/icons-material";
import React from "react";
import "./Widget.css";

function Widget() {
  const newsArticle = (heading, suptitle) => (
    <div className="widget__article">
      <div className="widget__atricleIcon">
        <FiberManualRecord />
      </div>
      <div className="widget__atricleDesc">
        <h4>{heading}</h4>
        <p>{suptitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widget">
      <div className="widget__header">
        <Info />
        <h3>Linkedin News</h3>
      </div>
      {newsArticle("weed is here!!", "seen by 7 Billion ppl")}
      {newsArticle("weed is here!!", "seen by 7 Billion ppl")}
      {newsArticle("weed is here!!", "seen by 7 Billion ppl")}
    </div>
  );
}

export default Widget;
