import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/products' element={<Products/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
