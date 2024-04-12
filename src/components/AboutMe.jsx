const AboutMe = () => {
  const pClasses = "w-3/4 mx-auto md:text-lg md:w-3/5"
  return (
    <div className="min-h-[calc(100vh)]" id="aboutMe">
      <h1 className="text-4xl w-48 md:w-96 mx-auto text-center sticky top-1 z-40">
        About Me
      </h1>
      <div className="h-screen flex flex-col justify-center">
        <p className={pClasses}>
          Hello! I am a full-stack software engineer with an educational background in
          computer science and a hands-on experience at a full-stack bootcamp.
          <br />
          <br />
        </p>
        <p className={pClasses}>
        I am fully capable and ready to be your full-stack, frontend, or backend software engineer.  
          <br />
          <br />
        </p>
        <p className={pClasses}>
          Beyond my professional life, my hobbies include playing video games,
          watching movies, and bouldering.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
