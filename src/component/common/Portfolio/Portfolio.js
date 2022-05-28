import {
  faCode,
  faGraduationCap,
  faLink,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import linkedin from "../../../Assets/linkedin-brands.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MyPicture from "../../../Assets/passport-size .jpg";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <div className="grid gap-5 items-start lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
        <div class="avatar">
          <div class="rounded">
            <img src={MyPicture} alt="Developer Rayhan" className="w-6/12" />
          </div>
        </div>
        <div className="">
          <div className="card bg-primary text-primary-content sm:mt-5">
            <div class="card-body">
              <h2 class="card-title text-4xl">I'm Nur Mohammad Rayhan</h2>
              <h2 class="card-title text-2xl font-bold">
                Passionate Web Developer
              </h2>
              <p className="text-xl">
                I complete my graduation in daffodil international university,
                Bachelor of Software Engineering Major in Robotics
              </p>
              <p className="text-xl">
                I love to programming. in my own desire i learn HTML, CSS,
                Javascript, Bootstrap, Tailwind CSS, React JS, Node JS, Express
                JS and MongoDB
              </p>
              <p className="text-xl">
                I'm a passionate Web developer. in my university carrier i'm
                focus of this web development sector. I'm tech enthusiast and
                love to take new challenge in daily life also love every new
                technology taking to easily for increase my Professional Carrier
                Development.
              </p>

              <p className="text-xl">
                I believe if any chance come to me prove this sector i'm the
                best, i will do my best for achieve this insallah
              </p>
              <div className="grid gap-2 lg:grid-cols-9 md:grid-cols-4 sm:grid-cols-3">
                <label className="badge bg-success text-black">HTML</label>
                <label className="badge bg-info text-black">CSS</label>
                <label className="badge bg-primary text-black">Bootstrap</label>
                <label className="badge bg-blue-500 text-black">Tailwind</label>
                <label className="badge bg-warning text-white">
                  Javascript
                </label>
                <label className="badge bg-primary text-black">ReactJS</label>
                <label className="badge bg-accent text-white">NodeJS</label>
                <label className="badge bg-success text-black">Expressjs</label>
                <label className="badge bg-warning text-white">Github</label>
                <label className="badge bg-blend-darken text-white">
                  MongoDB
                </label>
                <label className="badge ">Firebase</label>
                <label className="badge bg-red-400 text-black">Heroku</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div>
        <div className="mt-5">
          <h1 className="text-4xl font-mono my-10 text-primary font-bold">
            Education Background
          </h1>
        </div>
        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center items-center">
          <div>
            <ul>
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-primary text-2xl"
              />
              <li className="text-2xl">BSc in Software Engineering</li>
              <p className="text-xl">Major in Robotics and Embedded System</p>
              <p className="text-xl">Daffodil International University</p>
              <p className="text-xl">Passing Year 2022</p>
            </ul>
          </div>
          <div>
            <ul>
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-primary text-2xl"
              />
              <li className="text-2xl">Higher Secondary Certificate(HSC)</li>
              <p className="text-xl">
                Board of Intermediate and Secondary Education, Cumilla.
              </p>
              <p className="text-xl">Ibn Taimiya School & Collage, Cumilla</p>
              <p className="text-xl">Science Group</p>
              <p className="text-xl">Passing Year 2017</p>
            </ul>
          </div>
          <div>
            <ul>
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-primary text-2xl"
              />
              <li className="text-2xl">Dakhil examination</li>
              <p className="text-xl">Bangladesh Madrasah Education Board</p>
              <p className="text-xl">Feni Kamil Madrasah, Feni</p>
              <p className="text-xl">Science Group</p>
              <p className="text-xl">Passing Year 2015</p>
            </ul>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div>
        <div className="mt-5">
          <h1 className="text-4xl font-mono my-10 text-primary font-bold">
            Contact Me
          </h1>
        </div>
        <div className="grid gap-5 grid-cols-1 justify-start items-center">
          <span>
            <FontAwesomeIcon
              icon={faMailBulk}
              className="text-primary text-2xl"
            />
            <a className="btn btn-link" href="mailto:nrayhan6271@gmail.com">
              Email
            </a>
          </span>
          <span>
            <FontAwesomeIcon icon={faPhone} className="text-primary text-2xl" />
            <a className="btn btn-link" href="tel:01789486271">
              Contact Number
            </a>
          </span>
          <span>
            <FontAwesomeIcon icon={faLink} className="text-primary text-2xl" />
            <a
              className="btn btn-link"
              href="https://www.linkedin.com/in/nur-mohammad-rayhan-71a530160/"
            >
              Linkedin
            </a>
          </span>
          <span>
            <FontAwesomeIcon icon={faCode} className="text-primary text-2xl" />
            <a className="btn btn-link" href="https://github.com/NMRayhan">
              Github
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
