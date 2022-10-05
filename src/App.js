import Todo from "./components/Todo";
import Modal from "./components/Madal";
import Backdrop from "./components/Backdrops";
function App() {
  return (
    /*get rid of html code for add my code*/
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Explore the full React course'/>
      <Modal/> 
      <Backdrop/>
    </div>
  );
}

export default App;
