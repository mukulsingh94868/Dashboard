import React, { useState } from 'react'
import './board.css';
import { MoreHorizontal } from 'react-feather';
import Card from '../Card/Card';
import Editable from '../Editable/Editable';
import Dropdown from '../Dropdown/Dropdown';

const Board = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="board">
            {/* <div className="board_header">
                <p className="board_header_title">
                    TO do
                    <span>0</span>
                </p>
                <div className='board_top_more'>
                    <MoreHorizontal />
                    <Dropdown >
                        <div className='board_dropdown'>
                            <p>Delete Board</p>
                        </div>
                    </Dropdown>
                </div>
                <div className="board_header_title_more">
                    <MoreHorizontal />
                </div>
            </div> */}

            <div className="board_header">
                <p className="board_header_title">
                    {props.board?.title}
                    <span>{props.board?.cards?.length || 0}</span>
                </p>
                <div
                    className="board_header_title_more"
                    onClick={() => setShowDropdown(true)}
                >
                    <MoreHorizontal />
                    {showDropdown && (
                        <Dropdown
                            class="board_dropdown"
                            onClose={() => setShowDropdown(false)}
                        >
                            <div className='board_dropdown'>
                                <p>Delete Board</p>
                            </div>
                        </Dropdown>
                    )}
                </div>
            </div>

            <div className="board_cards custom-scroll">
                <Card />

                <Editable
                    text="+ Add Card"
                    placeholder="Enter Card Title"
                    displayClass="board_add-card"
                    editClass="board_add-card_edit"
                />
            </div>
        </div>
    )
}

export default Board