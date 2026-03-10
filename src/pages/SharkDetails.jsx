import React from "react";
import { useParams, Link } from "react-router-dom";
import { fetchSharks } from "../services/api";

import basking from "../sharks/BaskingShark.jpg";
import blue from "../sharks/Blueshark.jpg";
import bonnethead from "../sharks/bonnetheadshark.jpg";
import bull from "../sharks/bullshark.jpeg";
import cookiecutter from "../sharks/Cookiecutter-shark.jpg";

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
        "Cookiecutter Shark": cookiecutter
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