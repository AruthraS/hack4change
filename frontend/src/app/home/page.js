'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Page = () => {
    return (
        <>
            <div style={{ 
                width: '100vw', 
                height: '100px', 
                display: 'flex', 
                alignItems: 'center', 
                backgroundImage: 'linear-gradient(316deg, #310e68 0%, #5f0f40 74%)',
                backgroundColor: '#310e68'
            }}>
                <nav style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <img src="your-image-url.jpg" alt="Logo" style={{ height: '80px', margin: '10px' }} />
                    <div style={{ display: 'flex', marginLeft: 'auto' }}>
                        <a href="#home" style={{ color: 'white', margin: '0 10px' }}>Home</a>
                        <a href="#login" style={{ color: 'white', margin: '0 10px' }}>Login</a>
                        <a href="#community" style={{ color: 'white', margin: '0 10px' }}>Community</a>
                    </div>
                </nav>
            </div>
            <div style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#310e68',
                backgroundImage: 'linear-gradient(316deg, #310e68 0%, #5f0f40 74%)'
            }}>
                <div style={{ width: '15%', height: '100%' }}>
                    {Array.from({ length: 8 }, (_, index) => (
                        <div key={index} style={{ width: '100%', height: '50px', textAlign: 'center'}}>
                            <p style={{color:'white'}}>hello world</p>
                        </div>
                    ))}
                </div>
                <div style={{ width: '85%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ 
                        width: '100%', 
                        height: '100px', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center'
                    }}>
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            style={{ 
                                width: '50%', 
                                padding: '10px', 
                                backgroundColor: 'rgba(255, 255, 255, 0.3)', 
                                backdropFilter: 'blur(10px)', 
                                border: '1px solid rgba(255, 255, 255, 0.18)', 
                                borderRadius: '5px', 
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
                            }} 
                        />
                    </div>
                    <div style={{ 
                        width: '100%', 
                        height: 'calc(100% - 100px)', 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(4, 1fr)', 
                        gridTemplateRows: 'repeat(3, 1fr)', 
                        gap: '10px', 
                        padding: '10px' 
                    }}>
                        {Array.from({ length: 12 }, (_, index) => (
                            <div key={index} style={{ 
                                backgroundColor: 'rgba(255, 255, 255, 0.3)', 
                                backdropFilter: 'blur(10px)', 
                                border: '1px solid rgba(255, 255, 255, 0.18)', 
                                borderRadius: '10px', 
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent: 'center', 
                                alignItems: 'center' 
                            }}>
                                <div style={{ padding: '10px', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '5px' }}>
                                    Item {index + 1}
                                </div>
                                <div style={{ marginTop: '5px', fontSize: '12px', color: '#555' }}>
                                    Caption {index + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
