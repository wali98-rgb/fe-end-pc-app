import React from 'react'
import ReactDOM from 'react-dom/client'
import Bar from '../../../components/client/Bar'
import { Link } from 'react-router-dom'
import LogoImg from '../../../assets/img/logo.png'

// Set the title for the Forgot Password page
ReactDOM.createRoot(document.getElementById('title-app')).render(
    <Bar nameBar='Halaman Lupa Password | End-PC' />
)

const ForgotPassword = () => {
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
            <div className='flex justify-center items-center'>
                <Link to="/" className='text-blue-500 hover:underline'>Beranda</Link>
            </div>
        </div>
    )
}

export default ForgotPassword
