import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import Services from '../Services/Services';
import {useLoaderData} from 'react-router-dom';
import useTitle from '../../../Hooks/UseTitle';

const Home = () => {
    const services = useLoaderData();
    useTitle("Home")
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