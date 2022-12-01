import { useState } from "react";
import swPlanets from "../../../data/planets.json";
import swCharacters from "../../../data/characters.json";
import swW from "../../../data/starships.json";
import { ItemSpisok } from "../ListItems/ItemSp";

import { ItemLists } from "../SpisokItems/lsItems";

export const Content = ({ handleCreateFan }) => {
    const [selector, setSelector] = useState("Characters");

    const handleSelectorChange = (event) => {
        setSelector(event.target.value);
    };

    return (
        <div className="content-layout">
            <select
                value={selector}
                placeholder="Choose your path"
                className="select-item"
                onChange={handleSelectorChange}
            >
                <option>Characters</option>
                <option>Planets</option>
                <option>Starships</option>
            </select>

            {selector === "Characters" &&
                swCharacters.map((character) => (
                    <ItemLists key={character.name} item={character} type="chars">
                        <ItemSpisok>gender: {character.gender}</ItemSpisok>
                        <ItemSpisok>birthday: {character.birth_year}</ItemSpisok>
                    </ItemLists>
                ))}

            {selector === "Planets" &&
                swPlanets.map((planet) => (
                    <ItemLists key={planet.name} item={planet} type="planets">
                        <ItemSpisok>Rotation Period: {planet.rotation_period}</ItemSpisok>
                        <ItemSpisok>Orbital Period: {planet.orbital_period}</ItemSpisok>
                    </ItemLists>
                ))}
            {selector === "Starships" &&
                swW.map((starship) => (
                    <ItemLists key={starship.name} item={starship} type="planets">
                        <ItemSpisok>Rotation Period: {starship.rotation_period}</ItemSpisok>
                        <ItemSpisok>Orbital Period: {starship.orbital_period}</ItemSpisok>
                    </ItemLists>
                ))}
        </div>
    );
};
