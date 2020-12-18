import React from "react";

const SortBar = props => {
    return (
        <div>
            Sort by:
            <button onClick={() => props.sortBy("health")}>Health</button>
            <button onClick={() => props.sortBy("damage")}>Damage</button>
            <button onClick={() => props.sortBy("armor")}>Armor</button>
            Filter by Class: <select value={props.botFilter} onChange={(event) => props.changeFilter(event.target.value)}>
                <option value="">None</option>
                <option value="Support">Support</option>
                <option value="Medic">Medic</option>
                <option value="Witch">Witch</option>
                <option value="Assault">Assault</option>
                <option value="Defender">Defender</option>
                <option value="Captain">Captain</option>
            </select>
            Filter by multpile Classes: <select value={props.botFilter} onChange={(event) => props.secondFilter(event.target.value)}>
                <option value="">None</option>
                <option value="Support">Support</option>
                <option value="Medic">Medic</option>
                <option value="Witch">Witch</option>
                <option value="Assault">Assault</option>
                <option value="Defender">Defender</option>
                <option value="Captain">Captain</option>
            </select>
        </div>
    )
}

export default SortBar