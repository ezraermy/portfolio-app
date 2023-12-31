// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import content from '../Content';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary pt-0" id="projects">
      <div className="md:container px-5 pt-10 pb-10 flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle pb-5" data-aos="fade-down">
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
            {Projects.project_content.map((content) => (
              <SwiperSlide key={content.id} className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-[400px]">
                <img src={content.image} alt="..." />
                <div className="md:container bg-gray-200 shadow-lg p-6">
                  <h5 className="font-bold">{content.title}</h5>
                  <p className="font-italic font-Poppins text-xs m-1">{content.Summary}</p>
                  <div>
                    {content.TeckStack ? (
                      <div className="flex flex-wrap">
                        {content.TeckStack.map((tech) => (
                          <div key={tech} className="bg-blue-200 p-2 rounded-full m-1 flex justify-start">
                            <p className="text-xs flex justify-start">{tech}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div>No tech stack information available</div>
                    )}
                  </div>
                </div>
                <div className="flex flex-row justify-between mt-4">
                  <a href={content.liveDemo} target="_blank" rel="noopener noreferrer">
                    <button type="button" className="font-bold text-gray">
                      LIVE DEMOS
                    </button>
                  </a>
                  <a href={content.githubLink} target="_blank" rel="noopener noreferrer">
                    <button type="button" className="font-bold text-gray">
                      SOURCE CODE
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
