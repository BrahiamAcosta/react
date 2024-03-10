import { useEffect, useState } from 'react';

export function App() {
    const CAT_ENDPOINT_FACT_URL = 'https://catfact.ninja/fact';
    //const CAT_ENDPOINT_URL = `https://cataas.com/cat/says/${firstWord}`
    const [fact, setFact] = useState();

    useEffect(() => {
        fetch(CAT_ENDPOINT_FACT_URL)
            .then((response) => response.json())
            .then((data) =>{
                const fact = data.fact
                setFact(fact)
                const firstWord = fact.split(' ')[0]
                console.log(firstWord)
            });
    }, []);

    return (
        <main>
            <h1>Datos sobre gatos</h1>
            {fact && <p>{fact}</p>}
        </main>
    );
}
