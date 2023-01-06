import logo from './logo.svg';
import './App.css';
import Memo from './Component/Memo';
import Debounceing from './Component/Debounceing';
import Throttling from './Component/Throttling';

function App() {
  return (
    <div className="App">
      {/* <Memo/> */}
      {/* <Debounceing/> */}
      <Throttling />
      
    </div>
  );
}

export default App;
