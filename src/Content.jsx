// import images
import { GrMail } from 'react-icons/gr';
import { MdArrowForward, MdCall, MdOutlinePermContactCalendar } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TbSmartHome } from 'react-icons/tb';
import { BiUser } from 'react-icons/bi';
import { RiServiceLine, RiProjectorLine } from 'react-icons/ri';
import person from './assets/images/Hero/person1.png';

import ps from './assets/images/Skills/ps.png';
import reactjs from './assets/images/Skills/react.png';
import nodejs from './assets/images/Skills/node.png';
import python from './assets/images/Skills/python.png';
import ruby from './assets/images/Skills/ruby.png';
import git from './assets/images/Skills/git.png';
import github from './assets/images/Skills/github.png';
import sql from './assets/images/Skills/sql.png';
import bootstrap from './assets/images/Skills/bootstrap.png';

import serviceLogo1 from './assets/images/Services/logo1.png';
import serviceLogo2 from './assets/images/Services/logo2.png';
import serviceLogo3 from './assets/images/Services/logo3.png';

// Projects
import project1 from './assets/images/Projects/restaurant.png';
import project3 from './assets/images/Projects/calculator.png';
import project4 from './assets/images/Projects/blog.png';
import project6 from './assets/images/Projects/budget.png';
import project7 from './assets/images/Projects/rentacar.png';
import project8 from './assets/images/Projects/shop-ezra.png';

import avatar1 from './assets/images/Testimonials/Ikbal.png';
import avatar2 from './assets/images/Testimonials/soza.png';
import avatar3 from './assets/images/Testimonials/nela.jpeg';
import avatar4 from './assets/images/Testimonials/yoseph.jpeg';

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
    title: 'Web Developer',
    firstName: 'EZRA',
    LastName: 'YEHUWALASHET',
    btnText: 'Open To Work',
    image: person,
    home_content: [
      {
        count: '2+',
        text: 'Years of Experinse in Web development',
      },
      {
        count: '40+',
        text: 'Projects Worked in my career',
      },
    ],
  },
  skills: {
    title: 'Skills',
    subtitle: 'MY TOP SKILLS',
    skills_content: [
      {
        name: 'Ruby',
        para: 'Ruby on Rails',
        logo: ruby,
        link: 'https://rubyonrails.org/',
      },
      {
        name: 'Python',
        para: 'Django Framework',
        logo: python,
        link: 'https://www.djangoproject.com/',
      },
      {
        name: 'React js',
        para: 'React Redux',
        logo: reactjs,
        link: 'https://reactjs.org/',
      },
      {
        name: 'Node js',
        para: 'Web servers, APIs, real-time applications',
        logo: nodejs,
        link: 'https://nodejs.org/en/',
      },
      {
        name: 'Bootstrap',
        para: 'React Bootstrap',
        logo: bootstrap,
        link: 'https://react-bootstrap.github.io/',
      },
      {
        name: 'SQL',
        para: 'MySQL, PostgreSQL',
        logo: sql,
        link: 'https://www.mysql.com/',
      },
      {
        name: 'git',
        para: 'Version Control System',
        logo: git,
        link: 'https://git-scm.com/',
      },
      {
        name: 'GitHub',
        para: 'Cloud-based service for software development',
        logo: github,
        link: 'https://github.com',
      },
      {
        name: 'Adobe Photoshop',
        para: 'Graphic Design',
        logo: ps,
        link: 'https://www.adobe.com/products/photoshop.html',
      },

    ],
    icon: MdArrowForward,
  },
  services: {
    title: 'Services',
    subtitle: 'EXPERTISE I PROVIDE',
    service_content: [
      {
        title: 'Web Development',
        para: "Creating interactive and scalable websites with a focus on user experience. From front-end design to robust backends, I deliver customized solutions tailored to clients' needs.",
        logo: serviceLogo1,
      },
      {
        title: 'ui / ux DESIGNING',
        para: 'Crafting visually appealing user interfaces. With a focus on user-centered experiences by enhancing engagement and usability, delivering meaningful results for businesses and their customers.',
        logo: serviceLogo2,
      },
      {
        title: 'PhotoShop Editing',
        para: " Creativity and attention to detail to every project, delivering high-quality results that meet clients' specifications and exceed expectations.",
        logo: serviceLogo3,
      },
    ],
  },
  Projects: {
    title: 'Projects',
    subtitle: 'MY TOUR DE FORCE',
    project_content: [
      {
        title: 'Shop | Ezra',
        image: project8,
        githubLink: 'https://github.com/ezraermy/04-tesla-shop',
        liveDemo: 'https://github.com/ezraermy/04-tesla-shop',
        Summary: 'This app is designed to find and buy Tesla gear, accessories, and more. Stay updated with the latest Tesla news.',
        TeckStack: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
      },
      {
        title: 'RENT A CAR',
        image: project7,
        githubLink: 'https://github.com/ezraermy/full-stack-capstone-front-end',
        liveDemo: 'https://rent-a-car-front-end.onrender.com/',
        Summary: 'A full-stack web application that enables users to view a list of cars, access detailed information about each car, rent for cars, add new car items, delete existing car items, and list all rentals associated with a specific user',
        TeckStack: ['React', 'Redux', 'Ruby on Rails', 'PostgreSQL', 'Bootstrap'],
      },
      {
        title: 'BUDGET-APP',
        image: project6,
        githubLink: 'http://github.com/ezraermy/Budget-App',
        liveDemo: 'https://rails-budget-app-sxs1.onrender.com/',
        Summary: 'A web application for efficient budget management. Easily track your expenses and spending habits by categorizing transactions.',
        TeckStack: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap'],
      },
      {
        title: 'FE-RESTAURANT',
        image: project1,
        githubLink: 'https://github.com/francksefu/franck-ezra-capstone',
        liveDemo: 'https://github.com/francksefu/franck-ezra-capstone',
        Summary: 'A restaurant application based on external API that shows us the dishes, allows us to like dishes and comment on them after dining.',
        TeckStack: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
      },
      {
        title: 'CALCULATOR',
        image: project3,
        githubLink: 'https://github.com/ezraermy/math-magicians',
        liveDemo: 'https://ezra-math-magicians.onrender.com/',
        Summary: 'This simple calculator is designed to perform basic arithmetic calculations quickly and easily.',
        TeckStack: ['ReactJS', 'Bootstrap'],
      },
      {
        title: 'BLOG',
        image: project4,
        githubLink: 'https://github.com/ezraermy/rails-blog',
        liveDemo: 'https://github.com/ezraermy/rails-blog',
        Summary: 'This project creates an application for bloggers, empowering individuals to share their thoughts, insights, and stories.',
        TeckStack: ['Ruby on Rails', 'Bootstrap'],
      },
    ],
  },
  Recommendations: {
    title: 'Recommendations',
    subtitle: 'MY COWORKERS SAY',
    testimonials_content: [
      {
        review:
          '“Ezra Yehuwalashet is a highly skilled and dedicated web developer. I had the pleasure of working with him on multiple projects at Microverse. Ezra is not only an excellent coding partner but also an enthusiastic and intelligent individual. His ability to find creative solutions to challenges and deliver projects on time is remarkable. He is a reliable and trustworthy team player, and I wholeheartedly recommend him for any web development role.”',
        img: avatar1,
        name: 'IKBAL ELHAM ',
      },
      {
        review:
          '“I had the pleasure of working with Ezra and would highly recommend him for any project or role. Ezra is a skilled full-stack developer with a strong work ethic and attention to detail. I remember he teaching some advices that I am still using today. Additionally, Ezra is a reliable and collaborative team member, always willing to lend a hand and support his colleagues. Overall, I believe Ezra would be a valuable asset to any organization and I highly recommend him.”',
        img: avatar2,
        name: 'EDGARD SOZA',
      },
      {
        review:
          '“I wholeheartedly recommend Ezra as an outstanding coding partner in my career. Ezra excels in programming, displaying a remarkable knack for solving complex problems and a relentless commitment to learning. His dedication has been instrumental in overcoming academic challenges and approaching projects with innovative thinking. His ability to motivate and inspire others, fostering diverse problem-solving approaches, is truly unique. He blends strong technical expertise with exceptional soft skills, making him a role model in the industry and an invaluable asset to any development team."”',
        img: avatar3,
        name: 'MARIANELA MUNOZ GUTIERREZ',
      },
      {
        review:
          '“I had the pleasure of working with Ezra Yehuwalashet at Microverse, and I was impressed by their expertise as a web developer. Ezra is highly knowledgeable in web development technologies, including HTML, CSS, JavaScript, React, Redux, and Ruby on Rails. They consistently delivered high-quality web applications that met requirements. Ezra is not only a skilled coder but also a great team player and effective communicator. They actively collaborated with other team members, shared insights, and adapted to new technologies. I highly recommend Ezra for any web development role; they have my full endorsement.”',
        img: avatar4,
        name: 'YOSEPH ADDISU',
      },
    ],
  },
  Hireme: {
    title: 'Hire Me',
    subtitle: 'FOR YOUR PROJECTS',
    para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean',
    btnText: 'Open To Work',
  },
  Contact: {
    title: 'Contect Me',
    subtitle: 'GET IN TOUCH',
    social_media: [
      {
        text: 'ezraermy@gmail.com',
        icon: GrMail,
        link: 'mailto:ezraermy@gmail.com',
      },
      {
        text: '+251925394152',
        icon: MdCall,
        link: 'https://wa.me/1234567890',
      },
      {
        text: 'ezraermy',
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
  },
  Footer: {
    text: 'All © Copy Right Reserved 2022',
  },
};

export default content;
