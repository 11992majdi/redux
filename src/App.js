
import './App.css';
import AddTask from './Components/AddTask';
import ListTasks from './Components/ListTasks';

function App() {
  return (
    <div className="App">
      <section>
      <AddTask/>
     <ListTasks />
     </section>
    </div>
  );
}

export default App;
