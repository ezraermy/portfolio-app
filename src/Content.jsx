// import images
import person from "./assets/images/Hero/person.png";

import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import ruby from "./assets/images/Skills/ruby.png";
import git from "./assets/images/Skills/git.png";
import github from "./assets/images/Skills/github.png";
import sql from "./assets/images/Skills/sql.png";
import bootstrap from "./assets/images/Skills/bootstrap.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/restaurant.png";
import project2 from "./assets/images/Projects/book.png";
import project3 from "./assets/images/Projects/calculator.png";
import person_project from "./assets/images/Projects/person3.JPG";
import person_project2 from "./assets/images/Projects/person4.JPG";

import avatar1 from "./assets/images/Testimonials/Ikbal.png";
import avatar2 from "./assets/images/Testimonials/soza.png";

import Hireme_person from "./assets/images/Hireme/person3.JPG";
import Hireme_person2 from "./assets/images/Hireme/person4.JPG";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  home: {
    title: "Web Developer",
    firstName: "EZRA",
    LastName: "YEHUWALASHET",
    btnText: "Open To Work",
    image: person,
    home_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Ruby",
        para: "Ruby on Rails",
        logo: ruby,
        link: "https://rubyonrails.org/",
      },
      {
        name: "Python",
        para: "Django Framework",
        logo: python,
        link: "https://www.djangoproject.com/",
      },
      {
        name: "React js",
        para: "React Redux",
        logo: reactjs,
        link: "https://reactjs.org/",
      },  
      {
        name: "Node js",
        para: "Web servers, APIs, real-time applications",
        logo: nodejs,
        link: "https://nodejs.org/en/",
      },
      {
        name: "Bootstrap",
        para: "React Bootstrap",
        logo: bootstrap,
        link: "https://react-bootstrap.github.io/",
      },
      {
        name: "SQL",
        para: "MySQL, PostgreSQL",
        logo: sql,
        link: "https://www.mysql.com/",
      },
      {
        name: "git",
        para: "Version Control System",
        logo: git,
        link: "https://git-scm.com/",
      },
      {
        name: "GitHub",
        para: "Cloud-based service for software development",
        logo: github,
        link: "https://github.com",
      },
      {
        name: "Adobe Photoshop",
        para: "Graphic Design",
        logo: ps,
        link: "https://www.adobe.com/products/photoshop.html",
      }
     
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "EXPERTISE I PROVIDE",
    service_content: [
      {
        title: "Web Development",
        para: "Creating interactive and scalable websites with a focus on user experience. From front-end design to robust backends, I deliver customized solutions tailored to clients' needs.",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "Crafting visually appealing user interfaces. With a focus on user-centered experiences by enhancing engagement and usability, delivering meaningful results for businesses and their customers.",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: " Creativity and attention to detail to every project, delivering high-quality results that meet clients' specifications and exceed expectations.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY TOUR DE FORCE",
    image1: person_project,
    image2: person_project2,
    project_content: [
      {
        title: "FE-RESTAURANT",
        image: project1,
        githubLink: "https://github.com/francksefu/franck-ezra-capstone", // Replace with the actual GitHub URL for project1
      },
      {
        title: "BOOK STORE",
        image: project2,
        githubLink: "https://github.com/ezraermy/bookstore", // Replace with the actual GitHub URL for project2
      },
      {
        title: "CALCULATOR",
        image: project3,
        githubLink: "https://github.com/ezraermy/math-magicians", // Replace with the actual GitHub URL for project3
      },
    ],
  },
  Recommendations: {
    title: "Recommendations",
    subtitle: "MY COWORKERS SAY",
    testimonials_content: [
      {
        review:
          "“It is my pleasure to strongly recommend Ezra Yehuwalashet as a talented and passionate web developer. I had the pleasure of working with Ezra on two different web development projects during my time at Microverse. Ezra proved to be an excellent coding partner, with a remarkable work ethic and top-notch coding skills. Ezra is an intelligent and friendly individual, with a strong passion for web development. His enthusiasm for coding was infectious, and it was a joy to work alongside him. Whenever we faced tough challenges during our projects, Ezra demonstrated his ability to find creative solutions that produced results. Throughout my collaboration with Ezra, I was consistently impressed by his attention to detail, his thoroughness, and his ability to deliver projects on time. He was a reliable and trustworthy team player, and I can confidently vouch that his passion and dedication toward his work would make him a valuable addition to any team. It is with the utmost confidence that I recommend Ezra for any web development role. I'm sure that his exceptional skills, as well as his passion and positive attitude, would make him an asset to any organization.”",
        img: avatar1,
        name: "IKBAL ELHAM ",
      },
      {
        review:
          "“I had the pleasure of working with Ezra and would highly recommend him for any project or role. Ezra is a skilled full-stack developer with a strong work ethic and attention to detail. I remember he teaching some advices that I am still using today. Additionally, Ezra is a reliable and collaborative team member, always willing to lend a hand and support his colleagues. Overall, I believe Ezra would be a valuable asset to any organization and I highly recommend him.”",
        img: avatar2,
        name: "EDGARD SOZA",
      }
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Open To Work",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};