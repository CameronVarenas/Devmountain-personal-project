import React from 'react'

export default function Auth() {
    return (
        <div className='auth'>
            <h3>Login</h3>
            <section>
                <input className='auth-input' placeholder='Username or Email'></input>
            </section>
            <section>
                <input className='auth-input' placeholder='Password'></input>
            </section>
            <section className='login-options'>
                <button className='login-button'>Login</button>
                <p>Forgot Password?</p>
            </section>

            <p>Or</p>

            <h3>Register Now</h3>
            <section>
                <input className='auth-input' placeholder='Username'></input>
            </section>
            <section>
                <input className='auth-input' placeholder='Email Address'></input>
            </section>
            <section>
                <input className='auth-input' placeholder='Password'></input>
            </section>
            <section>
                <input className='auth-input' placeholder='Re-Type Password'></input>
            </section>
            <section className='register-button'>
                <button>Register</button>
            </section>
        </div>
    )
}
