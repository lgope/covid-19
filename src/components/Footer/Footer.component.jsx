import React from 'react';
const Footer = ({ font, lan }) => {
  return (
    <footer className={`${font} border-top`}>
      <div className='container'>
        <p className='lead text-center mb-0 p-4'>
          {lan === 'bn' ? (
            <p>
              ডেভেলপ করেছে {' '}
              <a
                className='text-primary font-weight-bold'
                href='https://github.com/lgope'
                target='blank'
              >
                লক্ষন
              </a>
            </p>
          ) : (
            <p>
              Developed With
              <i className='fas heart fa-heart mx-2'></i>
              by {' '}
              <a
                className='text-primary font-weight-bold'
                href='https://github.com/lgope'
                target='blank'
              >
                Lakshman
              </a>
            </p>
          )}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
