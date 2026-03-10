import React from "react";
import { Link } from "react-router-dom";

function SharkCard({ shark, index }) {

    return (
        <div
            style={{
                borderRadius: "12px",
                padding: "20px",
                width: "250px",
                background: "white",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                textAlign: "center"
            }}
        >

            <h3 style={{ marginBottom: "10px" }}>
                {shark.name}
            </h3>

            <p style={{ marginBottom: "15px", color: "#555" }}>
                <strong>Diet:</strong>{" "}
                {shark.characteristics?.diet || "Unknown"}
            </p>

            <Link to={`/shark/${index}`}>
                <button
                    style={{
                        padding: "8px 14px",
                        borderRadius: "8px",
                        border: "none",
                        background: "#0077b6",
                        color: "white",
                        cursor: "pointer"
                    }}
                >
                    View Details
                </button>
            </Link>

        </div>
    );
}

export default SharkCard;