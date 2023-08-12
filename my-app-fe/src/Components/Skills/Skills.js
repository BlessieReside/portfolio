import React from "react";
import { Icon } from "@iconify/react";
import "./index.css";

function Skills() {
  return (
    <>
      <main id="skills" className="skill-section container-fluid">
        <h4 className="mx-auto col-xxl-9 col-xl-9 col-lg-4 col-md-12">
          Skills
        </h4>

        <nav className="bg-success mx-auto col-xxl-9 col-xl-9 col-lg-4 col-md-12">
          <ul class="nav">
            <li class="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#tech-stack">
                Tech Stack
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#tools">
                Tools
              </a>
            </li>
          </ul>
        </nav>

        {/* tech stack */}
        <section id="tech-stack" className="grid-container mx-auto">
          <div className="grid-item bg-success">
            <Icon icon="simple-icons:html5" color="white" height="1.8rem" />
            <span className="skill-info">HTML</span>
          </div>
          <div className="grid-item  bg-danger">
            <Icon icon="simple-icons:css3" color="white" height="1.8rem" />
            <h6 className="skill-info">CSS</h6>
          </div>
          <div className="grid-item  bg-success">
            <Icon icon="simple-icons:css3" color="white" height="1.8rem" />
            <h6 className="skill-info">Bootstrap</h6>
          </div>

          <div className="grid-item bg-success">
            <Icon
              icon="simple-icons:javascript"
              color="white"
              height="1.8rem"
            />
            <h6 className="skill-info">Javascript</h6>
          </div>
          <div className="grid-item bg-danger">
            <Icon icon="simple-icons:php" color="white" height="1.8rem" />
            <h6 className="skill-info">PHP</h6>
          </div>
          <div className="grid-item bg-success">
            <Icon icon="simple-icons:mysql" color="white" height="1.8rem" />
            <h6 className="skill-info">MySQL</h6>
          </div>

          <div className="grid-item bg-success ">
            <Icon icon="simple-icons:nodejs" color="white" height="1.8rem" />
            <h6 className="skill-info">NodeJS</h6>
          </div>
          <div className="grid-item bg-danger">
            <Icon icon="simple-icons:react" color="white" height="1.8rem" />
            <h6 className="skill-info">ReactJS</h6>
          </div>
          <div className="grid-item  bg-success">
            <Icon icon="simple-icons:laravel" color="white" height="1.8rem" />
            <h6 className="skill-info">Laravel</h6>
          </div>

          <div className="grid-item bg-success ">
            <Icon icon="simple-icons:github" color="white" height="1.8rem" />
            <h6 className="sskill-info">Language</h6>
          </div>
          <div className="grid-item bg-danger">
            <Icon icon="simple-icons:github" color="white" height="1.8rem" />
            <h6 className="sskill-info">Language</h6>
          </div>
          <div className="grid-item  bg-success">
            <Icon icon="simple-icons:github" color="white" height="1.8rem" />
            <h6 className="sskill-info">Language</h6>
          </div>
        </section>

        {/* tools*/}
        {/* <article id="tools" className="grid-container bg-warning mx-auto">
          <div className="grid-item bg-success d-flex">
            <Icon icon="simple-icons:git" color="white" height="1.8rem" />
            <h6 className="skill-info">Git</h6>
          </div>
          <div className="grid-item bg-danger">
            <Icon icon="simple-icons:github" color="white" height="1.8rem" />
            <h6 className="skill-info">GitHub</h6>
          </div>
          <div className="grid-item bg-success">
            <Icon icon="simple-icons:npm" color="white" height="1.8rem" />
            <h6 className="skill-info">NPM</h6>
          </div>
          <div className="grid-item bg-success">
            <Icon icon="simple-icons:mysql" color="white" height="1.8rem" />
            <h6 className="skill-info">MySQL</h6>
          </div>
        </article> */}

        <div className="skill-describe"></div>
      </main>
    </>
  );
}

export default Skills;
