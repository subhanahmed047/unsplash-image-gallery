import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 0.5rem 0.5rem 0;
`;

const Image = styled.img`
  width: 100%;
`;

const Card = ({ imgSrc }) => (
  <Container>
    <Image src={imgSrc} alt="" />
  </Container>
);

export default Card;
