import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function LandingRicknMorty() {
    const [data, setData] = useState([]);
    const [URL, setURL] = useSearchParams();

    const query = URL.get("p") || "";

    const hendleSearch = (event) => {
        const value = event.target.value;

        if (value) {
            setURL({ p: value });
        } else {
            setURL({});
        }
    };

    useEffect(() => {
        async function ambilData() {
            const res = await fetch(
                "https://rickandmortyapi.com/api/character"
            );
            const hasil = await res.json();
            setData(hasil.results);
        }
        ambilData();
    }, []);

    return (
        <main className="min-h-screen bg-orange-100 p-10">
            <div className="text-4xl font-bold text-center mb-10">
                Character Rick and Morty
            </div>

            <input
                type="text"
                placeholder="Cari Character"
                value={query}
                onChange={hendleSearch}
                className="w-full max-w-2xl block mx-auto border p-4 rounded-xl mb-10"
            />

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data
                    .filter((char) =>
                        char.name.toLowerCase().includes(query.toLowerCase())
                    )
                    .map((char) => (
                        <div key={char.id} className="bg-black rounded-xl p-4">
                            <img src={char.image} alt={char.name} className="w-full rounded-xl" />
                            <h2 className="text-center bg-orange-100 text-xl mt-3">
                                {char.name}
                            </h2>
                        </div>
                    ))}
            </section>
        </main>
    );
}