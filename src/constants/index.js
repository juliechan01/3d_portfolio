import {
  mobile, backend, creator, web,
  javascript, html, css, reactjs, nodejs, mongodb, python, flask, java, spring, mysql, bootstrap, threejs, git,
  costamesa, sunglass, bonterra, umih,
  txthomepage, jobit, tripguide
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
    {
      id: "resume",
      title: "Resume",
    },
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
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
        "Quickly learned how to use PeopleSoft Analytics to assist in budget transfers, authorizations and calculate budget projections",
        "Conducted various administrative tasks to support main staff such as compiling information to create agenda staff reports and updating documents on the database, Gravity",
      ],
    },
    {
      title: "Luxury Sales Associate",
      company_name: "House of Sun, City of Costa Mesa, CA",
      icon: sunglass,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - PRESENT",
      points: [
        "Helped new and existing customers by informing them of current promotions and store layout",
        "Conducted sunglass repairs if necessary",
        "Responsible for closing procedures such as creating cash deposits ta the end of the business day, ensuring inventory and overall store is organized",
      ],
    },
    {
      title: "Business Development Representative",
      company_name: "Bonterra Tech - Social Solutions",
      icon: bonterra,
      iconBg: "#383E56",
      date: "Jun 2022 - Sept 2022",
      points: [
        "Qualified inbound &outbound leads and was able to bring in $60,000 in revenue within 2 weeks",
        "Made cold calls with nonprofit organizations to qualify and book more sets for Account Executives to fulfill quota",
        "Learned how to operate Salesforce, Outreach, Gong, &Intercom in order to interact with prospective clients and explain how our software can help them overcome the challenges that stem from messy data",
      ],
    },
    {
      title: "Medical Administrator II",
      company_name: "United Medical Imaging Healthcare - Garden Grove",
      icon: umih,
      iconBg: "#E6DEDD",
      date: "Aug 2021 - Jun 2022",
      points: [
        "Quickly learned different procedures for the different types of modalities offered onsite",
        "Scheduled patients' appointments and performed insurance verification when needed",
        "Organized patients' files to increase workflow efficiency and to keep information up to date at all times", 
        "Coordinate with other healthcare providers and insurance companies to ensure quality of care for the patient", 
        "Learned how to operate the patient database CareStream",
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
      image: "https://media.licdn.com/dms/image/D5635AQHXOjcRyWyntg/profile-framedphoto-shrink_200_200/0/1684542882069?e=1688371200&v=beta&t=0fVZeyIxjyv1axmDOspw5HSRhrWh-_51kjIVPUrhpxY",
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
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: txthomepage,
      source_code_link: "https://github.com/juliechan01/txtmood_detect.git",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
