import emoji from "react-easy-emoji";
import splashAnimation from "../lottie/splashAnimation.json"; 
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  subTitle: "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.",
  github: "https://github.com/PhoSophors",
  linkedin: "https://www.linkedin.com/in/pho-sophors-241b84223/",
  telegram: "https://t.me/Pho_SoPhors",
  displayGreeting: true // Set false to hide this section, defaults to true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
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

  softwareSkills: [
    {
      skillName: "html-5",
      icon: ""
    },
    {
      skillName: "css3",
      icon: ""
    },
    {
      skillName: "sass",
      icon: ""
    },
    {
      skillName: "JavaScript",
      icon: ""
    },
    {
      skillName: "reactjs",
      icon: ""
    },
    {
      skillName: "nodejs",
      icon:  ""
    },
    {
      skillName: "swift",
      icon:  ""
    },
    {
      skillName: "npm",
      icon:  ""
    },
    {
      skillName: "sql-database",
      icon: ""
    },
    {
      skillName: "aws",
      icon:  ""
    },
    {
      skillName: "firebase",
      icon: ""
    },
    {
      skillName: "python",
      icon:  ""
    },
    {
      skillName: "docker",
      icon: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",

      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",

      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",

      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {

      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {

      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",

      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",

      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",

      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};

export const programming = [
    {   id: 1,
        img: "https://dl.dropboxusercontent.com/scl/fi/uzhd4mw3das6j3c32dm16/icons8-html-logo-96.png?rlkey=mb5w6955q30a6bs7pcad8qka1&dl=0",
        title: "HTML 5",
        percentage: "90%",    
    },
    {   id: 2,
        img: "https://dl.dropboxusercontent.com//scl/fi/08nr9wx1goy5rqxtr56n4/icons8-css-96.png?rlkey=yi5f34qve0eezjaaokjmq1ssg&dl=0",
        title: "CSS 3",
        percentage: "90%",
    },
    {
        id: 3,
        img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi519htEasYkbXhWuDiIcGWazdm_UslLK3-pII0PBQIpZGUJmSnk2jtlf1VuFlCcPrBijLBcQt0GDz5tpMT6PdOlSex6UOaAwslGxcov6SyKvNhZkoOhi1mU1SJj-WJ_7D7hHMIz7IcrWxJCtZkzBM62dggKBjAUunJ07n8v5UecJaXV_JiHZIPwphKi9aV/w1200-h630-p-k-no-nu/C-Icon.png",
        title: "C",
        percentage: "65%",    
    },
    {   id: 4,
        img: "https://dl.dropboxusercontent.com/scl/fi/pw67inz03pocb3l0sibxp/icons8-c-96.png?rlkey=dcnv6ytvj0mllf5v4vvl50pcw&dl=0",
        title: "C++",
        percentage: "50%",
    },
    {   id: 5,
        img: "https://dl.dropboxusercontent.com/scl/fi/509z0kngyjvq6qhewbr8a/icons8-c-96-1.png?rlkey=kgp6gv6mgtd7dgnthh64zdwls&dl=0",
        title: "C#",
        percentage: "50%",
    },
    {   id: 6,
        img: "https://dl.dropboxusercontent.com/scl/fi/hza6onvubgvv7qetom29b/icons8-java-96.png?rlkey=l324jqqymf1fxe3k97hmm5mhx&dl=0",
        title: "Java",
        percentage: "70%",
    },
    
    {   id: 7,
        img: "https://dl.dropboxusercontent.com/scl/fi/0ymhjt9m29xdrd5r1h1ab/icons8-python-96.png?rlkey=qu5oo06yfaw3by0ku23z9kms4&dl=0",
        title: "Python",
        percentage: "55%",
    },
    {   id: 8,
        img: "https://dl.dropboxusercontent.com/scl/fi/14rae0v9sco8v8cw2io79/icons8-javascript-96.png?rlkey=8qjsfgk30nf2d43xh53zcn520&dl=0",
        title: "JavaScript",
        percentage: "80%",
    },
];

export const frameworks = [
        
    {   id: 1,
        img: "https://dl.dropboxusercontent.com/scl/fi/npsrpblk6vscnhmazpf0x/icons8-php-80.png?rlkey=t8wy9jcr2l8lmwv2oox0kow0h&dl=0%3D0",
        title: "PHP",
        percentage: "70%",
    },
    {   id: 2,
        img: "https://ih1.redbubble.net/image.4681332957.0452/st,small,507x507-pad,600x600,f8f8f8.jpg",
        title: "Laravel",
        percentage: "90%", 
    },
    {   id: 3,
        img: "https://dl.dropboxusercontent.com/scl/fi/sj9g7kuly107twti1t4ni/icons8-react-js-100.png?rlkey=15f7k0nsv9rxzavgizwpz3sa0&dl=0",
        title: "React JS",   
        percentage: "90%", 
    },
    {   id: 4,
        img: "https://dl.dropboxusercontent.com/scl/fi/8u4p3w4qvmunbzs1e0ft9/icons8-vue-js-96.png?rlkey=xml6caa4akip5i4g2pjhe2ffh&dl=0",
        title: "Vue JS",   
        percentage: "90%", 
    },
    {   id: 5,
        img: "https://dl.dropboxusercontent.com/scl/fi/xinfxbuv1zaeigd7nxnuq/icons8-vite-96.png?rlkey=ck918wlptr3dw5tpk857odhf5&dl=0",
        title: "Vite JS",   
        percentage: "90%", 
    },
    {   id: 6,
        img: "https://dl.dropboxusercontent.com/scl/fi/jnx5btv2q4wwh94084qlp/icons8-tailwind-css-96.png?rlkey=gfgzakvtcse07v7o4wx7prhc2&dl=0",
        title: "Tailwind CSS",   
        percentage: "90%", 
    },
    {   id: 7,
        img: "https://dl.dropboxusercontent.com//scl/fi/runacendnjjnkks2xpn2p/icons8-bootstrap-96.png?rlkey=1bc0i628adti1gibaxts75zq4&dl=0",
        title: "Bootstrap 5", 
        percentage: "90%",   
    },
];

export const database = [
    {
        id: 1,
        img: "https://dl.dropboxusercontent.com/scl/fi/jn4r0q8u6ulikngcfsk7p/icons8-my-sql-96.png?rlkey=nm3qtxi0n9ipngbdhjl4yw21d&dl=0",
        title: "MySQL",
        percentage: "90%", 
    },
    {
        id: 2,
        img: "https://dl.dropboxusercontent.com/scl/fi/69w4uutfnlmc02ps5unsj/icons8-mongo-db-96.png?rlkey=s5kfutiuaxd90e65uhk86tn6e&dl=0",
        title: "MongoDB",
        percentage: "60%", 
    },
];