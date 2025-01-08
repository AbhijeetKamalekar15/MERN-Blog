import person1Image from "../assets/newpa.png"; // Import images
import person2Image from "../assets/newpn.png";
import person3Image from "../assets/Suyog.jpeg";

export default function About() {
  const teamMembers = [
    {
      title: "Abhijeet Kamalekar",
      name: "Person 1",
      description:
        "Hello! I'm Abhijeet Kamalekar, a Software Engineer and B.Tech student in Computer Science. I specialize in backend development and DSA, focusing on building scalable, high-performance applications. I enjoy solving complex problems and continuously improving my coding skills.",
      buttonLabel: "Check Profile",
      image: person1Image, // Use imported image
      link: "https://abhijeetkamalekar15.github.io/Portfolio/",
    },
    {
      title: "Nivedita Londhe",
      name: "Person 2",
      description:
        "Hi, I'm Nivedita Kumar Londhe, a passionate Software Engineer currently pursuing a B.Tech in Electronics Engineering. With a strong foundation in programming and web development, I enjoy building user-centric applications and solving complex problems. I’m always eager to learn new technologies and bring creative ideas to life!",
      buttonLabel: "Know More",
      image: person2Image, // Use imported image
      link: "https://niveditalondhe.github.io/portfolio/",
    },
    {
      title: "Suyog Kamble",
      name: "Person 3",
      description:
        "Hello! I'm Suyog Kamble, a Full-Stack Developer pursuing a B.Tech in Electronics Engineering. I specialize in building scalable applications using technologies like React, Node.js, and MongoDB. I enjoy solving complex problems and creating high-performance applications for seamless user experiences.",
      buttonLabel: "Join me on LinkedIn",
      image: person3Image, // Use imported image
      link: "https://rohitshah.dev/",
    },
  ];
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full mx-auto p-3 text-center">
        <div>
          <div className="dark:bg-slate-900 dark:text-white bg-white min-h-screen mt-10 py-10">
            {/* About TechShelf Box */}
            <div className="dark:bg-gray-900 dark:text-gray-100 w-full mx-auto rounded-lg p-10 mb-16 transition-all duration-300">
              <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center dark:text-gray-100">
                About <span className="text-teal-500">ByteBlog</span>
              </h1>
              <div className="flex md:flex-row w-full justify-center">
                {/* Left Section */}
                {/* <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 w-full md:w-1/4 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300">
                  <p className="text-gray-600 text-sm text-justify dark:text-gray-300">
                    Welcome to{" "}
                    <span className="font-bold text-pink-500">ByteBlog</span> by
                    Engineering and Coders Network (ECN)! We are a passionate
                    community of Computer Science and Engineering students
                    united by our love for technology, problem-solving, and
                    innovation. At ECN, we believe in the power of
                    collaboration, learning, and pushing boundaries to explore
                    the ever-evolving tech landscape.
                  </p>
                </div> */}

                {/* Middle Section */}
                <div className="font-semibold border border-gray-300 dark:border-gray-700 rounded-lg p-6 md:w-2/3 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300">
                  <p className="text-gray-600 text-sm text-justify dark:text-gray-300">
                    Welcome to{" "}
                    <span className="font-bold text-teal-500">ByteBlog</span> by
                    Engineering and Coders Network (ECN)! We are a passionate
                    community of Computer Science and Engineering students
                    united by our love for technology, problem-solving, and
                    innovation. At ECN, we believe in the power of
                    collaboration, learning, and pushing boundaries to explore
                    the ever-evolving tech landscape.
                  </p>
                  <br />
                  <p className="text-gray-600 text-sm text-justify dark:text-gray-300">
                    <div className="bg-gray-200 dark:bg-transparent rounded-md text-2xl text-center font-semibold text-teal-500">
                      What We Do
                    </div>{" "}
                    <br />
                    <span className="font-semibold underline">
                      Programming:
                    </span>{" "}
                    <br />
                    Dive deep into the world of algorithms, data structures, and
                    problem-solving. Whether you’re just starting your
                    programming journey or honing your advanced skills, ECN is
                    the perfect place to learn, grow, and share knowledge.{" "}
                    <br />
                    <span className="font-semibold underline">
                      Competitive Programming:
                    </span>{" "}
                    <br />
                    Participate in coding contests, hackathons, and
                    competitions. Solve challenging problems, sharpen your
                    skills, and compete with like-minded individuals to become a
                    coding maestro. <br />
                    <span className="font-semibold underline">
                      Web Development:
                    </span>{" "}
                    <br />
                    From crafting stunning user interfaces to building robust
                    backends, we explore the full stack of web technologies.
                    Learn HTML, CSS, JavaScript, React, and more, while working
                    on real-world projects and gaining hands-on experience.
                  </p>
                  <br />
                  <p className="text-gray-600 text-sm text-justify dark:text-gray-300">
                    <div className="bg-gray-200 dark:bg-transparent dark:text-teal-500 rounded-md text-2xl text-center font-semibold text-teal-500">
                      Our Vision
                    </div>{" "}
                    To empower students to excel in technology and create a
                    community that fosters curiosity, creativity, and
                    collaboration. Through knowledge-sharing sessions,
                    workshops, and projects, we aim to bridge the gap between
                    theoretical learning and practical application.
                  </p>
                </div>

                {/* Right Section */}
                {/* <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 w-full md:w-1/4 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300">
                  <p className="text-gray-600 text-sm text-justify dark:text-gray-300">
                    <span className="font-semibold text-pink-600">
                      Our Vision:
                    </span>{" "}
                    <br />
                    To empower students to excel in technology and create a
                    community that fosters curiosity, creativity, and
                    collaboration. Through knowledge-sharing sessions,
                    workshops, and projects, we aim to bridge the gap between
                    theoretical learning and practical application.
                  </p>
                </div> */}
              </div>
            </div>

            {/* Team Section */}
            <div className="dark:bg-gray-900 dark:text-gray-100 py-12 flex justify-center items-center">
              <div className="max-w-6xl w-full grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Developer Image */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-40 h-40 rounded-full object-cover mt-6 shadow-md"
                    />
                    {/* Developer Info */}
                    <div className="p-6 text-center">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 dark:text-gray-100">
                        {member.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 dark:text-gray-300 text-justify">
                        {member.description}
                      </p>
                      <a
                        href={member.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="px-6 py-2 text-white rounded-lg transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
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
