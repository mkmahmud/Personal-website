import React from 'react';
import KeywordButton from '../../../../Components/Buttons/KeywordButton';
import port from '../../../../Assets/port.png'
import { Link } from 'react-router-dom';

const SingelPortfolioCard = ({data}) => {

    const {shortTitle, title, mainKeyword, thambnail, _id} = data;

    return (
        <div className=' border-4 border-second p-4 rounded-lg mx-auto mb-16'>
            <Link to={`/details/${_id}`}>
                <h2 className='text-3xl font-bold py-2'>{shortTitle}</h2>
                <p className='text-sec-text text-base'>{title}</p>
                <div className='my-4'>
                    <KeywordButton content={mainKeyword}></KeywordButton>
                </div>
                <img src={thambnail} className='h-[200px] w-full' alt="" />
            </Link>
        </div>
    );
};

export default SingelPortfolioCard;