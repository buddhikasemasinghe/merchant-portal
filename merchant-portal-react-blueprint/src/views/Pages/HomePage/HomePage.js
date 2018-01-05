import React from 'react';
import HomePageHeader from "../../../components/Header/HomePageHeader";
import HomePageFooter from "../../../components/Footer/HomePageFooter";

const HomePage = () => {
    return (
        <div className="home-page-wrapper">
            <HomePageHeader/>
            <div>
            <h1>Header Content</h1>
            </div>
            <HomePageFooter/>
        </div>
    );
};

export default HomePage;
