import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/shared/Header'
import { Footer } from '../components/shared/Footer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MasterLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <div>
      {/* ToastContainer is necessary for rendering the toast */}
      <ToastContainer />
      {/* Other components */}
    </div>
    </>
  )
}
export default MasterLayout
