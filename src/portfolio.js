/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Günay",
  logo_name: "gunayakbas()",
  nickname: "gunayakbas / uckbosh",
  full_name: "Günay Akbaş",
  subTitle:
    "Control Engineering student, Robotics enthusiast.",
  resumeLink:
    "https://drive.google.com/file/d/1v13ZDHknVeImdi3BOIry4p1QUWXmb2_1/view?usp=sharing",
  mail: "gunayakbas@outlook.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/akbasgunay",
  linkedin: "https://www.linkedin.com/in/gunayakbas",
  gmail: "gunaythewhite@gmail.com",
  gitlab: " ",
  facebook: " ",
};

const skills = {
  data: [
    {
      title: "Embedded Programming",
      fileName: "FullStackImg",
      skills: [
        "⚡ Hands-on experience with STM32 microcontroller.",
        "⚡ Developing physical applications using C with Keil.",
        "⚡ Implementing real-life control systems on a microcontroller.",
      ],
      softwareSkills: [
        {
          skillName: "Microchip",
          fontAwesomeClassname: "fa-microchip",
          style: {
            color: "#339933",
          },
        },
        
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "STM32",
          fontAwesomeClassname: "simple-icons:stmicroelectronics",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#DE33A6",
          },
        },
      ],
    },
    {
      title: "System Modelling",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Modelling and Simulation of biological control systems.",
        "⚡ Designing and testing electromechanical systems.",
        "⚡ Experience in a robotic leg project.",
      ],
      softwareSkills: [
        {
          skillName: "Matlab",
          fontAwesomeClassname: "vscode-icons:file-type-matlab",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Robotics",
          fontAwesomeClassname: "icon-park:robot-two",
          style: {
            color: "#D00000",
          },
        },
        {
          skillName: "Electronics",
          fontAwesomeClassname: "iconoir:electronics-transister",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Labview",
          fontAwesomeClassname: "simple-icons:labview",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Istanbul Technical University",
      subtitle: "B.Eng. in Control and Automation Engineering",
      logo_path: "itü.png",
      alt_name: "SETI",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied core subjects like Microcontroller Systems, Feedback Control Systems and Programming Techniques in Control.",
        "⚡ I have also completed various online courses for ML and AI, Embedded systems, Matlab and Simulink.",
        "⚡ I have implemented several projects based on what I've learnt within my Engineering major. ",
      ],
      website_link: "https://www.itu.edu.tr",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Explaratory Data Analysis",
      subtitle: "IBM",
      logo_path: "ibm.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/TZM6UATS589L",
      alt_name: "IBM",
      color_code: "#47A048",
    },
    {
      title: "Supervised Machine Learning: Classification",
      subtitle: "IBM",
      logo_path: "ibm.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/JCDJMF4B8X37",
      alt_name: "IBM",
      color_code: "#F6B808",
    },
    {
      title: "Supervised Machine Learning: Regression",
      subtitle: "IBM",
      logo_path: "ibm.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/ZL9C76S2NKED",
      alt_name: "deeplearning.ai",
      color_code: "#2AAFED",
    },
    {
      title: "Unsupervised Machine Learning",
      subtitle: "IBM",
      logo_path: "ibm.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/XRLLJ3FK63UU",
      alt_name: "deeplearning.ai",
      color_code: "#E2405F",
    },
    {
      title: "Control Design with Simulink",
      subtitle: "Mathworks",
      logo_path: "matlab.png",
      certificate_link:
        "https://drive.google.com/file/d/1EEh9phT0XTqR3fxidYQ_OqqpuzFMhK_C/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Matlab Onramp",
      subtitle: "Mathworks",
      logo_path: "matlab.png",
      certificate_link:
        "https://drive.google.com/file/d/14ykbW2BUhAEW97hUN1aMXdOj-uflGh5p/view?usp=sharing",
      alt_name: "Google",
      color_code: "#7A7A7A",
    },
    {
      title: "Simulink Onramp",
      subtitle: "Mathworks",
      logo_path: "matlab.png",
      certificate_link:
        "https://drive.google.com/file/d/1xeNPlRF9k-4u3IUO1Uen8F_XFZIV6owp/view?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed two internships. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Engineering Intern",
          company: "DeepSport",
          company_url: "https://deepsportapp.com",
          logo_path: "deepsport.png",
          duration: "February 2021 - March 2021",
          location: "Tekirdag, Turkey",
          description:
            "I worked on the implementation of a human pose estimation model on Flutter app using Tensorflow lite",
          color: "#ee3c26",
        },
        {
          title: "Engineering Intern",
          company: "Avokadio",
          company_url: "https://www.avokad.io/tr/",
          logo_path: "avokadio.png",
          duration: "June 2021 - July 2021",
          location: "Istanbul, Turkey",
          description:
            "Internship task was to build a chatbot that can interact with the backend using Dialogflow and Python. ",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of vast variety of latest technology tools. I have a profound experience in creating control systems on a microcontroller and designing controllers on Simulink.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "gunayy.jpg",
    description:
      "You can contact me at the places mentioned below. I will get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Medium.",
    link: "https://medium.com/@gunaythewhite",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "Temperature Control System",
      name: "Temperature Control System",
      url: "https://drive.google.com/drive/folders/1meoQ1xscttxFtnlGfdDVt80-8tS50WHN?usp=sharing",
      description: "Implementation of a Temperature Control system on a STM32 type microcontroller",
      languages: [
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#02569B",
          },
        },
        {
          name: "Matlab",
          fontAwesomeClassname: "vscode-icons:file-type-matlab",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      id: "1",
      name: "Modelling of a Mechanical Ventilator",
      url: "https://drive.google.com/drive/folders/18izrQp7wCDCliQzQP-kAoJtYBsWw_1u9?usp=sharing",
      description:
        "Design and simulation of a mechanical ventilator device on Matlab and Simulink",
      languages: [
        {
          name: "Matlab",
          fontAwesomeClassname: "vscode-icons:file-type-matlab",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
