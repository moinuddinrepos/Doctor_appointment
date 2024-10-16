import React, { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login'
import { AdminContext } from './context/AdminContext';

const App = () => {

  const {aToken} = useContext(AdminContext)


  return aToken ? (
    <div className='bg-slate-500'>
      <ToastContainer/>
    </div>
  ) : (
    <>
      <Login/>
      <ToastContainer/>
    </>
  )
}

export default App