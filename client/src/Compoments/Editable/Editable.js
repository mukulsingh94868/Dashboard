import React from 'react'
import './editable.css';
import { X } from 'react-feather';

const Editable = (props) => {
  return (
    <div className='editable'>
        <p>{props?.text || "Add Item"}</p>
        <form className='editable_edit'>
            <input type='text' defaultValue={props?.text} placeholder={props?.placeholder} />
            <div className='editable_edit_footer'>
                <button type='submit'>{props?.buttonText || 'Add'}</button>
                <X />
            </div>
        </form>
    </div>
  )
}


export default Editable