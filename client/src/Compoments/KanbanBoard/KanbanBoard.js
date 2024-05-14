import React from "react";
import './kanban.css';
import Board from "../Board/Board";

const Kanban = () => {
  return (
    <>
      <div className="app">
        <div className="app_nav">
          <h2>Kanban</h2>
        </div>

        <div className="app_outer">
          <div className="app_boards">
            <Board />
            <Board />
            <Board />
            <Board />
            <Board />
          </div>
        </div>
      </div>
    </>
  );
};

export default Kanban;