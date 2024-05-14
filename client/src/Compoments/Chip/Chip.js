import React from 'react';
import './chip.css';
import { X } from 'react-feather';

const Chip = (props) => {
    return (
        <>
            <div className='chip' style={{ backgroundColor: props?.color }}>
                {props?.text}
                {props?.close && <X />}
            </div>
        </>
    )
}

export default Chip