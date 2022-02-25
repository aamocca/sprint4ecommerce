import React from 'react'

const Navbar = ({show}) => {
  return (
    <div className={show ? 'sidenav active' : 'sidenav'}>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='./pages/Products/ProductList/ProductList.js'>Productos</a>
        </li>
        <li>
          <a href='#'>Tiendas</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
