function about() {
  return (
    <section className="pt-16 pb-14 text-lg">
      <div className="container">
        {/* about me */}
        <div className="pb-5">
          <h3 className="text-2xl font-bold extra-color-text">About me</h3>
          <p className="text-justify">
            I’m Ahmed, a{" "}
            <span className="font-bold">
              Full Stack MERN (MongoDB, Express, React, Node.js)
            </span>{" "}
            developer with experience in{" "}
            <span className="font-bold">
              React, Next.js, Node.js, and Express.
            </span>
            Currently, I’m studying Nest.js to deepen my backend expertise, and
            I also have experience with{" "}
            <span className="font-bold">WordPress</span> . I’m a third-year
            Electrical Engineering student (Senior 1), specializing in{" "}
            <span className="font-bold">
              Information Technology and Communication Engineering at Suez Canal
              University.
            </span>
          </p>
          <hr className="mt-5" />
        </div>
        {/* Developer Journey */}
        {/* Highlight: "C++," "data structures and algorithms," 
        "10-month MERN stack bootcamp," 
        "websites," "RESTful APIs," and "Next.js." */}
        <div className="pb-5">
          <h3 className="text-2xl font-bold extra-color-text">
            Developer Journey
          </h3>
          <p className="text-justify">
            My journey as a developer started in college with
            <span className="font-bold"> C++</span> and a basic introduction to
            <span className="font-bold"> data structures and algorithms</span>,
            which sparked my interest in programming. To expand my skills, I
            enrolled in a{" "}
            <span className="font-bold">10-month MERN stack bootcamp</span> at
            Route Academy, where I learned to build{" "}
            <span className="font-bold">websites</span> and create{" "}
            <span className="font-bold">RESTful APIs</span>. Along the way, I
            explored WordPress and Next.js, quickly discovering that{" "}
            <span className="font-bold">Next.js </span>
            felt faster and more efficient than React, which led me to focus on
            it for this project.
          </p>
          <hr className="mt-5" />
        </div>
        {/* Current Projects & Future Goals */}
        {/* 
        Highlight: "e-commerce projects," "Q-jects," 
        "judging and team selection," 
        "live chat," and "
        live video capabilities."
        */}
        <div className="pb-5">
          <h3 className="text-2xl font-bold extra-color-text">
            Current Projects & Future Goals
          </h3>
          <p className="text-justify">
            I’ve worked on both frontend and backend{" "}
            <span className="font-bold">e-commerce projects</span>, contributed
            to various WordPress sites, and completed a three-month internship
            where I gained valuable soft skills. Currently, I’m building a
            portfolio website called <span className="font-bold">Q-jects</span>{" "}
            to showcase my skills and projects. My GitHub projects are
            accessible through an icon at the bottom of the page, giving a clear
            look at my work. In the future, I aim to add advanced features to my
            site, including{" "}
            <span className="font-bold">judging and team selection</span>{" "}
            functionalities, as well as{" "}
            <span className="font-bold">live chat</span> and{" "}
            <span className="font-bold">live video</span> capabilities. Creating
            a <span className="font-bold">reusable code section</span> is also
            on my list, allowing me to highlight both my skills and my growth as
            a full-stack developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default about;
