function Todo(props) {
    return (
      /*get rid of html code for add my code*/
      <div>
        <h1>{props.text}</h1>
        <div class='card'> 
        <h2>TITLE</h2>
        <div classname='actions'>
          <button class='btn'>Delete</button>
        </div>
        </div>
      </div>
    );
  }
  
  export default Todo;