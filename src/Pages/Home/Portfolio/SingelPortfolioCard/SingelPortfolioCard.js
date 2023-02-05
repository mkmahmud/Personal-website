import React from 'react';
import KeywordButton from '../../../../Components/Buttons/KeywordButton';
import port from '../../../../Assets/port.png'

const SingelPortfolioCard = () => {
    return (
        <div className='w-[300px] border-4 border-second p-4 rounded-lg mx-auto mb-16'>
            <h2 className='text-3xl font-bold py-2'>Move it</h2>
            <p className='text-sec-text text-base'>Lorem ipsum dolor sit amet consectetu nissimos quibusdam sed expedit.</p>
            <div className='my-4'>
                <KeywordButton content='React.JS'></KeywordButton>
                <KeywordButton content='Node.JS'></KeywordButton>
            </div>
            <img src={port} alt="" />
        </div>
    );
};

export default SingelPortfolioCard;