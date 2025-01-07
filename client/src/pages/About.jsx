import person1Image from "../assets/newpa.png"; // Import images
import person2Image from "../assets/newpn.png";

export default function About() {
  const teamMembers = [
    {
      title: "Tech Enthusiast",
      name: "Person 1",
      description:
        "Hello! I'm Abhijeet Kamalekar, a dedicated Software Engineer and a B.Tech student in Computer Science and Engineering. I have a solid background in programming and web development, with a keen interest in creating intuitive applications and tackling challenging problems. I thrive on exploring new technologies and turning innovative ideas into reality!",
      buttonLabel: "Check Profile",
      image: person1Image, // Use imported image
      link: "https://abhijeetkamalekar15.github.io/Portfolio/",
    },
    {
      title: "Creative Designer",
      name: "Person 2",
      description:
        "Hi, I'm Nivedita Kumar Londhe, a passionate Software Engineer currently pursuing a B.Tech in Electronics Engineering. With a strong foundation in programming and web development, I enjoy building user-centric applications and solving complex problems. I’m always eager to learn new technologies and bring creative ideas to life!",
      buttonLabel: "Know More",
      image: person2Image, // Use imported image
      link: "https://niveditalondhe.github.io/portfolio/",
    },
  ];
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto p-3 text-center">
        <div>
          <div className="dark:bg-slate-900 dark:text-white bg-white min-h-screen mt-10 py-10">
            {/* About TechShelf Box */}
            <div className="dark:bg-slate-900 dark:text-white max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 mb-16">
              <h1 className="text-3xl font-semibold text-slate-800 mb-8 text-center dark:text-white">
                About <span className="text-pink-500"></span>
              </h1>
              <p className="text-gray-500 text-sm  text-justify dark:text-gray-500">
                <span className="dark:text-white font-semibold text-pink-500"></span>
                Welcome to ByteBlog by Engineering and Coders Network (ECN)! We
                are a passionate community of Computer Science and Engineering
                students united by our love for technology, problem-solving, and
                innovation. At ECN, we believe in the power of collaboration,
                learning, and pushing boundaries to explore the ever-evolving
                tech landscape.
              </p>
              <p className="text-gray-500 text-sm  text-justify mt-4 dark:text-gray-500">
                <span className="font-semibold">What We Do</span> <br />
                <span className="font-semibold underline">
                  Programming:
                </span>{" "}
                <br />
                Dive deep into the world of algorithms, data structures, and
                problem-solving. Whether you’re just starting your programming
                journey or honing your advanced skills, ECN is the perfect place
                to learn, grow, and share knowledge. <br />
                <span className="font-semibold underline">
                  Competitive Programming:{" "}
                </span>
                <br />
                Participate in coding contests, hackathons, and competitions.
                Solve challenging problems, sharpen your skills, and compete
                with like-minded individuals to become a coding maestro. <br />
                <span className="font-semibold underline">
                  Web Development:
                </span>{" "}
                <br />
                From crafting stunning user interfaces to building robust
                backends, we explore the full stack of web technologies. Learn
                HTML, CSS, JavaScript, React, and more, while working on
                real-world projects and gaining hands-on experience. <br />
              </p>
              <p className="text-gray-500 text-sm text-justify mt-4 dark:text-gray-500">
                <span className="font-semibold">Our Vision: </span>
                To empower students to excel in technology and create a
                community that fosters curiosity, creativity, and collaboration.
                Through knowledge-sharing sessions, workshops, and projects, we
                aim to bridge the gap between theoretical learning and practical
                application.
              </p>
            </div>

            {/* Team Section */}
            <div>
              <h2 className="text-3xl font-semibold text-slate-800 text-center mb-10 dark:text-white">
                Our Developers
              </h2>
              <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 px-6 ">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center dark:bg-slate-900 dark:text-white rounded-md dark:border "
                  >
                    <img
                      src={member.image} // Use imported image
                      alt={member.name}
                      className="w-40 h-40 object-cover p-4 "
                    />
                    <div className="p-6 text-center dark:text-white">
                      <h3 className="text-xl bg-gray-400 font-bold text-slate-800 mb-2 ">
                        {member.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 dark:text-white text-justify">
                        {member.description}
                      </p>
                      <a
                        href={member.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="px-6 py-2 btn btn-secondary text-white rounded-lg hover:bg-pink-600">
                          {member.buttonLabel}
                        </button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
