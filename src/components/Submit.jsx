import React from 'react'
import { Button } from 'antd';
import style from './Submit.module.css'

const Submit = ({handleOnClick}) => {
  return (
   
   
    <div> 
         <img src="https://image.globalgolf.com/dynamic/1056234/aar/right-shoe-side-angle/puma-ignite-fasten8-spikeless.jpg?s=350"/><br/>
         <Button onClick={handleOnClick} type="danger"><strong>Click to fill Feedback form</strong></Button>
    </div>
  )
}

export default Submit