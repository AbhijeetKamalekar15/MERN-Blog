import person1Image from "../assets/newpa.png";
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
      image: person1Image,
      link: "https://abhijeetkamalekar15.github.io/Portfolio/",
    },
    {
      title: "Nivedita Londhe",
      name: "Person 2",
      description:
        "Hi, I'm Nivedita Kumar Londhe, a passionate Software Engineer currently pursuing a B.Tech in Electronics Engineering. With a strong foundation in programming and web development, I enjoy building user-centric applications and solving complex problems. I’m always eager to learn new technologies and bring creative ideas to life!",
      buttonLabel: "Know More",
      image: person2Image,
      link: "https://niveditalondhe.github.io/portfolio/",
    },
    {
      title: "Suyog Kamble",
      name: "Person 3",
      description:
        "Hello! I'm Suyog Kamble, a Full-Stack Developer pursuing a B.Tech in Electronics Engineering. I specialize in building scalable applications using technologies like React, Node.js, and MongoDB. I enjoy solving complex problems and creating high-performance applications for seamless user experiences.",
      buttonLabel: "Join me on LinkedIn",
      image: person3Image,
      link: "https://rohitshah.dev/",
    },
  ];

  return (
    <div className="mt-14 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-16">
        {/* About Section */}
        <section className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            About <span className="text-teal-500">ByteBlog</span>
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            Welcome to <span className="font-bold text-teal-500">ByteBlog</span> by
            Engineering and Coders Network (ECN)! We are a passionate community of
            Computer Science and Engineering students united by our love for
            technology, problem-solving, and innovation.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Programming
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Dive deep into algorithms, data structures, and problem-solving.
                Whether you're starting your journey or honing advanced skills,
                ECN is the place to learn, grow, and share knowledge.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Competitive Programming
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Participate in coding contests, hackathons, and competitions.
                Solve challenging problems and sharpen your skills.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Web Development
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Explore full-stack development. Learn HTML, CSS, JavaScript,
                React, and more by working on real-world projects.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10 text-center">
            Meet Our <span className="text-teal-500">Developers</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full object-cover mt-6 shadow-md mx-auto"

                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                    {member.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {member.description}
                  </p>
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 text-white rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  >
                    {member.buttonLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
