import React from "react";
import SharkCard from "./SharkCard";

function SharkList({ sharks }) {

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "25px"
            }}
        >

            {sharks.map((shark, index) => (
                <SharkCard
                    key={index}
                    shark={shark}
                    index={index}
                />
            ))}

        </div>
    );
}

export default SharkList;