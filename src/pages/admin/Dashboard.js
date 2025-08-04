import React from 'react'
import ReactDOM from 'react-dom/client';
import Bar from '../../components/client/Bar';

const Dashboard = () => {
    ReactDOM.createRoot(document.getElementById('title-app')).render(
        <React.StrictMode>
            <Bar />
        </React.StrictMode>
    );

    return (
        <>
            Ini halaman Dashboard Admin
        </>
    )
}

export default Dashboard
