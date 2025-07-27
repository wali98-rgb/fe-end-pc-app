import React from 'react'

const InputField = () => {
    return (
        <div className='mb-4'>
            <label className='block text-gray-700 mb-2 font-medium'>Input Field</label>
            <input
                type={type}
                name={name}
                className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Masukan input disini...'
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default InputField
