import emoji from "react-easy-emoji";
import splashAnimation from "../lottie/splashAnimation.json"; 

// import img project 
import travel_frontend from "../img/travel_frontend.png";
import travel_official from "../img/travel_official.png";
import library from "../img/library_ofiicial.png";
import yt2mp3 from "../img/yt2mp3.png";
import ITE_Calculator from "../img/ITE_Calculator.png";

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
    skillName: "MongoDB",
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
  projects : [
    {
      img : travel_frontend,
      title : "The Travel (ReactJS)",
      subTitle: "The travel project is a web-based application that allows users to share places and photos with other users. The project aims to provide a platform for users to connect with each other and share their travel experiences.",
      link : "https://the-travels.vercel.app/",
    },
    {
      img : travel_official,
      title : "The Travel (Laravel)",
      subTitle: "The travel project is a web-based application that allows users to share places and photos with other users. The project aims to provide a platform for users to connect with each other and share their travel experiences. ",
      link : "https://cam-travel.store/",
    },
    {
      img : library,
      title : "Cam-Libray (ReactJS)",
      subTitle: "Library system projects can be useful for libraries in a number of ways, such as helping them spend more time searching for books, saving time, and having lots of books.",
      link : "https://cam-library-official.vercel.app/",
    },
    {
      img: yt2mp3,
      title: "Youtube Convert",
      subTitle: "A YouTube to MP3 converter is a tool that allows you to download YouTube videos and convert them to MP3 audio files. To use a YouTube to MP3 converter, simply copy the URL of the YouTube video that you want to convert and paste it into the converter tool.",
      link : "https://yt-convert.vercel.app/",
    },
    {
      img: ITE_Calculator,
      title: "ITE Calculator (Java)",
      subTitle: "The ITE Calculator is a powerful and versatile calculator that is designed for students and professionals in a variety of fields, including engineering, mathematics, and science.",
      link : "https://github.com/PhoSophors/APL-II-Final-Project-Java-ITECalculator",
    }
  ]
};


// Contact ===================================================================
const contact = {
  display: true,
  title: "Contact with one of our available wallet providers or create a new one."
}

// About me ===================================================================
const aboutme = {
  display: true,
  title: " Hello! My name is Sophors, and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!",
  title2: " I am particularly interested in developing software that has a positive impact on the world. I am excited about the potential of software to solve complex problems and make people's lives better. In my career, I hope to work on projects that make a real difference."
}

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer
export {
  illustration,
  greeting,
  project,
  splashScreen,
  skillsSection,
  isHireable,
  contact,
  aboutme
};
