import { func } from "prop-types";
import { useState } from "react";


const Square = ({ value, onSqaureClick }) => {
    return (
        <button
            className="square"
            onClick={onSqaureClick}
        >
            {value}
        </button>
    );
}

function Board(xIsNext, squares, onPlay) {
    const handleClick = (i) => {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        xIsNext ? nextSquares[i] = 'X' : nextSquares[i] = 'O';
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSqaureClick={() => handleClick(0)} />
                <Square value={squares[1]} onSqaureClick={() => handleClick(1)} />
                <Square value={squares[2]} onSqaureClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSqaureClick={() => handleClick(3)} />
                <Square value={squares[4]} onSqaureClick={() => handleClick(4)} />
                <Square value={squares[5]} onSqaureClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSqaureClick={() => handleClick(6)} />
                <Square value={squares[7]} onSqaureClick={() => handleClick(7)} />
                <Square value={squares[8]} onSqaureClick={() => handleClick(8)} />
            </div>
        </>
    );
}

export default function Game() {
    const [xIsNext, setXIsNext]  = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    const handlePlay = (nextSquares) => {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove) {
        // TODO
    }
    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });
    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}