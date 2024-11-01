import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="App flex overflow-hidden">
      <SideBar />
      <AddTask />
    </div>
  );
}

export default App;
