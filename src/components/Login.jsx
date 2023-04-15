import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({ email: '', password: '' })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
    }
    function handleChange(e) {
        setLoginFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button>Log in</button>
            </form>
        </div>
    )

}