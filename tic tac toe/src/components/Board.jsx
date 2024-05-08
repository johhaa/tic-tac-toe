import { useState } from "react";
import "./../App.css"
import Square from "./Square";
import checkWinner from "../utils/checkWinner";


const Board = ({xIsNext, squares, onPlay}) => {
    
    function handleClick(i){
        if(squares[i] || checkWinner(squares)){
            return
        }
        const nextSquares = squares.slice()
        xIsNext ? nextSquares[i] = "X" : nextSquares[i] = "O"
        onPlay(nextSquares)
    }

    const winner = checkWinner(squares)
    let status
    if(winner){
        status = "Winner is " + winner 
    }
    else{
        status = "Next player is " + (xIsNext ? "X" : "O")
    }


    return (
        <>
        <p>{status}</p>
        
        <div className="board">
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </div>

        </>
    );
}
 
export default Board
