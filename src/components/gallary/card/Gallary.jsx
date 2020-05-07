import React from "react";
import CardContainer from "./CardContainer";
import Card from "./Card";

const Gallary = ({ imageData, isLoading }) => (
  <CardContainer>
    {isLoading ? (
      <p>Loading...</p>
    ) : !isLoading && imageData.length === 0 ? (
      <p>No Images found!</p>
    ) : (
      imageData.map(({ id, urls }) => {
        return <Card key={id} imgSrc={urls.regular} />;
      })
    )}
  </CardContainer>
);

export default Gallary;
