import React from 'react';
import './card.css';
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather';
import Chip from '../Chip/Chip';

const Card = () => {
  return (
    <div className='card'>
        <div className='card_top'>
            <div className='card_labels'>
                <Chip text="Frontend" color="green" />
            </div>
            <MoreHorizontal />
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