// import logo from './logo.svg';
import './App.css';
import Create from './components/create';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import Read from './components/read';
import Update from './components/update';

function App() {
  return (
   
    <div className="bg-red-500  App ">
      <h1 className='text-white font-bold text-xl md:text-5xl'>React Crud Operations</h1>
        <div className='w-full flex justify-center'>
        <div className='w-3/4 lg:w-1/4 flex justify-between text-white twxt-3xl font-semibold mt-5'>
        <NavLink to="/"  className="w-20 h-9 bg-gray-600 text-center rounded p-2 ">Create</NavLink>
        <NavLink to="/read"  className="w-20 h-9 bg-gray-600 text-center rounded p-2 " >Read</NavLink>
        {/* <NavLink to="/update">Update</NavLink> */}
        </div>
        </div>
      {/* <Create /> */}
    <Routes>
    <Route exact path='/' element={ <Create/>  } />
    <Route  path='/read' element={ <Read />  } />
    <Route  path='/:id' element={ <Update />  } />
    </Routes>
    </div>
    
  );
}

export default App;
