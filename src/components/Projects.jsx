import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary pt-0" id="projects">
      <div className="md:container px-5 pt-10 pb-10 flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>

        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xl drop-shadow-primary self-start w-full"
          >
            {Projects.project_content.map((content, i) => (
             <SwiperSlide
             key={i}
             className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-[400px]" // Increase the height to 400px
           >
             <img src={content.image} alt="..."/>
             <div className="flex flex-row justify-between mt-4"> {/* Use flex and justify-between to make title and button end to end */}
               <h5 className="font-bold font-Poppins">{content.title}</h5>
               <a href={content.githubLink} target="_blank" rel="noopener noreferrer">
                 <button className="font-bold text-gray">
                   READ MORE
                 </button>
               </a>
             </div>
           </SwiperSlide>
                 
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;