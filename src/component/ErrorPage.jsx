import React from 'react'
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className='errorPage'>
            <div className="error-container">
                <h1>Oops! Something went wrong.</h1>
                <p>We apologize for the inconvenience.</p>
                <a className="btn btn-error" href="/login">Go to Home</a>
            </div>
        </div>
    )
}

export default ErrorPage
