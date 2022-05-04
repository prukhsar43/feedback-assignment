import React from 'react'
import style from './Submit.module.css'
import { Modal, Input,Select  } from 'antd';
const { TextArea } = Input;
const { Option } = Select;



const Output = ({title,visible,onOk,onCancel,onChange,value,flag}) => {

  return (

             <div> 
                <Modal title={title} visible={visible} onOk={onOk} onCancel={onCancel}   >

                    <label className={style.labell}>Rating</label>  

                    <select   style={{ width: 470, height:30, marginTop:10,marginBottom:10}} onChange={onChange} name="rating" value={value.rating} type="number">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>

                    <label className={style.labell}   >Your Name</label>   
            
                    <Input placeholder="Your Name" style={{ marginTop:10,marginBottom:10}} name="name"  onChange={onChange} value={value.name}   />
                     {
                         flag?<p style={{color:"red"}}> Name should be greater than 2 characters</p>:""
                     }
                    <label className={style.labell}>Comment</label>

                    <TextArea rows={4} style={{ marginTop:10 }} name="comment" onChange={onChange} value={value.comment}   />

              </Modal> 

                </div>
  )
}

export default Output