// VideoTitle.js
import React from 'react';
import { CiPlay1, CiCircleInfo } from "react-icons/ci";
import { useSelector } from 'react-redux';

const VideoTitle = () => {
    const { title, overview } = useSelector(state => state.movie);

    // Function to limit overview to 40 words
    const truncateOverview = (text, wordLimit) => {
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    };

    return (
        <div className='w-full absolute text-white pt-[18%] p-12'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p className='w-1/3 mt-4'>{truncateOverview(overview, 40)}</p>
            <div className='flex mt-8'>
                <button className='flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
                    <CiPlay1 size="24px" />
                    <span className='ml-1'>Play</span>
                </button>
                <button className='flex mx-2 items-center px-6 py-2 bg-gray-500 bg-opacity-50 text-black rounded-md'>
                    <CiCircleInfo size="24px" />
                    <span className='ml-1'>Watch more</span>
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;