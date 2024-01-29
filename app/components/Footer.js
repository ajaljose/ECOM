import React from 'react'

function Footer() {
  return (
    <>
        <footer className='footer'>
            <div className='footer__about foot-col'>
                <h2>About</h2>
                <a href='#'>Contact Us</a>
                <a href='#'>About Us</a>
                <a href='#'>Careers</a>
                <a href='#'>Stories</a>
            </div>
            <div className='footer__help foot-col'>
            <h2>Help</h2>
                <a href='#'>Payments</a>
                <a href='#'>Shipping</a>
                <a href='#'>Cancellation & Return</a>
                <a href='#'>FAQ</a>
            </div>
            <div className='footer__policy foot-col'>
            <h2>Consumer Policy</h2>
            <a href='#'>Payments</a>
                <a href='#'>Shipping</a>
                <a href='#'>Cancellation & Return</a>
                <a href='#'>FAQ</a>
            </div>
            <div className='footer__social foot-col'>
            <h2>Social</h2>
            <a href='#'>Facebook</a>
                <a href='#'>Twitter</a>
                <a href='#'>Youtube</a>
            </div>
        </footer>
    </>
  )
}

export default Footer