import './App.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import About from './components/About';
import ProductContainer from './containers/ProductContainer';

function App() {

  const [items, setItems] = useState([])
  const [piece, setPiece] = useState(0)

  const addPiece = () =>{
      setPiece(piece+1)
  }

  const deletePiece = () => {
    setPiece(piece-1)
  }

  return (
    <>
      <Navbar piece={piece} />

      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/products'>
          <ProductContainer addPiece={addPiece} deletePiece={deletePiece} />
        </Route>
        <Route path='/'>
          <ProductContainer addPiece={addPiece} deletePiece={deletePiece} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
