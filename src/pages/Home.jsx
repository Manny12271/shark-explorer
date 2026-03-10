import React, { useEffect, useState } from "react";
import { fetchSharks } from "../services/api";
import SharkList from "../components/SharkList";

function Home() {

    const [sharks, setSharks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {

        const getSharks = async () => {
            try {

                const data = await fetchSharks();
                setSharks(data);
                setLoading(false);

            } catch (error) {

                console.error("Error fetching sharks:", error);
                setLoading(false);

            }
        };

        getSharks();

    }, []);

    const filteredSharks = sharks.filter((shark) =>
        shark.name.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
        return <p>Loading sharks...</p>;
    }

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
                    maxWidth: "900px",
                    width: "100%",
                    textAlign: "center"
                }}
            >

                <h1 style={{ fontSize: "40px" }}>
                    Shark Explorer 🦈
                </h1>

                <p style={{ marginBottom: "20px", color: "#444" }}>
                    Discover fascinating shark species from around the world.
                </p>

                <input
                    type="text"
                    placeholder="Search sharks..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        padding: "12px",
                        width: "300px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        marginBottom: "30px"
                    }}
                />

                {filteredSharks.length === 0 ? (
                    <p>No sharks found.</p>
                ) : (
                    <SharkList sharks={filteredSharks} />
                )}

            </div>
        </div>
    );
}

export default Home;