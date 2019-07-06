import React from "react";
import championsJson from "../../champions.json";
import {
  ChampionTile,
  ChampionContainer
} from "./ChampionViewStyledComponents.js";

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
                <div>{champion.name}</div>
                <div>Class: {champion.class[0]}</div>
                <div>Origin: {champion.origin[0]}</div>
                <div>Cost: {champion.cost}</div>
                <div>
                  Recommended Items:{" "}
                  {champion.items.map((item, i) => {
                    return <div key={i}>{item}</div>;
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
