import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import Services from '../Services/Services';
import {useLoaderData} from 'react-router-dom';

const Home = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className='px-24'>
           <Banner></Banner>
           <Services services={services}></Services>
           <About></About>
           <FAQ></FAQ>
        </div>
    );
};

export default Home;