import React from 'react'
import Category from './Caregory/Category'
import Price from './Price/Price'
import Color from './Colors/Color'
import './Sidebar.css'
 function Sidebar({handleChange}) {
  return (
    <>
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
      <Category handleChange={handleChange}/>
      <Price handleChange={handleChange}/>
      <Color handleChange={handleChange}/>
    </section>
  </>
  )
}
export default Sidebar
