import React from "react";
import "./ButtonViewMore.css";
import ExpandMoreSVG from "@/SVG/ExpandMoreSVG";
import ExpandLessSVG from "@/SVG/ExpandLessSVG";

const ButtomViewMore = (props) => {
  return (
    <>
      {props.status ? (
        <button onClick={props.function} className="ButtonViewLess">

          <span className="ButtonViewLess__expand-more-container">
            <ExpandLessSVG/>
          </span>
          <p>
          View Less
          </p>
        </button>
      ) : (
        <button onClick={props.function} className="ButtonViewMore">
          View More
          <span className="ButtonViewMore__expand-more-container">
            <ExpandMoreSVG />
          </span>
        </button>
      )}
    </>
  );
};

export default ButtomViewMore;
