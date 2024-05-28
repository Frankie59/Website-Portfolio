import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    pepperdine,
    skip,
    pep9,
    pepp,
    course,
    assembly,
    sortp,
    java,
    python,
    cplus,
    creg,
    mysql,
    latex,
    prolog,
    lisp,
    collage,
    riso,
    city,
  } from "../assets";
  
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "Backend Development",
      icon: mobile,
    },
    {
      title: "AI Prompt Engineering",
      icon: backend,
    },
    {
      title: "Art",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: cplus,
    },
    {
      name: "C",
      icon: creg,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "latex",
      icon: latex,
    },
    {
      name: "prolog",
      icon: prolog,
    },
    {
      name: "lisp",
      icon: lisp,
    },
  ];
  
  const experiences = [
    {
      title: "Computer Science and Mathematics Student",
      company_name: "Pepperdine University",
      icon: pepperdine,
      iconBg: "#383E56",
      date: "August 2020 - April 2024",
      points: [
        "Learning computer science fundamentals such as basic coding prinicples and data structures.",
        "Exploring diverse mathematical topics, including but not limited to calculus, linear algebra, and automata theory.",
        "Delving into more complex fields of computer science such as operating systems and computer networks.",
        "Balancing collaboration and independent work on expansive software development projects.",
      ],
    },
    {
      title: "Researcher and Cinematographer",
      company_name: "Skip Media",
      icon: skip,
      iconBg: "#E6DEDD",
      date: "Oct 2020 - Aug 2023",
      points: [
        "Conducting relevant research and gathering footage for entertainment videos on YouTube.",
        "Working with a team and collaborating on research and recordings.",
        "Integrating and collecting new footage for editors to finalize projects.",
        "Producing and operating with collected footage in a creative manner.",
      ],
    },
    {
      title: "Assembly Language Translator",
      company_name: "Computer Systems",
      icon: pep9,
      iconBg: "#383E56",
      date: "Feb 2022 - Apr 2022",
      points: [
        "Creating a multipurpose code generator and translator in IntelliJ using Java.",
        "Exploring vast interworking computer systems to understand high-order to low-order language translation.",
        "Building a comprehensive understanding of both Java and Pep/9 assembly language.",
        "Developing several programs to manually parse and translate Java code to be read by a low-level assembler.",
      ],
    },
    {
      title: "Course Planning Assistant",
      company_name: "Senior Capstone",
      icon: pepp,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - April 2024",
      points: [
        "Creating a database using MySQL Workbench and populating tables directly from the course catalog using Python scripts.",
        "Writing the backend for the website in JavaScript using Node.js and Express.js frameworks to deploy the application.",
        "Developing the frontend using HTML and CSS with JavaScript handling for HTTP fetch requests.",
        "Deploying the application on a local webpage and presenting the project to the computer science department.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Course Planning Assistant",
      description:
        "Web-based application that allows students at Pepperdine University to construct a four-year course plan based on their major and/or minor.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: course,
      source_code_link: "https://github.com/Frankie59/Course-Planning-Assistant",
    },
    {
      name: "Assembly Language Translator",
      description:
        "A Pep/9 assembly language code generator/translator that manually parses through and translates Java code to be read by a low-level assembler.",
      tags: [
        {
          name: "assembly",
          color: "blue-text-gradient",
        },
        {
          name: "java",
          color: "green-text-gradient",
        },
        {
          name: "intellij",
          color: "pink-text-gradient",
        },
      ],
      image: assembly,
      source_code_link: "https://github.com/Frankie59/Assembly-Language-Translator",
    },
    {
      name: "Sort Project",
      description:
        "An extensive research paper written in LaTeX on the data gathered to create models of curve fits and performance metrics, analyzing the effectiveness of different sorts with plots to find asymptotic run time in RStudio.",
      tags: [
        {
          name: "latex",
          color: "blue-text-gradient",
        },
        {
          name: "c++",
          color: "green-text-gradient",
        },
        {
          name: "rstudio",
          color: "pink-text-gradient",
        },
      ],
      image: sortp,
      source_code_link: "https://github.com/Frankie59/Sort-Project",
    },
  ];

  const projects2 = [
    {
      name: "AI Artist",
      description:
        "Photoshop collage made using pictures of real objects depicting a robot creating digital art. This piece is meant to be a commentary on the negative effects of claiming AI art as original work.",
      tags: [
        {
          name: "photoshop",
          color: "blue-text-gradient",
        },
      ],
      image: collage,
      source_code_link: "https://www.deviantart.com/frankiemundo/art/1052635502",
    },
    {
      name: "Graveyard Risograph",
      description:
        "A two-color risograph created in Illustrator depicting a graveyard with ghosts. This artwork was printed on a risograph by layering the black tones followed by the blue tones, leaving the background white.",
      tags: [
        {
          name: "illustrator",
          color: "green-text-gradient",
        },
      ],
      image: riso,
      source_code_link: "https://www.deviantart.com/frankiemundo/art/1052639922",
    },
    {
      name: "Modern Dystopia",
      description:
        "A dark cityscape created using Krita. The primary purpose of this project was to test different natural effects such as water reflections, stormy clouds, and rain on a 2D raster graphics editor.",
      tags: [
        {
          name: "krita",
          color: "pink-text-gradient",
        },
      ],
      image: city,
      source_code_link: "https://www.deviantart.com/frankiemundo/art/1052642169",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, projects2 };