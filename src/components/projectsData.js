import project1 from '../assets/projects/project1.png';


const projectsData = [
  {
    id: 1,
    title: "Optimal Healthcare Platform",
    category: "Front-End Architecture",
    image: project1,
    description: "A modern mobile diagnostics web platform providing structured clinical service catalogs and an automated appointment booking workflow. Built with responsive UI layouts to streamline patient onboarding from service discovery to doorstep lab scheduling.",
    technologies: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Google Apps Script"],
    outcomes: [
      {
        title: "Direct Booking Flow",
        description: "Integrated seamless scheduling replacing manual email/call intake[cite: 8]."
      },
      {
        title: "Responsive Architecture",
        description: "Fully optimized across mobile, tablet, and desktop viewports[cite: 8]."
      }
    ],
    links: {
      liveDemo: "#",
        githubCode: "#"
    }
  }
];



export default projectsData;