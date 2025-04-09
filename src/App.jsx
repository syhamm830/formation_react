import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Formulaire from './formulaire';
import Todolist from './todoapp/todolist';
import Navbar from './Navbar';

function App() {

  return (
    <>
       <BrowserRouter>
         < Navbar/>
         <Routes>
             <Route path="/" element={<Home />} />
             <Route  path="/contact" element= {<Formulaire />}/>
             <Route path="/todolist" element={<Todolist/>} />
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
