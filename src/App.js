import './App.css';
import {Route , BrowserRouter, Routes} from 'react-router-dom'
import Navbar from './component/navbar/nav';
import Shop from './pages/shop';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
