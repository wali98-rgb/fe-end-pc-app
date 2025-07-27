import React from 'react'

const Button = ({ children, onClick, type = "button", className = "" }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors ${className}`}
        >
            {children}
        </button >
    )
}

export default Button
