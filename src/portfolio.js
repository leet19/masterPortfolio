/* Change this file to get your personal Porfolio */
import me1 from "./assets/images/me1.jpeg";
import me2 from "./assets/images/me2.jpeg";
import me3 from "./assets/images/me3.jpeg";

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Travis' Portfolio",
  description:
    "Strategic and impact driven engineer passionate about solving challenges at the intersection of technology and business.",
  og: {
    title: "Travis Lee Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Travis Lee",
  logo_name: "AshutoshHathidara",
  nickname: "T-Lee",
  subTitle:
    "Strategic and impact driven engineer passionate about solving challenges at the intersection of technology and business.\n\nOutside of work, I love playing and watching sports, caffeine, and being around family and friends.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/travislee7",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/travislee7",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/travis-lee-522908240/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Email",
    link: "mailto:tlee7359@live.com",
    fontAwesomeIcon: "fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/travylee/?hl=en",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Product & Program Management",
      fileName: me1,
      skills: [
        "⚡ Driving cross-functional engineering projects from conception to launch",
        "⚡ Delivering scalable solutions across enterprise systems and startups",
        "⚡ Managing product roadmaps, priorities, and stakeholder alignment",
      ],
      softwareSkills: [
        {
          skillName: "JIRA",
          fontAwesomeClassname: "simple-icons:jirasoftware",
          style: { color: "#0052CC" },
        },
        {
          skillName: "Confluence",
          fontAwesomeClassname: "simple-icons:confluence",
          style: { color: "#172B4D" },
        },
        {
          skillName: "Notion",
          fontAwesomeClassname: "simple-icons:notion",
          style: { color: "#000000" },
        },
        {
          skillName: "Microsoft PowerPoint",
          fontAwesomeClassname: "simple-icons:microsoftpowerpoint",
          style: { color: "#B7472A" },
        },
        {
          skillName: "Slack",
          fontAwesomeClassname: "simple-icons:slack",
          style: { color: "#4A154B" },
        },
      ],
    },

    {
      title: "Full-Stack Development",
      fileName: me3,
      skills: [
        "⚡ Building modern web apps using React, Django, and AWS",
        "⚡ Designing scalable backend systems and secure APIs",
        "⚡ Deploying cloud-based applications with strong UI/UX",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: { color: "#092E20" },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "fa-github",
          style: { color: "#181717" },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Microsoft Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: { color: "#0089D6" },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { color: "#F7DF1E" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
      ],
    },
    {
      title: "Solutions Engineering",
      fileName: me2,
      skills: [
        "⚡ Designing and presenting tailored technical solutions to enterprise clients",
        "⚡ Translating customer needs into scalable backend and API solutions",
        "⚡ Acting as technical liaison between engineering teams and business stakeholders",
      ],
      softwareSkills: [
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: { color: "#F2C811" },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: { color: "#217346" },
        },
        {
          skillName: "Google Sheets",
          fontAwesomeClassname: "simple-icons:googlesheets",
          style: { color: "#0F9D58" },
        },
        {
          skillName: "Salesforce",
          fontAwesomeClassname: "simple-icons:salesforce",
          style: { color: "#00A1E0" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "AWS Certified Cloud Practitioner",
      iconifyClassname: "simple-icons:amazonaws",
      style: {
        color: "#FF9900",
      },
      profileLink:
        "https://www.credly.com/badges/eb30d974-bf98-40ef-acdf-a0a352ff3d26/public_url",
    },
    {
      siteName: "Microsoft Certified: Azure Fundamentals",
      iconifyClassname: "simple-icons:microsoft",
      style: {
        color: "#0089D6",
      },
      profileLink:
        "https://learn.microsoft.com/en-us/users/TravisLee-1676/credentials/402FDE6EFBBF24B5?ref=https%3a%2f%2fwww.linkedin.com%2f",
    },
    {
      siteName: "Databricks: Generative AI Fundamentals",
      iconifyClassname: "simple-icons:databricks",
      style: {
        color: "#FF3621",
      },
      profileLink:
        "https://credentials.databricks.com/180dd181-057f-41e1-bbbb-b79f6d0f0a18#acc.0RHXFdLG",
    },
    {
      siteName: "LinkedIn: System Design in Cloud",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink:
        "https://www.linkedin.com/learning/certificates/1185529f9b8d853f5b1a511a560ae12ff00a5bf946eb2590829d286c3fd05f21?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BLVDvFUgRQ8muEBvWVZlXkA%3D%3D",
    },
    {
      siteName: "Logitech: Video Collaboration Professional",
      iconifyClassname: "simple-icons:logitech",
      style: {
        color: "#323754",
      },
      profileLink:
        "https://www.credly.com/badges/36a486de-9899-4cf8-ac52-462d038d1629/public_url",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Seattle Pacific University",
      subtitle: "Bachelor of Arts in Computer Science",
      logo_path: "spu_logo.png",
      alt_name: "Seattle Pacific University",
      duration: "2025",
      descriptions: [
        "⚡ Studied core computer science concepts including software development, data structures, algorithms, databases, and operating systems.",
        "⚡ Chosen as 1 of 20-30 outstanding graduates by SPU faculty and staff.",
        "⚡ Awarded the SPU Launch Fund, a $2000 grant to support my entrepreneurial venture.",
      ],
      website_link: "https://spu.edu/",
    },
    {
      title: "Edmonds College",
      subtitle: "Associate of Arts in Computer Science",
      logo_path: "edc_logo.png",
      alt_name: "Edmonds College",
      duration: "2023",
      descriptions: [
        "⚡ Served as Team Captain of the Edmonds College Baseball Team, demonstrating leadership on and off the field.",
        "⚡ Awarded the Academic Leadership Award for balancing athletic excellence with academic achievement.",
        "⚡ Active member of the Phi Theta Kappa Honor Society and the Computer Science Club and completed foundational programming coursework.",
      ],
      website_link: "https://www.edmonds.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Cloud Practitioner",
      subtitle: "AWS Certified",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://www.credly.com/badges/eb30d974-bf98-40ef-acdf-a0a352ff3d26/public_url",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Generative AI Fundamentals",
      subtitle: "Databricks Certified",
      logo_path: "databricks_logo.png",
      certificate_link:
        "https://credentials.databricks.com/180dd181-057f-41e1-bbbb-b79f6d0f0a18#acc.0RHXFdLG",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "System Design in Cloud",
      subtitle: "LinkedIn Learning Certified",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/1185529f9b8d853f5b1a511a560ae12ff00a5bf946eb2590829d286c3fd05f21?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BLVDvFUgRQ8muEBvWVZlXkA%3D%3D",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Azure Fundamentals",
      subtitle: "Microsoft Certified",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://learn.microsoft.com/en-us/users/TravisLee-1676/credentials/402FDE6EFBBF24B5?ref=https%3a%2f%2fwww.linkedin.com%2f",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Video Collaboration Professional",
      subtitle: "Logitech Certified",
      logo_path: "logitech_logo.png",
      certificate_link:
        "https://www.credly.com/badges/36a486de-9899-4cf8-ac52-462d038d1629/public_url",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Career Summary",
  description:
    "I bring experience leading cross-functional teams in technical/non-technical and customer-facing roles across startups and enterprise environments. I’ve delivered full-stack software solutions, managed cloud infrastructure, and driven programs from concept to launch. With a background spanning product, engineering, and customer success, I bridge technical depth with business strategy to lead high-impact initiatives.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Solutions Engineer Intern",
          company: "Logitech",
          company_url: "https://www.logitech.com/en-us",
          logo_path: "logitech_logo.png",
          duration: "September 2025 - Present",
          location: "Seattle, WA, USA",
          description: "Video Collaboration",
          color: "#000000",
        },
        {
          title: "Solutions Architect Intern",
          company: "World Wide Technology",
          company_url: "https://www.wwt.com/",
          logo_path: "wwt_logo.jpg",
          duration: "June 2024 - August 2024",
          location: "Bellevue, WA, USA",
          description: "Cloud Solution Architecture",
          color: "#0879bf",
        },
        {
          title: "Vice President",
          company: "The House of Wisdom",
          company_url: "https://www.thehouseofwisdomwa.org/",
          logo_path: "how_logo.jpeg",
          duration: "June 2022 - March 2024",
          location: "Seattle, WA, USA",
          description:
            "Spearheaded the creation and explosive growth of a startup dedicated to educational empowerment of underserved communities.",
          color: "#9b1578",
        },
        {
          title: "Head Baseball Coach (Fall Season)",
          company: "Lake Washington High School",
          company_url: "https://lwhs.lwsd.org/",
          logo_path: "lw_logo.png",
          duration: "September 2022 - September 2024",
          location: "Kirkland, WA, USA",
          description:
            "Coached Varsity and Freshman teams. Led both teams to 1st place league finishes (2022-2024).",
          color: "#9b1578",
        },
        {
          title: "Software Test Engineer Intern",
          company: "BrightArrow Technologies",
          company_url: "https://brightarrow.com/",
          logo_path: "ba_logo.jpeg",
          duration: "February 2023 - May 2023",
          location: "Bellevue, WA, USA",
          description: "Notifications Platform",
          color: "#9b1578",
        },
        {
          title: "Research Intern",
          company: "Tech Security USA",
          company_url: "https://techsecurityusa.com/",
          logo_path: "tsusa_logo.png",
          duration: "November 2022 - February 2023",
          location: "Lynnwood, WA, USA",
          description:
            "Focused on software solutions to improve workflow efficiency.",
          color: "#9b1578",
        },
        {
          title: "Math Tutor",
          company: "Edmonds College",
          company_url: "https://www.edmonds.edu/",
          logo_path: "edc_logo.png",
          duration: "September 2022 - December 2022",
          location: "Lynnwood, WA, USA",
          description: "",
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create full stack software applications and deploy them using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "In the News",
  description: "Some of the news articles I've been featured in for my work.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Edmonds News Feature",
      createdAt: "2024-01-31T00:00:00Z",
      description:
        "Lynnwood nonprofit helps immigrant students along path to educational success",
      url:
        "https://myedmondsnews.com/2024/01/lynnwood-nonprofit-helps-immigrant-students-along-path-to-educational-success/",
    },
    {
      id: "mdp-diffusion",
      name: "Greet Kirkland Feature",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Empowering Students in Need through Education",
      url:
        "https://tianacole.wordpress.com/2023/08/11/empowering-students-in-need-through-education/",
    },
    {
      id: "consistency-models",
      name: "Everett Herald Feature",
      createdAt: "2023-07-03T00:00:00Z",
      description:
        "Heavy interest spurs free tutoring through summer in Everett",
      url:
        "https://www.heraldnet.com/news/heavy-interest-spurs-free-tutoring-through-summer-in-everett/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
