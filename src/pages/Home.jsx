import React from 'react';
import Banner from '../Components/Banner';
import Types from '../Components/Types';
import TopBloggers from '../Components/TopBloggers';

const Home = () => {
    return (
        <div>
          <Banner/>
          <Types/>
          <TopBloggers/>
        </div>
    );
};

export default Home;