import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  text-align: center;
  font-family: 'Turret Road', cursive;
  font-size: 3rem;
  overflow: hidden;
  border-right: .15em solid #f51cc5;
  white-space: nowrap;
`;

const H2 = styled.h2`
  font-family: 'Source Code Pro', monospace;
  line-height: 2;
`;

const HeadContent = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = props => {
  return (
    <HeadContent className="header-container">
      <div className="title">
        <H1>Welcome to APOD:</H1>
      </div>
        <H2>Today is {props.photoDate} <br/>and the <br/> Asteroid of the day is:</H2>
    </HeadContent>
  );
};

export default Header;