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
      title: 'DT Security',
      image: DTImages,
      category: "Web",
      data: {
         description: `A website for a business selling and installing security doors, roller shutters, curtains, and windows. Features include product galleries, contact forms, and service descriptions.`,
         demoLink: "https://dtsecuritydoorsandshutters.com.au/",
      },
    },
    {
      id: 1,
      title: 'Broadmeadows Place Medical Clinic',
      image: BPMCImages,
      category: "Web",
      data: {
        description: `A user-friendly website for a medical clinic. Built with WordPress, it includes appointment booking, service listings, and contact information.`,
        demoLink: "https://broadmeadowsplacemc.com.au/",
      },
    },
    {
      id: 2,
      title: 'Integrated Insurance Solutions',
      image: IISImages,
      category: "Web",
      data: {
        description: `A website showcasing insurance options for users and businesses, with interactive features for exploring plans and getting quotes.`,
        demoLink: "https://integratedinsurancesolutions.com.au/",
      },
    },
    {
      id: 3,
      title: 'DKonnect Accessories',
      image: 'https://cdn.dribbble.com/userupload/8002230/file/original-c8eec16edea4d5c836b2bfabe7fbaa5a.jpg',
      category: "Web",
      data: {
        description: `Enhance your online shopping experience with our E-Commerce Application 
        UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
        interface offers easy navigation, personalized recommendations, and secure 
        transactions. Elevate your digital storefront and captivate customers with a visually 
        stunning design tailored to your brand.`,
        demoLink: "https://google.com/",
      },
    },
];