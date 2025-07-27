import React from 'react'

const AlertMessage = ({ type = "info", message }) => {
    const color = type === "error" ? "bg-red-100 text-red-700" : type === "success" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700";
    return (
        <div className={`p-3 mb-4 border-l-4 border-${color}-600 bg-${color}-100 text-${color}-800`}>
            {message}
        </div>
    )
}

export default AlertMessage
