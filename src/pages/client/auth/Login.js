import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Bar from '../../../components/client/Bar'
import LogoImg from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import '../../../assets/css/client/Login.css'

const Login = () => {
    ReactDOM.createRoot(document.getElementById('title-app')).render(
        <Bar nameBar='Halaman Login | End-PC' />
    )

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const validateForm = () => {
        const newErrors = {}
        if (!formData.email) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid'
        }

        if (!formData.password) {
            newErrors.password = 'Password is required'
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long'
        }

        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = validateForm()

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        } else {
            // Handle successful login
            console.log('Form submitted successfully', formData)
        }
    }

    return (
        <div className='login-page'>
            <div className='flex justify-center items-center'>
                <div className='w-full max-w-md p-2 rounded'>
                    <div className='flex justify-center mb-4'>
                        <img src={LogoImg} alt="Logo" className='w-24 h-24' />
                    </div>
                    <h2 className='text-2xl font-bold text-center mb-1'>LOGIN</h2>
                </div>
            </div>

            <form onSubmit={handleSubmit} className='max-w-md mx-auto p-4 bg-white'>
                <div className='mb-4'>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        value={formData.email}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-100'
                        placeholder='Masukkan email Anda'
                    />
                    {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                </div>

                <div className='mb-1'>
                    <div className='flex justify-between items-center mb-1'>
                        <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
                        <Link to='/forgot-password' className='text-gray-700 block text-sm font-medium hover:underline'>Lupa Password?</Link>
                    </div>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        value={formData.password}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-100'
                        placeholder='Masukkan password Anda'
                    />
                    {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
                </div>

                <div className='mb-4'>
                    <div className='flex items-center'>
                        <input
                            type='checkbox'
                            id='remember-me'
                            className='mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                        />
                        <label htmlFor='remember-me' className='text-sm text-gray-700'>Remember Me</label>
                    </div>
                </div>

                <button
                    type='submit'
                    className='w-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-400 transition-colors'
                >
                    LOGIN
                </button>
            </form>

            <div className='text-center mt-4'>
                <p className='text-sm text-gray-600'>Belum punya akun? <Link to='/register' className='text-blue-500 hover:underline'>Daftar sekarang</Link></p>
            </div>
            <div className='text-center mt-4'>
                <p className='text-sm text-gray-600'>Kembali ke <Link to='/' className='text-blue-500 hover:underline'>Beranda</Link></p>
            </div>
        </div>
    )
}

export default Login
