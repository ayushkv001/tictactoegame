import React from "react";

// const message = winner?`Winner is ${winner}`:`Next player is ${current.next?'X':'O'}`;

const StatusMessage = ({winner,current}) => {

    const noMovesLeft = current.board.every((el)=> el!==null)
    return <div className="status-message">
        {winner&&<>
        Winner is{' '}
        <span className={winner==='X'?'text-green':'text-orange'}>
            {winner}
        </span>
        </>}
        {!winner&&!noMovesLeft&&<>
            Next player is <span className={current.next?'text-green':'text-orange'}>{current.next?'X':'O'}</span>
        </>}
        {!winner&&noMovesLeft&&`Game is Draw`}
    </div>
}

export default StatusMessage;