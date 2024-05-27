import React from "react";
import './kanban.css';
import Board from "../Board/Board";
import Editable from "../Editable/Editable";

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

            <div className="app_boards_board">
              <Editable
                text="Add Board"
                placeholder="Enter Board Title"
                displayClass="app_boards_board_app"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kanban;