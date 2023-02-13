import React from 'react';
import "./Loader.scss";

const Loader = () => {
  return (
           <div class="loader mx-auto">
                <span class="hour"></span>
                <span class="min"></span>
                <span class="circel"></span>
            </div>
  )
}

export default Loader