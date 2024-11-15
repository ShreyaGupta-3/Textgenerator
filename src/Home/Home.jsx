import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Text from '../components/Text';

function Home() {
    return (
        <>
            <Navbar />
            <div className="pt-40 ml-10 dark:bg-slate-900 dark:text-white">
            <Text/>
            </div>
            <Footer/>
        </>
    )
}

export default Home