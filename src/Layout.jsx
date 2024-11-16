import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './assets/Nav'
function Layout() {
  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  )
}

export default Layout