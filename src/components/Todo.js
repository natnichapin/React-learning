import {useState} from 'react' ; //referencing the library name

import Modal from "./Modal"; //อ้าง path ดีๆ
import Backdrop from "./Backdrops";


function Todo(props) { /* prop ส่งมาเป็น object*/
  const [modalIsOpen,setModalIsopen]= useState(false); //เปลี่ยน state มีการ re-evaluate render 

function deleteHandler() {
  setModalIsopen(true);

  }

  function closeModalHandler(){
    setModalIsopen(false);
  }



  //document.querySelector('button').addEventListener('click') //เกี่ยวกับ Dom //หลังๆจะมีframework มาช่วย
    return (
      /*get rid of html code for add my code*/
     /* <div>
        <h1>{props.text}</h1>*/
        <div className='card'> 
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={deleteHandler} >Delete</button>  
        
        </div>
        { modalIsOpen && <Modal onConfirm={closeModalHandler} onCancle={closeModalHandler}/>} 
        { modalIsOpen && <Backdrop onCancle={closeModalHandler}/>} 
        
        </div>
      /*</div>*/
      /*  function จะทำงานเมื่อ evaluated code = ใส่ () */
      /*  function จะทำงานเมื่อ click = ไม่ต้องใส่ () */
    );
  }
  
  export default Todo;