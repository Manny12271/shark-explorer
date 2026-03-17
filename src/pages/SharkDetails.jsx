import React from "react";
import { useParams, Link } from "react-router-dom";
import { fetchSharks } from "../services/api";

import basking from "../sharks/BaskingShark.jpg";
import blue from "../sharks/Blueshark.jpg";
import bonnethead from "../sharks/bonnetheadshark.jpg";
import bull from "../sharks/bullshark.jpeg";
import cookiecutter from "../sharks/Cookiecutter-shark.jpg";
import goblin from "../sharks/goblinshark.jpeg";
import greatwhite from "../sharks/greatwhiteshark.jpeg";
import greenland from "../sharks/greenlandshark.jpeg";
import greyreef from "../sharks/greyreefshark.jpeg";
import hammerhead from "../sharks/hammerheadshark.jpeg";
import horn from "../sharks/hornshark.jpeg";
import megamouth from "../sharks/megamouthshark.jpeg";
import nurse from "../sharks/nurseshark.jpeg";
import porbeagle from "../sharks/porbeagleshark.jpeg";
import reef from "../sharks/reefshark.jpeg";
import salmon from "../sharks/salmonshark.jpeg";
import sandtiger from "../sharks/sandtigershark.jpeg";
import sixgill from "../sharks/sixgillshark.jpeg";
import sleeper from "../sharks/sleepershark.jpeg";
import spinner from "../sharks/spinnershark.jpeg";
import tiger from "../sharks/tigershark.jpeg";
import viper from "../sharks/vipershark.jpeg";
import whale from "../sharks/whaleshark.jpeg";
import zebra from "../sharks/zebrashark.jpeg";

function SharkDetails() {

    const { id } = useParams();
    const [shark, setShark] = React.useState(null);

    React.useEffect(() => {

        const getShark = async () => {
            const sharks = await fetchSharks();
            setShark(sharks[id]);
        };

        getShark();

    }, [id]);

    if (!shark) {
        return <p>Loading shark...</p>;
    }

    const sharkImages = {
        "Basking Shark": basking,
        "Blue Shark": blue,
        "Bonnethead Shark": bonnethead,
        "Bull Shark": bull,
        "Cookiecutter Shark": cookiecutter,
        "Goblin Shark": goblin,
        "Great White Shark": greatwhite,
        "Greenland Shark": greenland,
        "Grey Reef Shark": greyreef,
        "Hammerhead Shark": hammerhead,
        "Horn Shark": horn,
        "Megamouth Shark": megamouth,
        "Nurse Shark": nurse,
        "Porbeagle Shark": porbeagle,
        "Reef Shark": reef,
        "Salmon Shark": salmon,
        "Sand Tiger Shark": sandtiger,
        "Sixgill Shark": sixgill,
        "Sleeper Shark": sleeper,
        "Spinner Shark": spinner,
        "Tiger Shark": tiger,
        "Viper Shark": viper,
        "Whale Shark": whale,
        "Zebra Shark": zebra
    };

    const image = sharkImages[shark.name];

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#e0f7fa",
                padding: "40px",
                display: "flex",
                justifyContent: "center"
            }}
        >
            <div
                style={{
                    maxWidth: "700px",
                    width: "100%",
                    textAlign: "center",
                    background: "white",
                    padding: "30px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                }}
            >

                <Link to="/">
                    <button
                        style={{
                            marginBottom: "20px",
                            padding: "8px 14px",
                            borderRadius: "8px",
                            border: "none",
                            background: "#0077b6",
                            color: "white",
                            cursor: "pointer"
                        }}
                    >
                        ← Back to Sharks
                    </button>
                </Link>

                <h1>{shark.name} 🦈</h1>

                {image && (
                    <img
                        src={image}
                        alt={shark.name}
                        style={{
                            width: "100%",
                            maxHeight: "350px",
                            objectFit: "cover",
                            borderRadius: "10px",
                            margin: "20px 0"
                        }}
                    />
                )}

                <p>
                    <strong>Diet:</strong>{" "}
                    {shark.characteristics?.diet || "Unknown"}
                </p>

                <p>
                    <strong>Habitat:</strong>{" "}
                    {shark.characteristics?.habitat || "Unknown"}
                </p>

                <p>
                    <strong>Lifespan:</strong>{" "}
                    {shark.characteristics?.lifespan || "Unknown"}
                </p>

                <p>
                    <strong>Scientific Name:</strong>{" "}
                    {shark.taxonomy?.scientific_name || "Unknown"}
                </p>

            </div>
        </div>
    );
}

export default SharkDetails;