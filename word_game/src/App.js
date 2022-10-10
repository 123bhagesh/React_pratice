import logo from './logo.svg';
import './App.css';
import MainRoutes from './Components/MainRoutes';

function App() {
  return (
    <div className="App">
      <div>
        <a href='/word'>Word Page</a>      
      </div>
      <MainRoutes/>
    </div>
  );
}

export default App;
