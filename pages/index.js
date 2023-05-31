import { useEffect, useState } from 'react';
import Head from 'next/head'
//import styles from '@/styles/Home.module.css'

export default function home() {
  const [education, setEducation] = useState(null);
  useEffect(() => {
    const getEducation = async () => {
      let res = await fetch('/data/education.json');
      let data = await res.json();
      // let edu = data.data;
      setEducation(data);
    }
    getEducation();
  }, []);

  const [projects, setProjects] = useState(null);
  useEffect(() => {
    const getProjects = async () => {
      let res = await fetch('/data/project.json');
      let data = await res.json();
      setProjects(data);
    }
    getProjects();
  }, []);

  const [skills, setSkills] = useState(null);
  useEffect(() => {
    const getSkills = async () => {
      let res = await fetch('/data/skills.json');
      let data = await res.json();
      setSkills(data);
    }
    getSkills();
  }, []);

  const [experience, setExperience] = useState(null);
  useEffect(() => {
    const getExperience = async () => {
      let res = await fetch('data/experience.json');
      let data = await res.json();
      // let edu = data.data;
      setExperience(data);
    }
    getExperience();
  }, []);


  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <script src="js/script.js"></script>
        {/* Box icons */}
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </Head>

      <main>
        {/* Header Design */}
        <header class="header">
          <img src="./images/Logo.png" alt="Logo" class="logo" />
          <div class="bx bx-menu" id="menu-icon"></div>

          <nav class="navbar">
            <a href="#" class="active">Home</a>
            <a href="#About">About</a>
            <a href="#Education">Education</a>
            <a href="#Skills">Skills</a>
            <a href="#Contact">Contact</a>
          </nav>
        </header>

        {/* Home section Design */}
        <section class="home" id="home">
          <div class="home-content">
            <div class="intro">
              <h1>Hi, I'm <span> Navdeep Kaur</span></h1>
              <div class="text-animate">
                <h3>Web Developer</h3>
              </div>
              <p> I am professional web Developer who can use industry level technology to make websites</p>
              <div class="btn-box">
                <a href="#" class="btn">Hire Me</a>
                {/* <a href="#" class="btn">Let's Talk</a> */}
              </div>
              <div class="home-sci">
                <a href="https://www.instagram.com/navdeepkaur200017/"><i class='bx bxl-instagram'></i></a>
                <a href="https://www.linkedin.com/in/navdeep-kaur-27288a1a1/"><i class='bx bxl-linkedin-square'></i></a>
                <a href="https://twitter.com/Navdeep20380794"><i class='bx bxl-twitter'></i></a>
              </div>
            </div>
            <img alt="" src="images/image.jpg" class="home-img" ></img>
          </div>



        </section>

        {/* about section design  */}
        <section class="About" id="About">
          <h2 class="heading">About <span>Me</span></h2>

          <div class="about-content">
            <div class="about-img">
              <img src="images/main.png" alt="" />
              <span class="circle-spin"></span>
            </div>
            <h3>Web Developer</h3>
            <p> I have done my post graduation in Web Development from Humber College. I have been an enthusiast whenever it came to technology
              and building websites. My goal always has been to work and develop websites and products which can change people's lives with
              that.</p>

            <div class="btn-box btns">
              <a href="#" class="btn">Read More</a>
            </div>
          </div>
        </section>

        {/* <!--education section design--> */}
        <section class="Education" id="Education">
          <h2 class="heading"> My <span>Journey</span></h2>
          <div class="education-row">
            <div class="education-column">
              <h3 class="title">Education</h3>

              <div class="education-box">
                <div class="education-content">
                  {/* <div class="content"> */}
                  <div class="year"><i class='bx bxs-calendar'></i> 2017 -2018 </div>
                  {education && education.map((edu) => (
                    // <li key={edu.id}>
                    <div class="content">
                      <p>{edu.Degree}</p>
                      <p>{edu.Discipline}</p>
                      <p>{edu.Institute}</p>
                      <p>{edu.Location}</p>
                      <p>{edu.Started_at}</p>
                      <p>{edu.Ended_at}</p>
                    </div>
                    // </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}


          {/* Projects Section */}
          <div class="education-column">
            <h3 class="title">Projects</h3>

            <div class="education-box">
              <div class="education-content">
                {/* <div class="content"> */}
                {/* <div class="year"><i class='bx bxs-calendar'></i> {project.date} </div> */}
                <ul >
                  {projects && projects.map((project) => (
                    <div class="content" key={project.id}>
                      <p>{project.date}</p>
                      <h2>{project.Name}</h2>
                      <p>{project.Content}</p>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* </div> */}

          {/* Experience Section */}
          <div class="education-column">
            <h3 class="title">Experience</h3>

            <div class="education-box">
              <div class="education-content">
                {/* <div class="content"> */}
                {/* <div class="year"><i class='bx bxs-calendar'></i> {project.date} </div> */}
                <ul >
                  {experience && experience.map((exp) => (
                    <div class="content" key={exp.id}>
                      <h2>{exp.Company}</h2>
                      <p>Title: {exp.Title}</p>
                      <p>From: {exp.Start}</p>
                      <p>To: {exp.End}</p>
                      <p>Location: {exp.Location}</p>
                      <p>Description: {exp.Description}</p>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* <!--skills sections design--> */}
        <section class="Skills" id="Skills">
          <h2 class="heading">My <span>Skills</span></h2>

          <div class="skills-row">
            <ul className="skills-detail">
              {skills && skills.map((skill) => (
                <li key={skill.id}>
                  <h2>{skill.Name}</h2>
                  <img id="skill-image" src={skill.Image} alt={skill.Name}></img>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* <!--contact section desgin--> */}
        <section class="Contact" id="Contact">
          <h2 class="heading">Contact <span>Me!</span></h2>
          <form action="mailto:navdeepkaur200017@gmail.com" method='post'>
            <div class="input-box">
              <div class="input-field">
                <input name="Fname" type="text" placeholder="Full Name" required />
                <span class="focus"></span>
              </div>
              <div class="input-field">
                <input name="Email" type="text" placeholder="Email Address" required />
                <span class="focus"></span>
              </div>
            </div>
            <div class="input-box">
              <div class="input-field">
                <input name="Phone" type="number" placeholder="Mobile Number" required />
                <span class="focus"></span>
              </div>
              <div class="input-field">
                <input name="Subject" type="text" placeholder="Email Subject" required />
                <span class="focus"></span>
              </div>
            </div>
            <div class="textarea-field">
              <textarea name="Msg" id="msg" cols="30" rows="10" placeholder="Your Message" required></textarea>
              <span class="focus"></span>
            </div>
            <div class="btn-box btns">
              <button type="submit" class="btn">Submit</button>
            </div>
          </form>
        </section>

      </main >
    </>
  )
}
