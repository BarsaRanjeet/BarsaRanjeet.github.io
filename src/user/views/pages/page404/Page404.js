import React from 'react'
import '@assets/scss/pages/_page404.scss'

const Page404 = () => {
  return (
    <div className="page404">
      <div className="page404-container">
        <div className="page404-content">
          <h1 className="page404-title">404</h1>
          <h4 className="page404-subtitle">Oops! You are lost.</h4>
          <p className="page404-text">The page you are looking for was not found.</p>
        </div>
        <div className="page404-search">
          <label className="visually-hidden" htmlFor="page404-query">Search</label>
          <input id="page404-query" type="text" placeholder="What are you looking for?" />
          <button type="button" className="btn btn-info">Search</button>
        </div>
      </div>
    </div>
  )
}

export default Page404
