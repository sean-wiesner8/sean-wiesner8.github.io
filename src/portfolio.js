/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sean Wiesner",
  title: "Welcome to my portfolio",
  subTitle: "CS + Math at Cornell University. Curious about distributed systems, data architecture, and data science. Check out the Featured Project and Open Source sections below to see what I've been working on during my free time.",
  resumeLink:
    "https://drive.google.com/file/d/1rB7x_7TfYQ5FEB_MPWr80ZNXGsycfbr0/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sean-wiesner8",
  linkedin: "https://www.linkedin.com/in/sean-wiesner-403b43220/",
  gmail: "sean.wiesner@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  skills: [
    "Build complex data pipelines utilizing distributed architecture principles",
    "Conduct data transformations and analysis with querying languages like SQL and Python libraries like Pandas",
    "Build Machine Learning models for a wide range of tasks, including text generation, named entity recognition, and image classification",
    "Develop and make requests to web APIs with Python"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Cornell University",
      logo: require("./assets/images/Cornell_Logo.png"),
      subHeader: "Bachelor of Arts, Computer Science and Mathematics, GPA: 3.6",
      duration: "August 2020 - May 2024",
      desc: "Activities and Accomplishments:",
      descBullets: [
        "Software Engineer at Cornell Quant Fund. Implemented multiple backtesting engines used by hundreds of competitors during our annual Cornell Trading Competition.",
        "Machine Learning Researcher under Prof. Kevin Ellis. Working on LLMs for code generation and refinement.",
        "Teaching Assistant for CS 4700: Foundations of AI. Host weekly office hours during which I guide students towards solutions to their Python based programming assignments."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
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
      role: "Machine Learning Researcher",
      company: "Cornell University CIS",
      companylogo: require("./assets/images/Cornell_Logo.png"),
      date: "May 2023 - Present",
      descBullets: [
        "Implemented a novel approach to code generation with Python by modifying the data loading processes of two established Difusion-based language models for text generation, utilizing Python packages like PyTorch.",
        "Presented weekly reports on data generated by the modifed language models to a team of researchers and discussed future development paths based on implications from the data."
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "nCino",
      companylogo: require("./assets/images/ncino_logo.jpeg"),
      date: "May 2022 – Aug 2022",
      descBullets: [
        "Integrated credit data from third-party vendors into the nCino database utilizing internal data collection tools and managed data with SQL syntax.",
        "Developed functionality with Java to process integrations involving highly complex data transformations.",
        "Created and ran regression tests in the JIRA platform during release periods and reviewed code written by other engineers for mistakes or improvements prior to production."
      ]
    },
    {
      role: "Software Engineer, E-Board Member",
      company: "Cornell Quant Fund",
      companylogo: require("./assets/images/cqf_logo.jpeg"),
      date: "Aug 2021 – Present",
      descBullets: [
        "Developed multiple Python backtesting engines which were used by hundreds of competitors to test their trading strategies during CQF’s annual Trading Competitions.",
        "Mentored new club members on their projects, participated in e-board meetings, and updated the website."
      ]
    },
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Project",
  projects: [
    {
      image: require("./assets/images/mtg_logo.jpeg"),
      projectName: "Magic The Gathering - Deck Advisor",
      projectDesc: "Open-source Python based data pipeline orchestrated with Apache Airflow and containerized with Docker Compose (Ubuntu), serving the purpose of simplifying the competitive deck construction process in the popular collectible card game, Magic: The Gathering. Utilizes dynamic web scraping of multiple data sources using advanced Python packages like Selenium. Data infrastructure hosted on AWS with Terraform, including a data lake (S3) and a data warehouse (Redshift). Data transformation for trend analysis and testing done though dbt in the data warehouse. Includes a Python application allowing users to input their personal deck information and receive detailed card replacement suggestions. PostgreSQL database hosted on AWS RDS, enabling streamlined access to data processed efficiently with Pandas and verified with Pydantic.",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://github.com/sean-wiesner8/MTG-Deck-Advisor/tree/main"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
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
      image: require("./assets/images/codeInLogo.webp"),
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
      image: require("./assets/images/googleAssistantLogo.webp"),
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
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
