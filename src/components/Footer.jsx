import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div style={{ backgroundColor: 'rgb(106, 27, 154)', color: 'white' }} className='mt-5 p-4'>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="website">
              <h4><i className="fa-solid fa-shirt"></i>{' '} TeeRex T-Shirts</h4>
              <h6>Designed and built with all the love in the world by the "MI" team with the help of our contributors.</h6>
              <h6>Code licensed MIT, docs CC BY 3.0.</h6>
              <p>Currently v5.3.2</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="links">
              <h4>Links</h4>
              <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home </Link>
              <Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }}>Cart </Link>
              <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'white' }}>WishList</Link>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="guides">
              <h4>Guides</h4>
              <Link to={'https://getbootstrap.com/'} style={{ textDecoration: 'none', color: 'white' }}>React</Link>
              <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</Link>
              <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: 'none', color: 'white' }}>Routing</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="contact">
              <h4>Contact us</h4>
              <div className='d-flex flex-column'>
                <input className='form-control mb-2' placeholder='Enter your mail'></input>
                <button className="btn btn-info" style={{ width: '100%' }}>Subscribe</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className='icons mt-3 d-flex justify-content-evenly fs-4'>
              <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-facebook"></i></Link>
              <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-instagram"></i></Link>
              <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-twitter"></i></Link>
              <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}><i className="fa-solid fa-envelope"></i></Link>
            </div>
          </div>
        </div>
        <p className="text-center">Copyright 2023 Build with React.</p>
      </div>
    </div>
  );
}

export default Footer;
