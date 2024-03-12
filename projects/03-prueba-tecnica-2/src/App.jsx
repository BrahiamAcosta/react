import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const GIF_URL = "https://api.giphy.com/v1/gifs/search"
  const API_KEY = "2cZkiFTqyiS79UdSapL6LHWlublpl7iy"
  const FACT_URL = "https://catfact.ninja/fact"
  const [fact,setFact]= useState('')

  useEffect(() =>{
    console.log("fetch")
    fetch(FACT_URL).then(response => response.json()).then(data => setFact(data.fact))
  },[])

  useEffect(()=>{
    if(fact === '') return
    const threeWords = fact.split(" ",3).join(' ')
    console.log(threeWords)
    fetch(`${GIF_URL}?q=${threeWords}&api_key=${API_KEY}&limit=1`).then(response => response.json()).then(data => console.log(data))
  },[fact])
  return(
    <main>
      <h1>Cat Facts</h1>
      <p>{fact}</p>
    </main>
  )
}

export default App
