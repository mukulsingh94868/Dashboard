import React from 'react'
import './board.css';
import { MoreHorizontal } from 'react-feather';
import Card from '../Card/Card';
import Editable from '../Editable/Editable';

const Board = () => {
    return (
        <div className="board">
            <div className="board_header">
                <p className="board_header_title">
                    TO do
                    <span>0</span>
                </p>
                <div
                    className="board_header_title_more"
                >
                    <MoreHorizontal />
                </div>
            </div>
            <div className="board_cards custom-scroll">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

                <Editable />
            </div>
        </div>
    )
}

export default Board