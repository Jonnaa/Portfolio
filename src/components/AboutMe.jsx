const AboutMe = () => {
  const pClasses = "w-3/4 max-w-[700px] mx-auto md:text-lg md:w-3/5";
  const iconClasses = "basis-1/5 flex flex-col justify-between";
  return (
    <div className="min-h-[calc(100vh)]" id="aboutMe">
      <h1 className="text-4xl w-48 md:w-96 mx-auto text-center sticky top-1 z-40">
        About Me
      </h1>
      <div className="h-screen flex flex-col justify-center gap-10">
        <div>
          <p className={pClasses}>
            Hello! I am a full-stack software engineer with an educational
            background in computer science and a hands-on experience at a
            full-stack bootcamp.
            <br />
            <br />
          </p>
          <p className={pClasses}>
            I am fully capable and ready to be your full-stack, frontend, or
            backend software engineer.
            <br />
            <br />
          </p>
          <p className={pClasses}>
            Beyond my professional life, my hobbies include playing video games,
            watching movies, and bouldering.
          </p>
        </div>
        <div className="w-4/5 max-w-[800px] h-1 rounded-lg mx-auto bg-slate-600"></div>
        <div>
          <h2 className="text-center text-2xl underline decoration-slate-600">
            Skills
          </h2>
          <div className="w-3/4 max-w-[600px] mx-auto text-center flex flex-wrap gap-y-10">
            <div className={iconClasses}>
              <img
                src="skillsIcons/react.svg"
                alt=""
                className="w-4/5 m-auto"
                title="React"
              />
              <p className="iconP">React</p>
            </div>
            <div className={iconClasses}>
              <img
                src="skillsIcons/python-removebg-preview.png"
                alt=""
                className="w-4/5 m-auto"
              />
              <p className="iconP">Python</p>
            </div>
            <div className={iconClasses}>
              <img src="skillsIcons/js.png" alt="" className="w-4/5 m-auto" />
              <p className="iconP">JavaScript</p>
            </div>
            <div className={iconClasses}>
              <img src="skillsIcons/html.png" alt="" className="w-4/5 m-auto" />
              <p className="iconP">HTML</p>
            </div>
            <div className={iconClasses}>
              <img
                src="skillsIcons/css-removebg-preview.png"
                alt=""
                className="w-4/5 m-auto"
              />
              <p className="iconP">CSS</p>
            </div>
            <div className={iconClasses}>
              <img
                src="skillsIcons/tailwind.png"
                alt=""
                className="w-4/5 m-auto"
              />
              <p className="iconP">Tailwind</p>
            </div>
            <div className={iconClasses}>
              <img
                src="skillsIcons/nodejs.png"
                alt=""
                className="w-4/5 m-auto"
              />
              <p className="iconP">NodeJS</p>
            </div>
            <div className={iconClasses}>
              <img src="skillsIcons/ejs.png" alt="" className="w-4/5 m-auto" />
              <p className="iconP">ExpressJS</p>
            </div>
            <div className={iconClasses}>
              <img src="skillsIcons/mdb.svg" alt="" className="w-4/5 m-auto" />
              <p className="iconP">MongoDB</p>
            </div>
            <div className={iconClasses}>
              <img src="skillsIcons/psql.png" alt="" className="w-4/5 m-auto" />
              <p className="iconP">PostgreSQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
