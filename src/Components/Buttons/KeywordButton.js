import React from 'react';

const KeywordButton = ({ content }) => {
    return (
        <button className='text-sm rounded py-2 text-second bg-sec-bg px-4 m-2'>
            {content}
        </button>
    );
};

export default KeywordButton;