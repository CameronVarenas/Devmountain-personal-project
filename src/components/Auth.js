import React from 'react'

export default function Auth() {
    return (
        <div className='auth'>
            <h3>Login</h3>
            <section>
                <input className='auth-input' placeholder='Username or Email'></input>
                <input className='auth-input' placeholder='Password'></input>
                <button>Login</button>
                <p>Forgot Password?</p>
            </section>
            <p>Or</p>
            <h3>Register Now</h3>
            <section>
                <input className='auth-input' placeholder='Username'></input>
                <input className='auth-input' placeholder='Email Address'></input>
                <input className='auth-input' placeholder='Password'></input>
                <input className='auth-input' placeholder='Re-Type Password'></input>
                <button>Register</button>
            </section>
        </div>
    )
}
