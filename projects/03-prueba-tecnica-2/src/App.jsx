import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
    const GIF_URL = 'https://cataas.com/cat/gif/says/';
    const FACT_URL = 'https://catfact.ninja/fact';
    const [fact, setFact] = useState(null);
    const [imageUrl, setImage] = useState(null);

    useEffect(() => {
        fetch(FACT_URL)
            .then((response) => response.json())
            .then((data) => setFact(data.fact));
    }, []);

    useEffect(() => {
        if (fact === null) return;

        const threeWords = fact.split(' ', 3).join(' ');
        setImage(`${GIF_URL}${threeWords}`)
         }, [fact]);
    return (
        <main>
            <h1>Cat Facts</h1>
            <p>{fact}</p>
            {
              imageUrl && (
                <img src={imageUrl} alt={`Imagen encontrada segun las primeras 3 palabras de: ${fact}`} />
              )
            }
        </main>
    );
}

export default App;
