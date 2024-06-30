import React from 'react'
import Head from './Head'
import './header.css'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function Header() {
  return (
    <>
    <Head/>
        <header>
        <div className='container paddingSmall'>
            <nav>
                <ul className='flex'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/culture'>Culture</Link></li>
                    <li><Link to='/politics'>Politics</Link></li>
                    <li><Link to='/memes'>Memes</Link></li>
                    <li><Link to='/sports'>Sports</Link></li>
                    <li><Link to='/reviews'>Reviews</Link></li>
                </ul>
                <button className='barIcon'>
                    <i className='fa fa-bars'></i>
                </button>
            </nav>
            
        </div>
        </header>
    </>
  )
}

export default Header