import React from "react";
import styled from "styled-components";


const H2 = styled.h2`
  font-family: 'Source Code Pro', monospace;
  line-height: 3;
  color: white;
`;

const Photo = props => {
  return (
    <div className="photo-container">
        <H2>{props.photoTitle}</H2>
        <img className="apod-image" alt="asteroid" src={props.photoData} />
    </div>
  );
};

export default Photo;