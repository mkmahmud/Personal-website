import React from "react";
import "./ProjectDetails.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollToTopOnMount } from "../../Helpers/ScrollToTop";
import KeywordButton from "../../Components/Buttons/KeywordButton";
import { useLoaderData } from "react-router-dom";
import linkIcon from "../../Assets/icons/link.png";

// Import Swiper styles
import "swiper/css";

import { Autoplay, Pagination, Navigation } from "swiper";

const ProjectDetails = () => {
  const data = useLoaderData();

  const {
    overview,
    liveSite,
    challenges,
    features,
    Technologies,
    gellaryImages,
    developersRole,
  } = data?.data;
  return (
    <div>
      <ScrollToTopOnMount></ScrollToTopOnMount>
      <div className="pt-24 ">
        <div className="projectDetailsBG h-[400px] md:h-[700px] w-full">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => {}}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            onSwiper={(swiper) => {}}
          >
            {gellaryImages &&
              gellaryImages.map((img, i) => (
                <SwiperSlide key={i}>
                  {" "}
                  <img
                    src={img}
                    alt=""
                    className="my-2 h-[250px] md:h-[700px] w-full rounded-lg"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="my-24 md:flex items-start  p-2">
          <h2 className="w-full md:w-2/12 text-[30px] leading-[25px] font-bold">
            Overview:{" "}
          </h2>
          <p className="w-full md:w-10/12 px-2  text-[18px] my-4 md:my-0 ">
            {overview}
          </p>
        </div>
        <div className="my-24 md:flex items-start  p-2">
          <h2 className="w-full md:w-2/12 text-[30px] leading-[25px] font-bold">
            Preview:{" "}
          </h2>
          <p className="w-full md:w-10/12 px-2 md:flex justify-end  text-[18px] my-4 md:my-2 ">
            <a
              className="bg-second p-2 rounded flex items-center"
              href={liveSite}
              target="_blank"
            >
              <span>Website</span>{" "}
              <img className="h-6 w-6" src={linkIcon} alt="" />{" "}
            </a>
          </p>
        </div>
        <div className="my-24 md:flex items-start  p-2">
          <h2 className="w-full md:w-2/12 text-[30px] leading-[25px] font-bold">
            Role:{" "}
          </h2>
          <p className="w-full md:w-10/12 px-2  text-[18px] my-4 md:my-0 ">
            {developersRole}
          </p>
        </div>
        <div className="my-24 md:flex items-start  p-2">
          <h2 className="w-full md:w-2/12 text-[30px] leading-[25px] font-bold">
            Challenges:{" "}
          </h2>
          <ul className="w-full md:w-10/12 px-2  text-[18px] my-4 md:my-0 ">
            {challenges &&
              challenges.map((challange, i) => (
                <li key={i} className="my-2 flex items-start">
                  {" "}
                  <span className="pr-2"> ‍💻 </span> <span>{challange}</span>
                </li>
              ))}
          </ul>
        </div>
        <div className="my-24 md:flex items-start  p-2">
          <h2 className="w-full md:w-2/12 text-[30px] leading-[25px] font-bold">
            Features:{" "}
          </h2>
          <ul className="w-full md:w-10/12 px-2  text-[18px] my-4 md:my-0 ">
            {features &&
              features.map((feature, i) => (
                <li key={i} className="my-2 flex items-start">
                  {" "}
                  <span className="pr-2"> ‍💡 </span> <span>{feature}</span>
                </li>
              ))}
          </ul>
        </div>
        <div className="my-24 md:flex items-start  p-2">
          <h2 className="w-full md:w-2/12 text-[30px] leading-[25px] font-bold">
            Technologies:{" "}
          </h2>
          <div className="w-full md:w-10/12 px-2  text-[18px] my-4 md:my-0 ">
            {Technologies &&
              Technologies.map((tag, i) => (
                <KeywordButton key={i} content={tag}></KeywordButton>
              ))}

            <KeywordButton content="Node"></KeywordButton>
            <KeywordButton content="Redux"></KeywordButton>
            <KeywordButton content="JavaScript"></KeywordButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
