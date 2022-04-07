import React from "react";
import { Api } from "../../Data/demiApi";
import Card from "./infoCard";
const Index = () => {
  return (
    <>
      <div className="container">
        {Api.data.nodes.map((item) => (
          <Card key={item} data={item} />
        ))}
      </div>
    </>
  );
};

export default Index;
