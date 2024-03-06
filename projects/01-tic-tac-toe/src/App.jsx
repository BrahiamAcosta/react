import { useState } from "react"
import { Square } from "./components/Square"

const TURNS =   {
  X:'x',
  O:'o'
}

const WINNER_POSITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]


function App() {  
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const[winner,setWinner] = useState(null)//null indica no hay ganador, false indica empate


  const resetGame = ()=>{
    //Poner todos los estados con sus valores iniciales
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkWinner = (currentBoard)=>{
    for(const board of WINNER_POSITIONS){
      const [a,b,c] = board
      if(
        currentBoard[a]&&
        currentBoard[b]=== currentBoard[a] &&
        currentBoard[c] === currentBoard[a]
      ){
        return currentBoard[a]
      }
    }
    return null
  }
  

  const updateBoard = (index)=>{

    if(board[index] || winner)return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X? TURNS.O:TURNS.X
    setTurn(newTurn)

    //validar ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
    } else if(newBoard.every((square)=>square != null)){
      setWinner(false)
    }
  }

  return(
    <main className='board'> 
      <h1>Tic Tac Toe</h1>

      <section className='game'>
        {
          board.map((square,index) =>{
            return(
              <Square 
              key={index} 
              index={index} 
              updateBoard={updateBoard}
              isSelected={false}>
                {square}
              </Square>
            )
          })
        }
      </section>
        {/*Section encargada de controlar el cambio de los turnos*/}
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      {
        winner != null && (
          <section className="winner">
            <div className="text">
              {
                winner === false? 'Empate':'Ganó: '
              }

            <header className="win">
              {winner && <Square>{winner}</Square>}
            </header>

            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
            </div>
          </section>

        )
      }

    </main>
  )
}

export default App
