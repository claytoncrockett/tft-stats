import React from "react";
import itemsJson from "../../json/items.json";
import { ItemTile, ItemContainer } from "./ItemViewStyledComponents.js";

export const ItemView = ({ search }) => {
  let items = [];
  for (let item in itemsJson) items.push(itemsJson[item]);
  return (
    <>
      <ItemContainer>
        {items.map((item, i) => {
          if (item.name.toLowerCase().includes(search.toLowerCase()))
            return (
              <ItemTile key={i}>
                <div style={{ fontWeight: "700" }}>{item.name}</div>

                <div>Type: {item.type}</div>
                <div>Bonus: {item.bonus}</div>
              </ItemTile>
            );
          else return null;
        })}
      </ItemContainer>
    </>
  );
};
