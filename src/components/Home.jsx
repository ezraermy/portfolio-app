// import content
import content from '../Content';

const Home = () => {
  const { home } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-down"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-indigo-300 bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-50%] text-dark_primary md:right-auto md:left-[30%]">
            {home.firstName}
            {' '}
            <span className="text-[#EAF2FA]">{home.LastName}</span>
          </h1>
        </div>
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{home.title}</h2>
          <br />
          <div className="flex justify-end">
            <button type="button" className="btn">{home.btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {home.home_content.map((content) => (
              <div
                key={content.count}
                data-aos="fade-down"
                data-aos-delay={content.count * 300}
                className={`flex items-center w-80 gap-5
                  ${content.count === 1 && ' flex-row-reverse text-right'}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}

        <div className="md:h-[37rem] h-96">
          <img
            src={home.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;
