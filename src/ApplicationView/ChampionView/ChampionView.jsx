import React from "react";
import championsJson from "../../json/champions.json";
import {
  ChampionTile,
  ChampionContainer
} from "./ChampionViewStyledComponents.js";
import items from "../../json/items.json";

const findItemName = item => {
  return items[item].name;
};

export const ChampionView = ({ search }) => {
  let champions = [];
  for (let champ in championsJson) champions.push(championsJson[champ]);
  return (
    <>
      <ChampionContainer>
        {champions.map((champion, i) => {
          if (champion.name.toLowerCase().includes(search.toLowerCase()))
            return (
              <ChampionTile key={i}>
                <div style={{ fontWeight: "700" }}>{champion.name}</div>
                <div>Class: {champion.class[0]}</div>
                <div>Origin: {champion.origin[0]}</div>
                <div>Cost: {champion.cost}</div>
                <div style={{ fontWeight: "700" }}>
                  Recommended Items:{" "}
                  {champion.items.map((item, i) => {
                    return (
                      <div style={{ fontWeight: "400" }} key={i}>
                        {findItemName(item)}
                      </div>
                    );
                  })}
                </div>
              </ChampionTile>
            );
          else return null;
        })}
      </ChampionContainer>
    </>
  );
};
