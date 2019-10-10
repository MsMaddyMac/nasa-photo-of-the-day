import React from "react";
import ApodGrid from "./components/ApodGrid";
import "./App.css";
import styled from "styled-components";
import background from "./images/galaxy.jpg";

const MainBackground = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
`;

function App() {
  return (
    <MainBackground className="App">
      <ApodGrid />
    </MainBackground>
  );
}

export default App;
