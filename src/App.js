import 'antd/dist/antd.css';
import ToDo from "./components/ToDo/ToDo"
import './App.css';

const App = () => {
  return (
    <div className="container">
    {/* <h4>React App To Learn Redux</h4> */}
    <ToDo />
    </div>
  );
}

export default App;