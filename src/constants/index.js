import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const BOSSLADY_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a passionate Software Engineer with a Bachelor's in Information Technology from VIT Vellore. Skilled in Java, JavaScript, React, Node.js, and AWS, I specialize in full-stack development, cloud technologies, and database management. My experience includes AWS Lambda, DynamoDB, S3, and technical project management.

An open-source contributor, I ranked 6th in SWOC '21 and led PR submissions in Script Winter of Code 2.0. As a blog writer at Coding Ninjas, I reviewed 100+ articles, mentoring teams to enhance engagement.

I have led events, serving as Events Manager for VIT’s graVITas and organizing company-wide events at Schneider Electric. With 100+ problems solved on LeetCode, I continually refine my problem-solving skills. A district-level football tournament winner and fine arts enthusiast, I bring creativity, leadership, and collaboration to drive innovation and impact in tech.`;

export const EXPERIENCES = [
  {
    year: "August 2024 - Present",
    role: "Graduate Engineer Trainee",
    company: "Schneider Electric",
    description: `Enhanced the analytics of an internal project by 90% through in-depth data analysis, optimizing performance and insights. Boosted user engagement on an internal product by designing and implementing key features that improved usability and adoption. Successfully led the organization of the annual company event in collaboration with the VoW Community, ensuring seamless execution and high participation.`,
    technologies: ["Javascript", "React.js", "Postman", "Github Copilot"],
  },
  {
    year: "January 2024-August 2024",
    role: "Schneider Digital Intern",
    company: "Schneider Electric",
    description: `I gained hands-on experience in front-end development using JavaScript and React.js while working on a real-time internal project, utilizing Jira and Adobe Analytics to drive data-informed decisions. My backend expertise expanded through comprehensive training in AWS services, including Lambda, CloudWatch, DynamoDB, S3, and SNS. Beyond technical skills, I demonstrated strong leadership and organizational abilities by successfully planning and executing a high-impact ideathon, fostering innovation and collaboration within the team.`,
    technologies: ["AWS", "CSS", "Vue.js", "MySQL"],
  },
  {
    year: "August 2022-November 2022",
    role: "Technical Blog Reviewer Intern",
    company: "Coding Ninjas",
    description: `I was promoted for my contributions to technical content and reviewed over 100+ blogs, enhancing engagement and content quality for writers. Leading a four-member team, I collaborated with managers and the SEO team to optimize technical blogs, ensuring reader-friendly and high-impact content.`,
    technologies: ["Google SEO", "Team Management", "Leadership", "Creative Writing"],
  },
  {
    year: "December 2021-July 2022",
    role: "Technical Blog Writer Intern",
    company: "Coding Ninjas",
    description: `I collaborated with a five-member team on a technical writing project, contributing over 100+ blogs on diverse topics such as Web Development, Data Structures & Algorithms, and Bootstrap, enriching technical knowledge and accessibility for readers.`,
    technologies: ["Problem Solving", "Technical Content Writing", "Figma"],
  },
];

export const PROJECTS = [
  {
    title: "To-Do-List",
    image: project2,
    description:
      "Implemented a fully functional to-do list web app that allows users to create, manage, and track their tasks and priorities, ensuring efficient organization and productivity.",
    technologies: ["HTML", "CSS", "Javascript","NodeJS","MongoDB"],
  },
  {
    title: "BlogZilla",
    image: project3,
    description:
      "Created and deployed a working Blog web app that is user-friendly and enables writers to compose and publish blogs effortlessly.",
    technologies: ["HTML", "CSS", "Javascript","NodeJS","MongoDB"],
  },
  {
    title: "Let’s Video Call",
    image: project1,
    description:
      "Created a working video calling web app used to call people with your video and audio, anywhere in the world using Socket and PeerJS.",
    technologies: ["HTML", "CSS", "Javascript","Socket/ Peer"],
  },
  {
    title: "CrimRec",
    image: project4,
    description:
      "A website to keep a record of the criminals for future judgment and to obtain relevant information regarding police officers and criminals all in one place.",
    technologies: ["HTML", "CSS", "Javascript","NodeJS","MySQL", "Handlebars"],
  },
  {
    title: "Weather App",
    image: project1,
    description:
      "Developed and deployed a website that tells the weather of any place the user searches for.",
    technologies: ["HTML", "CSS", "Javascript","ReactJS"],
  }
];

export const CONTACT = {
  address: "Bengaluru, India",
  phoneNo: "7505992112",
  email: "devikavarshney0602@gmail.com",
};
