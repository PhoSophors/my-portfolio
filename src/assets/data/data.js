import emoji from "react-easy-emoji";
import splashAnimation from "../lottie/splashAnimation.json"; 

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

// hero data
const greeting = {
  username: "Pho Sophors",
  title: "Hi all, I'm Phors 👋",
  subTitle: "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / React.js / Vue.Js / Kotlin and some other cool libraries and frameworks.",
  github: "https://github.com/PhoSophors",
  linkedin: "https://www.linkedin.com/in/pho-sophors-241b84223/",
  telegram: "https://t.me/Pho_SoPhors",
  displayGreeting: true // Set false to hide this section, defaults to true
};




// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

programming : [
  {
    skillName: "html-5",
    percentage: "90%"
  },
  {
    skillName: "css-3",
    percentage: "90%"
  },
  {
    skillName: "PHP",
    percentage: "70%"
  },
  {
    skillName: "Java",
    percentage: "60%"
  }, 
  {
    skillName: "JavaScript",
    percentage: "60%"
  },
  {
    skillName: "C",
    percentage: "70%"
  },
  {
    skillName: "C++",
    percentage: "60%"
  },
  {
    skillName: "Kotlin",
    percentage: "60%"
  },
],

framework : [
  {
    skillName: "React.js",
    percentage: "80%"
  },
  {
    skillName: "Laravel",
    percentage: "70%"
  },
  {
    skillName: "Vue.js",
    percentage: "70%"
  },
  {
    skillName: "Tailwind",
    percentage: "80%"
  },
  {
    skillName: "Material UI",
    percentage: "80%"
  },
  {
    skillName: "Bootstrap",
    percentage: "80%"
  },
],

database : [
  {
    skillName: "MySql",
    percentage: "70%"
  },
  {
    skillName: "MongdoDb",
    percentage: "50%"
  },
  {
    skillName: "GitHub",
    percentage: "70%"
  },
  {
    skillName: "Git",
    percentage: "60%"
  }

],
display: true // Set false to hide this section, defaults to true
};


// Project ===================================================================
const project = {
  display: true,
  travel : [
    {
      title: "The Travel(React.js)",
      subTitle: "The travel project is a web-based application that allows users to share places and photos with other users. The project aims to provide a platform for users to connect with each other and share their travel experiences.",
      link: "https://the-travels.vercel.app/"
    },
  ] 
};





const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  project,
  splashScreen,
  skillsSection,
  isHireable
};
