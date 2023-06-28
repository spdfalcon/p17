import React from 'react'
import TopBar from '../TopBar/TopBar'
import NavBar from '../NavBar/NavBar'
import Landing from '../Landing/Landing'

export default function Header() {
  return (
    <div>
      <TopBar></TopBar>
      <NavBar></NavBar>
      <Landing></Landing>
    </div>
  )
}
