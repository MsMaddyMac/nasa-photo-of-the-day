import React from "react";
import styled from "styled-components";

const P = styled.p`
  color: white;
  width: 60%;
  font-weight: bold;
`;

const ExBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10%;
  padding-top: 5%;
`;

const Description = props => {
  return (
    <ExBox className="description-container">
        <P>{props.photoDesc}</P>
    </ExBox>
  );
};

export default Description;