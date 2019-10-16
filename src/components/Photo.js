import React from "react";
import styled from "styled-components";

const H2 = styled.h2`
  font-family: 'Source Code Pro', monospace;
  line-height: 3;
  color: white;
`;

const Apod = styled.img`
  width: 25%;
  border: 4px solid #fc5224;
  border-radius: 10%;
`;

const Photo = props => {
  return (
    <div className="photo-container">
        <H2>{props.photoTitle}</H2>
        <Apod className="apod-image" alt="asteroid" src={props.photoData} />
    </div>
  );
};

export default Photo;