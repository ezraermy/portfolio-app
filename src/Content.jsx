// import images
import { GrMail } from 'react-icons/gr';
import { MdArrowForward, MdCall, MdOutlinePermContactCalendar } from 'react-icons/md';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
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
import project5 from './assets/images/Projects/recipe.png';
import project6 from './assets/images/Projects/budget.png';
import project7 from './assets/images/Projects/rentacar.png';

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
        title: 'Rent a Car',
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
        title: 'RECIPE-APP',
        image: project5,
        githubLink: 'https://github.com/ezraermy/recipe-app',
        liveDemo: 'https://github.com/ezraermy/recipe-app',
        Summary: 'Manages user recipes and ingredients. Users can save ingredients, create recipes, and generate shopping lists. Recipes can also be shared publicly.',
        TeckStack: ['Ruby on Rails', 'PosgreSQL', 'Bootstrap'],
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
          "“It is my pleasure to strongly recommend Ezra Yehuwalashet as a talented and passionate web developer. I had the pleasure of working with Ezra on two different web development projects during my time at Microverse. Ezra proved to be an excellent coding partner, with a remarkable work ethic and top-notch coding skills. Ezra is an intelligent and friendly individual, with a strong passion for web development. His enthusiasm for coding was infectious, and it was a joy to work alongside him. Whenever we faced tough challenges during our projects, Ezra demonstrated his ability to find creative solutions that produced results. Throughout my collaboration with Ezra, I was consistently impressed by his attention to detail, his thoroughness, and his ability to deliver projects on time. He was a reliable and trustworthy team player, and I can confidently vouch that his passion and dedication toward his work would make him a valuable addition to any team. It is with the utmost confidence that I recommend Ezra for any web development role. I'm sure that his exceptional skills, as well as his passion and positive attitude, would make him an asset to any organization.”",
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
          '“It is an honor to recommend Ezra as one of the best coding partners I have had in my career as a programmer. Ezra is not only an exceptional programmer with a natural ability to solve complex problems but also stands out for his tireless dedication to studying and unwavering determination. His relentless pursuit of excellence helped us overcome academic challenges and approach projects with creativity and innovative perspectives. Ezra possesses a unique ability to motivate and inspire those around him, encouraging them to think differently and tackle problems from various angles. He combines strong technical skills with exceptional soft skills, making him a role model in the industry. His success in programming and his effective collaboration with others make him an invaluable asset to any development team.It is an honor to recommend Ezra as one of the best coding partners I have had in my career as a programmer. Ezra is not only an exceptional programmer with a natural ability to solve complex problems but also stands out for his tireless dedication to studying and unwavering determination. His relentless pursuit of excellence helped us overcome academic challenges and approach projects with creativity and innovative perspectives. Ezra possesses a unique ability to motivate and inspire those around him, encouraging them to think differently and tackle problems from various angles. He combines strong technical skills with exceptional soft skills, making him a role model in the industry. His success in programming and his effective collaboration with others make him an invaluable asset to any development team.”',
        img: avatar3,
        name: 'Marianela Muñoz Gutierrez',
      },
      {
        review:
          '“I had the opportunity to work with Ezera Yehuwalashet for a while at Microverse, and I was impressed by their expertise and creativity as a web developer. Ezera has a solid knowledge of the web development stack, including HTML, CSS, JavaScript, React, Redux, and Ruby on Rails. They were able to deliver high-quality and user-friendly web applications that met the requirements and expectations. Ezra is not only a skilled coder, but also a great team player and communicator. They collaborated effectively with other developers, designers, and project managers, and always contributed valuable insights and feedback. They were also proactive in learning new technologies and best practices, and always willing to share their knowledge with others. Ezra is an asset to any web development team, and I highly recommend them for any position that requires web development skills. They have my full endorsement and support.”',
        img: avatar4,
        name: 'Yoseph Addisu',
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
        icon: BsTwitter,
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
