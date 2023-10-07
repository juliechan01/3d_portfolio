import {
  mobile, backend, creator, web,
  javascript, html, css, reactjs, nodejs, mongodb, python, flask, java, spring, mysql, bootstrap, tailwind, threejs, figma, git,
  costamesa, sunglass, bonterra, umih,
  txthomepage, yiiphomepage, wip
} from "../assets";

  export const myGithub = "https://github.com/juliechan01";
  export const myLinkedIn = "https://www.linkedin.com/in/juliechan2/";
  export const hackerRank = "https://www.hackerrank.com/juliechan03?hr_r=1";
  export const leetCode = "https://leetcode.com/juliechan03/";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    // {
    //   id: "projects",
    //   title: "Projects",
    // },
    // {
    //   id: "testimonials",
    //   title: "Testimonials",
    // },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "Java",
      icon: java,
    }, 
    {
      name: "Spring",
      icon: spring,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Administrative Assistant",
      company_name: "City of Costa Mesa - Finance Dept",
      icon: costamesa,
      iconBg: "#383E56",
      date: "Feb 2023 - June 2023",
      points: [
        "Assisted with budget transfers and authorizations which helped increase workflow efficiency by 40% and which also resulted in a new budget proposal finished before the deadline"
      ],
    },
    {
      title: "Luxury Sales Associate",
      company_name: "House of Sun, City of Costa Mesa, CA",
      icon: sunglass,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - PRESENT",
      points: [
        "Actively listened to customers to gauge their needs which increased the likelihood of closing the sale by 150%,therefore exceeding personal quota consistently",
      ],
    },
    {
      title: "Business Development Representative",
      company_name: "Bonterra Tech - Social Solutions",
      icon: bonterra,
      iconBg: "#383E56",
      date: "Jun 2022 - Sept 2022",
      points: [
        "Qualified inbound & outbound leads by actively listening to non profit and healthcare organization needs and brought in $60,000 in revenue within 2 weeks",
        "Effectively learned how to operate Salesforce, Gong, Outreach, and Intercom to interact and track prospective clients which increased likelihood of follow up by 100% and closing the sale by 80%",
      ],
    },
    {
      title: "Medical Administrator II",
      company_name: "United Medical Imaging Healthcare - Garden Grove",
      icon: umih,
      iconBg: "#E6DEDD",
      date: "Aug 2021 - Jun 2022",
      points: [
        "Efficiently learned and memorized diverse on-site modalities and procedures to effectively manage the CareStream patient database, which enhanced workflow efficiency by 60% and increased number of appointments booked by 80%",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Julie has a great go-getter energy to her! She's adamant about achieving success and greatness in all of her work. She's a team player and is always is a hand raiser focusing on getting the job done. Our time together has been great and I admire the strides Julie has always put out for herself to achieve.",
      name: "Elih North",
      designation: "Business Development Representative",
      company: "Bonterra Tech",
      image: "https://media.licdn.com/dms/image/C5603AQEAb_Q3vIJOhg/profile-displayphoto-shrink_200_200/0/1654813301664?e=1696464000&v=beta&t=oqHbg2b4uGUdaSKDbjQLPruoczPCURsIcTxwmOByjlE",
    },
    {
      testimonial:
        "I’ve had the pleasure of working with many professionals in our line of work, but Julie is someone who I will always remember fondly. I started my career working alongside Julie. I learned a lot from Julie. She’s always willing to lend a hand to anyone who needs it. Her ability to overcome challenges with a smile made her stand out as a cut above the rest. A true blessing to have on the team!",
      name: "Andres Pina",
      designation: "Business Development Representative",
      company: "Bonterra Tech",
      image: "https://media.licdn.com/dms/image/D5603AQGysruLztNGvQ/profile-displayphoto-shrink_200_200/0/1665671066110?e=1693440000&v=beta&t=J06UmMIhd3djXRPC7XGfwoXnRonACyLQ4PzywuAELjY",
    },
    {
      testimonial:
        "Julie is an enjoyable individual to work with. She is very eager to learn new areas of HR and communications planning and does excellent work expanding marketing efforts through her independent entrepreneurship. As someone who has known her for a long time, she is a specialist with her time divided across several responsibilities, it is notable that she is still able to balance humor with professionalism.",
      name: "Aldy Hong",
      designation: "Campaign Finance and Compliance Associate",
      company: "Kalik & Associates",
      image: "https://media.licdn.com/dms/image/C4E03AQGGxc2mZoTjtg/profile-displayphoto-shrink_200_200/0/1559170233213?e=1693440000&v=beta&t=mR6zSD3PZBw4-1KAYIEEhwLQaQ4sy0Ypx86dgMn9nF0",
    },
  ];
  
  const projects = [
    {
      name: "TxtMood Detect",
      description:
        "A web application that can detect the mood of the text you input & track your current mood at time of input [v1]",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "express.js",
          color: "pink-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
      ],
      image: txthomepage,
      source_code_link: "https://github.com/juliechan01/txtmood_detect.git",
    },
    {
      name: "Yiip",
      description:
        "A web app that allows users to look up businesses, create pages for new ones, and update/delete them if needed.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "express.js",
          color: "pink-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
      ],
      image: yiiphomepage,
      source_code_link: "https://github.com/yiip-webapp/yiip-nextjs.git",
    },
    {
      name: "DevDiscover Toolkit",
      description:
        "A web app that's a Product Hunt clone but for developers. Allows devs to rank developer resource usefulness.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: wip,
      source_code_link: "https://github.com/DevDiscover-Toolkit/app",
    },
    {
      name: "ShelterLink",
      description:
        "A web app that displays real time shelter bed availability.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: wip,
      source_code_link: "https://github.com/shelter-link/app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };