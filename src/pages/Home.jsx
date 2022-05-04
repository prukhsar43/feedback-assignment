import React, { useState } from 'react';

import { Input,Select,Modal  } from 'antd';
import style from './Home.module.css'
import Submit from '../components/Submit'
import Output from '../components/Output';

const { Option } = Select;

const { TextArea } = Input;


const Home =  ( )=> {

      const[state,setState]=useState({
        name:"",
        comment:"",
        rating:""
      })

      const [isModalVisible, setIsModalVisible] = useState(false);

      const[flag,setFlag]=useState(false)
      
      const handleOnChange=(event)=>{
        setState({...state,[event.target.name]:event.target.value})
       
      }

     
      
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      console.log(state)


      if(state.name.length<=2 ){
        
        setFlag(true)
          
      }

      
      else {

        alert(`Current state is {'author':${state.name},  'rating':${state.rating},  'Comment':${state.comment}}`)
        setIsModalVisible(false)
        setFlag(false)

       
        
        
      }
      
       
    };
  
    const handleCancel = () => {
      setIsModalVisible(false)
     
    };

       
    
     
     
      

      

  return (
    <div>
       <Submit handleOnClick={showModal}/>

       <Output  title="Submit Comment" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} onChange={handleOnChange} 
       value={state} flag={flag}/>

       
        </div>
  )
}

export default Home