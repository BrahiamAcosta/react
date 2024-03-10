import { useEffect, useState } from 'react';
import './App.css';

export function App() {
    const CAT_ENDPOINT_FACT_URL = 'https://catfact.ninja/fact';
    const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/`;
    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState();

    //efect para recuperar el fact
    useEffect(() => {
        fetch(CAT_ENDPOINT_FACT_URL)
            .then((response) => response.json())
            .then((data) => {
                const fact = data.fact;
                setFact(fact);
            });
    }, []);

    //efect para recuperar la imagen con el fact
    useEffect(() => {
        if (!fact) return;
        const threefirstWord = fact.split(' ', 3).join(' ');

        setImageUrl(`${CAT_ENDPOINT_IMAGE_URL}${threefirstWord}`);
    }, [fact]);

    return (
        <main>
            <h1>Datos sobre gatos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={`Image taken from the first three words : ${fact} `}
                />
            )}
        </main>
    );
}
