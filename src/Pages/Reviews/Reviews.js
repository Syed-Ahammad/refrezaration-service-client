import React from 'react';
import useTitle from '../../Hooks/UseTitle';

const Reviews = () => {
    useTitle('Reviews');
    return (
        <div>
            <h1 className="text-xl">This is reviews page</h1>
        </div>
    );
};

export default Reviews;