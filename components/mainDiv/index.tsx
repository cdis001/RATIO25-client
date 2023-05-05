import React from "react";
import styled from "styled-components";

const MainDivStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

interface MainDivProps {
  children?: React.ReactNode;
}

const MainDiv = ({ children }: MainDivProps) => {
  return <MainDivStyle>{...children}</MainDivStyle>;
};

export default MainDiv;
