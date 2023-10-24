// import content
import { createElement, useState } from 'react';
import Modal from 'react-modal';
import content from '../Content';
// import modal package

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '23rem',
    width: '90%',
  },
  overlay: {
    padding: '2rem',
  },
};
Modal.setAppElement('#root');

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen] = useState(false);
  const [selectSkill] = useState(null);

  // New function to open link in a new tab
  function openSkillLink(link) {
    window.open(link, '_blank');
  }

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <img
            className="h-10"
            src={selectSkill?.logo}
            alt={selectSkill?.name}
          />
          <h6>{selectSkill?.name}</h6>
          <a
            href={selectSkill?.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Learn more...</p>
          </a>
        </div>
      </Modal>

      {/* content */}
      <div className="md:container px-5  py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill) => (
            <div
              key={skill.id}
              data-aos="fade-up"
              data-aos-delay={skill.id * 400}
              className="bg-white sm:cursor-pointer
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <button
                  type="button"
                  onClick={() => openSkillLink(skill.link)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      openSkillLink(skill.link);
                    }
                  }}
                  className="text-xl absolute top-3 right-3 cursor-pointer"
                >
                  {createElement(skills.icon)}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
