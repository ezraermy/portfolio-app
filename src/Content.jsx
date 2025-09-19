// import images
import { GrMail } from 'react-icons/gr';
import { MdArrowForward, MdCall, MdOutlinePermContactCalendar } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TbSmartHome } from 'react-icons/tb';
import { BiUser } from 'react-icons/bi';
import { RiServiceLine, RiProjectorLine } from 'react-icons/ri';
import person from './assets/images/Hero/ezra.png';

// Skills images
import ps from './assets/images/Skills/qgis.png';
import reactjs from './assets/images/Skills/mathlab.jpg';
import nodejs from './assets/images/Skills/geosoft.png';
import python from './assets/images/Skills/python.png';
import ruby from './assets/images/Skills/res2d.jpg';
import git from './assets/images/Skills/git.png';
import github from './assets/images/Skills/github.png';
import sql from './assets/images/Skills/sql.png';
import bootstrap from './assets/images/Skills/zond.jpg';

import serviceLogo1 from './assets/images/Services/logo1.png';
import serviceLogo2 from './assets/images/Services/logo2.png';
import serviceLogo3 from './assets/images/Services/logo3.png';

// Projects
import project1 from './assets/images/Projects/gravity.png';
import project3 from './assets/images/Projects/magnetic.png';
import project4 from './assets/images/Projects/seismic-survey.png';
import project6 from './assets/images/Projects/resistivity-survey.png';
import project7 from './assets/images/Projects/seismic-survey1.png';

import avatar1 from './assets/images/Testimonials/atalay.jpg';
import avatar2 from './assets/images/Testimonials/alireza.jpg';

// import icons from react-icons

const content = {
  nav: [
    {
      link: '#home',
      icon: TbSmartHome,
    },
    {
      link: '#skills',
      icon: BiUser,
    },
    {
      link: '#projects',
      icon: RiProjectorLine,
    },
    {
      link: '#services',
      icon: RiServiceLine,
    },
    {
      link: '#contact',
      icon: MdOutlinePermContactCalendar,
    },
  ],
  home: {
    title: 'Geophysicist',
    firstName: 'EZRA',
    LastName: 'YEHUWALASHET',
    btnText: 'Apply for PhD',
    image: person,
    home_content: [
      {
        count: '7+',
        text: 'Years in Geophysical Surveying, Inversion Modeling and Interetation',
      },
      {
        count: 'M.Sc. Geophysics',
        text: 'Uppsala University, Sweden',
      },
    ],
    researchStatement: 'Seeking PhD position in Volcanic Hazards Research Group to apply my expertise in seismology, geophysical inversion, and time-series analysis to advance volcano monitoring and hazard assessment methodologies.',
  },
  skills: {
    title: 'Technical Expertise',
    subtitle: 'RESEARCH COMPETENCIES',
    skills_content: [
      {
        name: 'Python',
        para: 'Scientific computing with NumPy, Pandas, SciPy for seismic data processing and geophysical modeling',
        logo: python,
        link: 'https://www.python.org/',
      },
      {
        name: 'MATLAB',
        para: 'Numerical analysis and visualization for geophysical inverse problems and time-series analysis',
        logo: reactjs,
        link: 'https://www.mathworks.com/products/matlab.html',
      },
      {
        name: 'Geosoft Oasis Montaj',
        para: 'Gravity and magnetic data processing for mineral exploration and structural geology',
        logo: nodejs,
        link: 'https://www.seequent.com/products-solutions/geosoft/',
      },
      {
        name: 'RES2DINV/RES3DINV',
        para: 'Electrical resistivity tomography for groundwater and hydrothermal system characterization',
        logo: ruby,
        link: 'http://www.geotomosoft.com/',
      },
      {
        name: 'Seisan & SeismicUnix',
        para: 'Seismic data analysis and earthquake location for tectonic and volcanic monitoring',
        logo: bootstrap,
        link: 'https://seisan.uit.no/',
      },
      {
        name: 'QGIS & GIS',
        para: 'Spatial analysis and mapping for geophysical survey planning and interpretation',
        logo: ps,
        link: 'https://www.qgis.org/',
      },
      {
        name: 'ModelVision',
        para: '3D geophysical modeling and inversion for complex subsurface structures',
        logo: sql,
        link: 'https://www.intrepid-geophysics.com/',
      },
      {
        name: 'UBC-GIF',
        para: 'Advanced geophysical inversion codes for potential field and electromagnetic data',
        logo: git,
        link: 'https://ubc-git.github.io/',
      },
      {
        name: 'Git & GitHub',
        para: 'Version control and reproducible research workflows for scientific computing',
        logo: github,
        link: 'https://github.com',
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: 'Research Expertise',
    subtitle: 'METHODOLOGIES I MASTER',
    service_content: [
      {
        title: 'Seismic Data Analysis & Monitoring',
        para: 'Real-time seismic network monitoring and earthquake location using Seisan and IRIS/USGS integration. Extensive experience with Ethiopian National Seismic Network (ENSS) data for tectonic hazard assessment and pattern recognition.',
        logo: serviceLogo1,
      },
      {
        title: 'Geophysical Inverse Problems',
        para: 'Advanced inversion modeling using constrained 3D approaches for gravity, magnetic, and electrical resistivity data. Expertise in handling non-uniqueness and developing robust geophysical interpretations.',
        logo: serviceLogo2,
      },
      {
        title: 'Field Survey Design & Execution',
        para: 'Comprehensive geophysical survey planning, data acquisition, and quality control for complex terrains. Proven track record leading field teams in tectonically active regions including the Main Ethiopian Rift.',
        logo: serviceLogo3,
      },
    ],
  },
  Projects: {
    title: 'Research Projects',
    subtitle: 'SCIENTIFIC CONTRIBUTIONS',
    project_content: [
      {
        title: '3D Gravity Modeling - Blötberget Iron-Oxide Deposit, Sweden',
        image: project1,
        liveDemo: 'https://library.seg.org/doi/abs/10.1190/segam2018-2992225.1',
        Summary: 'M.Sc. thesis research under Prof. Alireza Malehmir developing 3D inverse gravity modeling to delineate iron-oxide deposits extending to 800m depth. Identified 70 Mt high-density mineralization and new exploration targets in SE zone. Demonstrated constrained modeling techniques to reduce solution ambiguity.',
        TeckStack: ['Geosoft Oasis Montaj', 'MATLAB', 'Python', 'Voxel-based inversion'],
        publication: 'Yehuwalashet, E., Malehmir, A. (2018). SEG Annual Meeting.',
      },
      {
        title: 'Seismic Network Analysis - Ethiopian National Seismic Network (ENSS)',
        image: project3,
        githubLink: 'https://github.com/ezraermy/enss-seismic-analysis',
        liveDemo: 'https://www.researchgate.net/profile/Ezra-Yehuwalashet',
        Summary: "Analyzed real-time seismic data from Ethiopia's national network to investigate tectonic activity patterns and earthquake source mechanisms. Contributed to IRIS/USGS station integration and developed automated event detection workflows. Key findings informed seismic hazard assessment for infrastructure development.",
        TeckStack: ['Seisan', 'Python', 'MATLAB', 'IRIS Wilber 3'],
        supervisor: 'Dr. Atalay Ayele, Addis Ababa University',
      },
      {
        title: 'Electrical Resistivity & EM - Soil-Water Interactions, Belgium',
        image: project6,
        githubLink: 'https://github.com/ezraermy/ert-soil-water-interactions',
        liveDemo: 'https://www.researchgate.net/profile/Ezra-Yehuwalashet',
        Summary: 'Research at University of Liège investigating soil-water dynamics using time-lapse ERT and electromagnetic induction. Developed methodologies for monitoring hydrological processes transferable to volcanic hydrothermal systems. Demonstrated sensitivity of resistivity methods to fluid content variations.',
        TeckStack: ['RES2DINV', 'EM induction', 'Python', 'Time-lapse analysis'],
        location: 'University of Liège, Belgium (2017-2018)',
      },
      {
        title: 'Regional Gravity Survey - Main Ethiopian Rift System',
        image: project7,
        githubLink: 'https://github.com/ezraermy/mer-gravity-survey',
        liveDemo: 'https://www.researchgate.net/profile/Ezra-Yehuwalashet',
        Summary: 'Led comprehensive gravity survey across the tectonically active Main Ethiopian Rift as team leader at Geological Survey of Ethiopia. Acquired high-resolution Bouguer anomaly data for 1:250,000 scale geological mapping. Identified crustal thickness variations and volcanic structures influencing regional tectonics.',
        TeckStack: ['Scintrex CG-5 gravimeter', 'Geosoft', 'MATLAB', '1:250,000 mapping'],
        role: 'Team Leader, Geological Survey of Ethiopia (2010-2013)',
      },
      {
        title: 'Seismic Hazard Assessment - Infrastructure Development Projects',
        image: project4,
        Summary: 'Conducted seismic refraction and ambient noise surveys for infrastructure risk assessment near tectonically active zones. Integrated geophysical data with geotechnical investigations to develop site-specific hazard models. Provided recommendations for foundation design in earthquake-prone regions.',
        TeckStack: ['24-channel seismograph', 'Python', 'QGIS', 'Ground motion analysis'],
        employer: 'Ethiopian Engineering Corporation (2020-Present)',
      },
    ],
  },
  Recommendations: {
    title: 'Academic References',
    subtitle: 'PROFESSIONAL ENDORSEMENTS',
    testimonials_content: [
      {
        review:
          '"I supervised Ezra\'s M.Sc. thesis and can attest to his exceptional analytical skills and dedication to geophysical research. His work on 3D gravity modeling demonstrated sophisticated understanding of inverse problems and produced publication-quality results. Ezra would be an outstanding PhD candidate with strong potential for independent research."',
        img: avatar2,
        name: 'Prof. Alireza Malehmir',
        title: 'Department of Earth Sciences, Uppsala University',
        email: 'Alireza.Malehmir@geo.uu.se',
      },
      {
        review:
          '"Ezra demonstrated excellent skills in seismic data analysis during his time at IGSSA. His ability to work with real-time seismic networks and contribute to international collaborations highlights his technical proficiency and research potential. I strongly recommend him for advanced geophysical studies."',
        img: avatar1,
        name: 'Prof. Atalay Ayele',
        title: 'Institute of Geophysics, Space Science and Astronomy',
        email: 'atalay.ayele@aau.edu.et',
      },
    ],
  },
  Hireme: {
    title: 'PhD Research Statement',
    subtitle: 'VOLCANIC HAZARDS RESEARCH',
    para: 'My research interests center on developing advanced geophysical monitoring techniques for volcanic hazard assessment. I am particularly interested in integrating multi-parameter datasets (seismic, geodetic, and electromagnetic) to improve eruption forecasting and understand magma-hydrothermal interactions. With my background in geophysical inversion and real-time seismic monitoring, I aim to contribute novel methodologies to the Volcanic Hazards Research Group at Victoria University of Wellington.',
    btnText: 'Contact for PhD Discussion',
  },
  Contact: {
    title: 'Get In Touch',
    subtitle: 'FOR PhD SUPERVISION DISCUSSION',
    social_media: [
      {
        text: 'ezraermy@gmail.com',
        icon: GrMail,
        link: 'mailto:ezraermy@gmail.com',
      },
      {
        text: '+251 925 394 152',
        icon: MdCall,
        link: 'tel:+251925394152',
      },
      {
        text: '@ezraermy',
        icon: FaXTwitter,
        link: 'https://twitter.com/ezraermy',
      },
      {
        text: 'Ezra Yehuwalashet',
        icon: BsLinkedin,
        link: 'https://www.linkedin.com/in/ezra-yehuwalashet/',
      },
      {
        text: 'ezraermy',
        icon: FaGithub,
        link: 'https://github.com/ezraermy',
      },
    ],
    researchLinks: [
      {
        text: 'ResearchGate Profile',
        link: 'https://www.researchgate.net/profile/Ezra-Yehuwalashet',
      },
      {
        text: 'SEG Publication',
        link: 'https://library.seg.org/doi/abs/10.1190/segam2018-2992225.1',
      },
    ],
  },
  Footer: {
    text: '© Ezra Yehuwalashet 2025 | Aspiring Volcanic Hazards Researcher',
  },
};

export default content;
