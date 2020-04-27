import React from 'react';
import logo from '../../images/recovered.png';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
const Navbar = ({ link, nav, font, lan }) => {
  return (
    <div className='navbar sticky-top bg-white border-bottom'>
      <div className='container'>
        <div className='d-flex align-items-center'>
          <img
            className='logo'
            src={logo}
            style={{ width: '55px' }}
            alt='&nbsp;'
          />

          <h5 className='mb-0 font-weight-bold'>
            {lan === 'bn' ? 'কোভিড-১৯' : 'COVID-19'}
            <br />
            <small className='text-muted font-weight-light'>
              {lan === 'bn' ? 'করোনা ভাইরাস' : 'Corona-Virus'}
            </small>
          </h5>
        </div>
        <ul className='navbar-nav flex-row ml-auto'>
          <li className='nav-item ml-3'>
            <a
              href='https://github.com/lgope/'
              className='nav-link icon github'
              target='blank'
            >
              <i className='fab fa-github'></i>
            </a>
          </li>
          <li className='nav-item ml-3'>
            <Link className={`${font} nav-link`} to={link}>
              <Button type='dashed'>{nav}</Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
