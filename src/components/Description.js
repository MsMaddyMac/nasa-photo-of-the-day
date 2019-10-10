import React from "react";
import styled from "styled-components";

const P = styled.p`
  color: white;
`;


const Description = props => {
  return (
    <div className="description-container">
        <P>{props.photoDesc}</P>
    </div>
  );
};

export default Description;