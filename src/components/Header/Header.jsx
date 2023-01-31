import React from 'react';
import { data } from './MenuItem';
import { NavLink } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import { useState } from 'react';

import { Modal } from 'antd';

const Header = () => {

  const [ isModalOpen, setIsModalOpen ] = useState(false)

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <header className='header'>
       <div className="header__container">
         {/* logo */}
         <NavLink to='/' className="header__logo">
            Logo
          </NavLink>
        {/* nav */}
          <ul className='header__nav'>
            {data.map(item => {
                return(
                  <li key={item.id}>
                    <NavLink to={item.path}>
                      {item.title}
                    </NavLink>
                  </li>
                )
              })
            }
          </ul>
        
          {/* icon */}
        <BiUserCircle onClick={showModal} />
        {showModal && (
          <Modal className="list__users">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
          </Modal>
        )}
       </div>
    </header>
  )
}

export default Header