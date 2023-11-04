import React, { useEffect, useState } from "react";
import { FaLink, FaCodeBranch } from "react-icons/fa";
import { BsDisplay } from "react-icons/bs";
import SingelPortfolioCard from "./SingelPortfolioCard/SingelPortfolioCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Portfolio = () => {
  // Projects
  const [projects, setProjects] = useState([]);

  // Loading
  const [loading, setLoading] = useState(true);

  // Details Projects

  useEffect(() => {
    fetch("https://portfolio-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/p/project/all-project/mahmudulmk4@gmail.com")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.data);
        setLoading(false);
       });
  }, []);

  return (
    <div className="my-24 pt-32" id="Projects">
      <div className="md:flex justify-between items-center">
        <div>
          <div className="flex items-center text-xl w-[150px] rounded p-2 font-bold text-second bg-sec-bg">
            <FaLink></FaLink>
            <h2 className="px-2"> Portfolio</h2>
          </div>
          <div>
            <h1 className="text-5xl font-bold py-4">Highlights Projects</h1>
          </div>
        </div>
        <div className="hidden md:block md:flex text-second">
          <div className="flex items-center p-4 border-4 border-sec-bg  rounded-xl mx-2">
            <BsDisplay></BsDisplay>
            <h4 className="px-2"> Front-End</h4>
          </div>
          <div className="flex items-center p-4 border-4 border-sec-bg  rounded-xl mx-2">
            <FaCodeBranch></FaCodeBranch>
            <h4 className="px-2"> Backend</h4>
          </div>
          <div className="flex items-center p-4 border-4 border-sec-bg  rounded-xl mx-2">
            <FaCodeBranch></FaCodeBranch>
            <h4 className="px-2"> Full Stack</h4>
          </div>
        </div>
      </div>
      <div className="my-16 mx-auto md:grid  grid-cols-1 hidden md:block md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects &&
          projects.map((project) => (
            <SingelPortfolioCard
              key={project._id}
              data={project}
            ></SingelPortfolioCard>
          ))}
      </div>
      <div className="md:hidden my-10">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
          pagination={{ clickable: true }}
        >
          {projects &&
            projects.map((project) => (
              <SwiperSlide key={project._id}>
                 <SingelPortfolioCard
                  key={project._id}
                  data={project}
                ></SingelPortfolioCard>{" "}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
