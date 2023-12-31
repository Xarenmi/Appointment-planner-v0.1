import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ data }) => (
  <div>
    {data.map((item) => (
      <Tile key={item.name} name={item.name} description={item.description} />
    ))}
  </div>
);
