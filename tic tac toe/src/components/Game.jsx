import { memo, useState } from "react";
import "./../App.css"
import Board from "./Board";

const Game = () => {
    
    const [history, setHistory] = useState([Array(9).fill(null)])

    
    const [currentMove, setCurrentMove] = useState(0)
    const xIsNext = currentMove % 2 === 0
    const currentSquares = history[currentMove]
    

    function handlePlay(nextSquares){
        const nextHistory = [
            ...history.slice(0, currentMove + 1),
            nextSquares
        ]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
        setXisNext(!xIsNext)
    }



function jumpTo(nextMove) {
    setCurrentMove(nextMove)
    setXisNext(xIsNext)
  }

    const moves = history.map((squares, move)=>{
        let description 
        if(move > 0) {
            description = "go to # " + move
        }
        else{
            description = "go to start game"
        }
        return(
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    return (
        <div className="game">
            <div className="game-board">
                <Board 
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div className="game-info">
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
    );
}
 
export default Game;