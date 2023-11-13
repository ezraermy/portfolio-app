// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import { useState } from 'react';
import content from '../Content';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Recommendations = () => {
  const { Recommendations } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section>
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Recommendations.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Recommendations.subtitle}
        </h4>
        <br />
        <Swiper
          direction="vertical"
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop
          spaceBetween={30}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[60rem] max-w-6xl"
        >
          {Recommendations.testimonials_content.map((content, i) => (
            <SwiperSlide key={content.name}>
              <div
                className={`duration-500 bg-bg_white border-none p-0 h-full rounded-2xl flex items-center gap-6 border-slate-200 md:flex-row flex-col ${activeIndex !== i && 'scale-75 blur-sm'}`}
                style={{
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  padding: '20px',
                }}
              >
                <img src={content.img} alt="..." className="h-24" />
                <div>
                  <p
                    className="sm:text-base text-sm"
                    style={{
                      background: 'linear-gradient(to right, #93A5CF, #E4EfE9)', // Add a gradient background
                      padding: '10px', // Add some padding for spacing
                      border: '2px solid #c90', // Add a colored border
                      borderRadius: '10px', // Add rounded corners
                      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
                    }}
                  >
                    {content.review}
                  </p>
                  <br />
                  <h6>{content.name}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Recommendations;
