import React from "react";
import KeywordButton from "../../../../Components/Buttons/KeywordButton";
 import { Link } from "react-router-dom";

const SingelPortfolioCard = ({ data }) => {
  const {
    projectTitle,
    projectKeyWord,
    gellaryImages, 
    _id,
  } = data;

  return (
    <div className="max-w-[450px] border-4 border-second p-4 rounded-lg mx-auto mb-16 ">
      <Link to={`/details/${_id}`}>
        <h2 className="text-3xl font-bold py-2">{projectKeyWord}</h2>
        <p className="text-sec-text text-base">{projectTitle}</p>
        <div className="my-4">
          <KeywordButton content="React"></KeywordButton>
        </div>
        <img src={gellaryImages[0]} className="h-[200px] w-full" alt="" />
      </Link>
    </div>
  );
};

export default SingelPortfolioCard;
