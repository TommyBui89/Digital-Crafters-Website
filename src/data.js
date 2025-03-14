import BPMCImages from "./images/BroadmeadowsPlaceMedicalCentre.jpg";
import DTImages from "./images/DTSecurity.jpg";
import IISImages from "./images/IntergratedInsuranceSolutions.png";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skills" },
  { name: "Projects" },
  { name: "Testimonial" },
  { name: "Pricing" },
  { name: "Contact" },
];

export const projects = [
  {
    id: 0,
    title: "DT Security",
    image: DTImages,
    category: "Web",
    data: {
      description: `A professional website for a security solutions business offering security doors, roller shutters, curtains, and windows. 
      The site features a modern design with product galleries, detailed service descriptions, and an integrated contact form for inquiries.`,
      demoLink: "https://dtsecuritydoorsandshutters.com.au/",
    },
  },
  {
    id: 1,
    title: "Broadmeadows Place Medical Clinic",
    image: BPMCImages,
    category: "Web",
    data: {
      description: `A dynamic and user-friendly website for a medical clinic, providing patients with seamless appointment booking, comprehensive service listings, and essential clinic contact information.`,
      demoLink: "https://broadmeadowsplacemc.com.au/",
    },
  },
  {
    id: 2,
    title: "Integrated Insurance Solutions",
    image: IISImages,
    category: "Web",
    data: {
      description: `An intuitive and professional website for an insurance firm, allowing users to explore various insurance plans, get instant quotes, and access expert advice. Designed for a seamless and informative user experience.`,
      demoLink: "https://integratedinsurancesolutions.com.au/",
    },
  },
];
