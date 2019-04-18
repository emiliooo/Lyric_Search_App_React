import React from 'react'
import spinner from './ajax-loader.gif';

export default () => {

    return (
      <div>
          <img src={spinner} alt="loading" style={{width:'300px',display:'block' , margin:'0 auto'}}/>
      </div>
    )
  
}
