import React from 'react'
import Contact from '../components/Contact/Contact'
import RecentProjects from '../components/RecentProjects/RecentProjects'
import TopBanner from '../components/TopBanner/TopBanner'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
    return (
        <>
        <TopNavigation/>
        <TopBanner/>
        <About/>
        <RecentProjects/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default HomePage
