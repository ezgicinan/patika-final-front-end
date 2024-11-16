import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList';
import FilterBar from './components/FilterBar';
import EditModal from './components/EditModal';

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

function App() {
  //const [count, setCount] = useState(0)
  return (
    <div className="App">
      <FilterBar />
      <ProductList />
      <div>
        <EditModal />
      </div>
      
    </div>
  );
}

export default App
