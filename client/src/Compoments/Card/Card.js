import React, { useState } from 'react';
import './card.css';
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather';
import Chip from '../Chip/Chip';
import Dropdown from '../Dropdown/Dropdown';

const Card = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div className='card'>
            <div className='card_top'>
                <div className='card_labels'>
                    <Chip text="Frontend" color="green" />
                </div>
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

            <div className='card_title'>dfgdfg</div>
            <div className='card_footer'>
                <p>
                    <Clock />
                    29 Sept
                </p>

                <p>
                    <CheckSquare />
                    1/4
                </p>
            </div>
        </div>
    )
}

export default Card