import React from "react";

const SectionHeader = (props) => {
  const { heading, text, image, alt } = props;

  return (
    <div className="section-header">
      {image && <img src={image} className="picture" alt={alt} />}
      {heading && <h1>{heading}</h1>}
      {text && <h3>{text}</h3>}
    </div>
  );
};

export default SectionHeader;
