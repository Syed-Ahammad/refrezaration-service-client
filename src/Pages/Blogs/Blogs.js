import React from 'react';
import useTitle from '../../Hooks/UseTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
            <h1 className="text-xl">This is blogs section</h1>
        </div>
    );
};

export default Blogs;