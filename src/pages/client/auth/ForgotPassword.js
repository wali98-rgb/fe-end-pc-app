import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Bar from '../../../components/client/Bar'
import { Link } from 'react-router-dom'
import LogoImg from '../../../assets/img/logo.png'
import '../../../assets/css/client/ForgotPassword.css'

// Set the title for the Forgot Password page
ReactDOM.createRoot(document.getElementById('title-app')).render(
    <Bar nameBar='Halaman Lupa Password | End-PC' />
)

const ForgotPassword = () => {
    const [email, setEmail] = useState({})

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target

        setEmail({
            ...email,
            [name]: value
        })
    }

    const validateForm = () => {
        const newErrors = {}

        if (!email.email) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(email.email)) {
            newErrors.email = 'Email is invalid'
        }

        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const validationErrors = validateForm()

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        } else {
            // Handle successful password reset request
            console.log('Password reset request submitted successfully', email)
        }
    }

    return (
        <div className='forgot-password-page'>
            <div className='flex justify-center items-center'>
                <div className='w-full max-w-md p-2 rounded'>
                    <div className='flex justify-center mb-4'>
                        <img src={LogoImg} alt="Logo" className='w-24 h-24' />
                    </div>
                    <h2 className='text-2xl font-bold text-center mb-1'>LUPA PASSWORD</h2>
                </div>
            </div>
            <form onSubmit={handleSubmit} className='max-w-md mx-auto p-4 bg-white'>
                <div className='mb-4'>
                    <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email.email || ''}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-100'
                        placeholder='Masukkan email Anda'
                    />
                    {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
                </div>
                <button
                    type="submit"
                    className='w-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-400 transition-colors'
                >
                    RESET PASSWORD
                </button>
            </form>

            <div className='flex justify-center mt-4'>
                <p className='text-sm text-gray-600'>Sudah ingat password? <Link to='/login' className='text-blue-500 hover:underline'>Masuk</Link></p>
            </div>

            <div className='text-center mt-4'>
                <p className='text-sm text-gray-600'>Kembali ke <Link to='/' className='text-blue-500 hover:underline'>Beranda</Link></p>
            </div>
        </div>
    )
}

export default ForgotPassword
