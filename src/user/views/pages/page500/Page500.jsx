import React from 'react'
import '@assets/scss/pages/_page500.scss'

const Page500 = () => {
  return (
    <div className="page500">
      <div className="page500-container">
        <div className="page500-content">
          <h1 className="page500-title">500</h1>
          <h4 className="page500-subtitle">Houston, we have a problem!</h4>
          <p className="page500-text">The page you are looking for is temporarily unavailable.</p>
        </div>
        <div className="page500-search">
          <label className="visually-hidden" htmlFor="page500-query">Search</label>
          <input id="page500-query" type="text" placeholder="What are you looking for?" />
          <button type="button" className="btn btn-info">Search</button>
        </div>
      </div>
    </div>
  )
}

export default Page500
