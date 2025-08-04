import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Bar from '../../../components/client/Bar'
import LogoImg from '../../../assets/img/logo.png'
import '../../../assets/css/client/Register.css'

const Register = () => {
    ReactDOM.createRoot(document.getElementById('title-app')).render(
        <Bar nameBar='Halaman Registrasi | End-PC' />
    )

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

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
        if (!formData.name) {
            newErrors.name = 'Name is required'
        } else if (formData.name.length < 3) {
            newErrors.name = 'Name must be at least 3 characters long'
        }

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

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match'
        } else if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password is required'
        }

        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = validateForm()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        } else {
            // Handle successful registration
            console.log('Form submitted successfully', formData)
        }
    }

    return (
        <div className='register-page'>
            <div className='flex justify-center items-center'>
                <div className='w-full max-w-md p-2 rounded'>
                    <div className='flex justify-center mb-4'>
                        <img src={LogoImg} alt="Logo" className='w-24 h-24' />
                    </div>
                    <h2 className='text-2xl font-bold text-center mb-1'>REGISTER</h2>
                </div>
            </div>

            <form onSubmit={handleSubmit} className='max-w-md mx-auto p-4 bg-white'>
                <div className='mb-4'>
                    <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className='px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                        placeholder='Masukkan nama lengkap Anda'
                    />
                    {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
                </div>
                <div className='mb-4'>
                    <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className='px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                        placeholder='Masukkan email Anda'
                    />
                    {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        className='px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                        placeholder='Masukkan password Anda'
                    />
                    {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>}
                </div>
                <div className='mb-4'>
                    <label htmlFor="confirmPassword" className='block text-sm font-medium text-gray-700 mb-1'>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className='px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                        placeholder='Konfirmasi password Anda'
                    />
                    {errors.confirmPassword && <p className='text-red-500 text-sm mt-1'>{errors.confirmPassword}</p>}
                </div>

                <button type="submit" className='w-full bg-blue-500 text-white py-2 hover:bg-blue-400'>REGISTER</button>
            </form>

            <div className='text-center mt-4'>
                <p className='text-sm text-gray-600'>Sudah punya akun? <a href='/login' className='text-blue-500 hover:underline'>Login disini</a></p>
            </div>
            <div className='text-center mt-4'>
                <p className='text-sm text-gray-600'>Kembali ke <a href='/' className='text-blue-500 hover:underline'>Beranda</a></p>
            </div>
        </div>
    )
}

export default Register
