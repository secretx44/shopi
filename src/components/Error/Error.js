import React from 'react';
import { error } from "../../utils/banner";


const Error = () => {
  return (
    <div className='container'>
        <div class = "flex flex-center error">
            <img src = {error} alt = "error" />
        </div>
    </div>
  )
}

export default Error