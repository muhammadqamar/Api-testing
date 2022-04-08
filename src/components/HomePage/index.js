import React from "react";
import { Api } from "../../Data/demiApi";
import Card from "./infoCard";
const Index = () => {
  return (
    <>
      <div className="container">
        {Api.data.nodes.map((item, counter) => (
          <Card key={counter} data={item} />
        ))}
      </div>
    </>
  );
};

export default Index;
