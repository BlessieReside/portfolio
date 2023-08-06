import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./index.css";

function Header(props) {
  return (
    <>
      <header className="col-12">
        <nav className="navbar navbar-expand-md fixed-top">
          <div id="home" className="container-fluid">
            <a className="navbar-brand fw-bolder ms-5" href="#home">
              Blessie Reside
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <i className="fa-solid fa-bars"></i>
            </button>
            {/* d-flex flex-row-reverse bd-highlight */}
            <nav
              className="collapse navbar-collapse d-flex flex-row-reverse bd-highlight"
              id="navbarSupportedContent">
              <ul className="navbar-nav me-auto">
                <li className="nav-item ">
                  <a
                    className="nav-link active mt-1 "
                    aria-current="page"
                    href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mt-1" href="#skills">
                    Tech Stack
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mt-1" href="#section_projects">
                    Projects
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </nav>

        <section className="side container-fluid">
          <div className="row">
            <section className="left-side col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 d-flex">
              <aside>
                <ul className="d-inline-flex flex-column justify-content-xl-between">
                  <li>
                    <a href="https://www.frontendmentor.io">
                      <Icon
                        icon="simple-icons:frontendmentor"
                        color="white"
                        height="2em"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com">
                      <Icon
                        icon="simple-icons:facebook"
                        color="white"
                        height="2em"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://gmail.com">
                      <Icon
                        icon="simple-icons:gmail"
                        color="white"
                        height="2em"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com">
                      <Icon
                        icon="simple-icons:github"
                        color="white"
                        height="2em"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://vercel.com">
                      <Icon
                        icon="simple-icons:vercel"
                        color="white"
                        height="2.2em"
                      />
                    </a>
                  </li>
                </ul>
              </aside>

              <div>
                <article>
                  <h2 className="text-white fw-bolder text-center mt-5">
                    Hi, I'm BLESSIE RESIDE
                  </h2>
                  <h4 className="text-light text-center">
                    a <span>Student</span> and a<span> Website Developer</span>
                  </h4>
                </article>

                <article>
                  <p className="text-white fs-5">
                    Blessie Reside is a young professional and a front-end
                    developer with a degree of Bachelor in Science in
                    Information Technology from First Asia Institute of
                    Technology and Humanites (FAITH Colleges). She is solution
                    oriented professional skilled in several programming
                    languages, including C/C++, HTML, CSS, Bootstrap and many
                    more. Blessie spends her free time in learning and exporing
                    codes to widen her knowledge in programming. She also like
                    to read some law stuff, philosophy, and watches korean drama
                    and movies.
                  </p>
                </article>
              </div>
            </section>

            <aside className="right-hero col-xxl-5 col-xl-5 col-lg-5  d-lg-block d-none">
              <img src={require("../../assets/Blessie.png")} alt="Dinosaur" />
            </aside>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
