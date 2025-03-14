import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Projects.css";
import { projects } from "../../data";
import Card from "./Card";

const tabs = [
  { name: "All" },
  { name: "Web" },
  { name: "Apps" },
];

const Projects = () => {
  const [displayableProjects, setDisplayableProjects] = useState(projects);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsEls = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: "0px", width: "0px" });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  useEffect(() => {
    setDisplayableProjects(projects);
  }, []);

  useEffect(() => {
    if (itemsEls.current[activeIndex]) {
      const element = itemsEls.current[activeIndex];
      setIndicatorStyle({ left: `${element.offsetLeft}px`, width: `${element.offsetWidth}px` });
    }
  }, [activeIndex]);

  const setProjects = (category) => {
    if (category === "All") {
      setDisplayableProjects(projects);
    } else {
      const filteredProjects = projects.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      setDisplayableProjects(filteredProjects);
    }
  };

  return (
    <motion.section 
      id="projects" 
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }} 
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="section__wrapper projects__container">
        <div className="section__header center">
          <h1 className="primary__title">Projects</h1>
        </div>
        
        {/* Navigation Tabs */}
        <nav className="projects-nav">
          {tabs.map((tab, index) => (
            <button
              key={index}
              ref={(el) => (itemsEls.current[index] = el)}
              onClick={() => {
                setActiveIndex(index);
                setProjects(tab.name);
              }}
              className={activeIndex === index ? "active" : ""}
            >
              {tab.name}
            </button>
          ))}
          <motion.span className="active__indicator" animate={indicatorStyle} />
        </nav>

        {/* Project Cards Animation */}
        <motion.div
          key={activeIndex}
          className="card__container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {displayableProjects.length > 0 ? (
            displayableProjects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                image={project.image}
                text={project.data.description}
                demoLink={project.data.demoLink}
              />
            ))
          ) : null}
        </motion.div>

        {displayableProjects.length === 0 && (
          <motion.div
            className="no-projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Stay tuned for upcoming projects in this category!
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;
