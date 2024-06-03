import React from 'react';

const Dashboard = () => {
    return (
        <div className='min-h-screen flex gap-10'>
            <aside className='w-1/4 bg-gray-800 text-white p-5'>
                <h2 className='text-2xl font-bold mb-5'>Dashboard</h2>
                <nav>
                    <ul>
                        <li className='mb-3'>
                            <a href='/dashboard' className='hover:text-gray-300'>Overview</a>
                        </li>
                        <li className='mb-3'>
                            <a href='/dashboard/profile' className='hover:text-gray-300'>Profile</a>
                        </li>
                        <li className='mb-3'>
                            <a href='/dashboard/settings' className='hover:text-gray-300'>Settings</a>
                        </li>
                        <li className='mb-3'>
                            <a href='/dashboard/support' className='hover:text-gray-300'>Support</a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className='flex-grow'>
                <div className='bg-white p-10 rounded-lg shadow-lg'>
                    <h1 className='text-3xl font-bold mb-5'>Dashboard Content</h1>
                    <p>
                        Welcome to the dashboard. Here you can manage your profile, settings, and access various features.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
