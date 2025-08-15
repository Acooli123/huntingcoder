// src/app/projects/page.js
'use client';

export default function Projects() {
  const projects = [
    {
      title: 'Blog Platform',
      description:
        'A full-stack blogging application where users can read, write, and share articles. Built with Next.js, MongoDB, and Tailwind CSS.',
      tech: ['Next.js', 'MongoDB', 'Tailwind CSS'],
      link: '#',
    },
    {
      title: 'Code Snippet Manager',
      description:
        'A handy tool to save, organize, and search your favorite code snippets. Features syntax highlighting and quick copy.',
      tech: ['React', 'Node.js', 'Express'],
      link: '#',
    },
    {
      title: 'HuntingCoder API',
      description:
        'A public API providing access to curated coding tutorials, challenges, and project ideas for developers worldwide.',
      tech: ['Node.js', 'Express', 'REST API'],
      link: '#',
    },
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio site to showcase projects, skills, and experience — fully responsive and SEO-optimized.',
      tech: ['Next.js', 'Tailwind CSS'],
      link: '#',
    },
    {
      title: 'AI Code Helper',
      description:
        'An AI-powered tool that suggests code improvements, detects bugs, and generates explanations for beginners.',
      tech: ['OpenAI API', 'React', 'Tailwind CSS'],
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 px-4 sm:px-6 py-12">
      {/* Page Header */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
          HuntingCoder <span className="text-blue-600">Projects</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Explore some of the exciting projects we’ve built to make coding easier, more accessible, and fun for everyone.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-3">
              {project.title}
            </h2>
            <p className="text-gray-700 flex-grow text-sm sm:text-base">{project.description}</p>
            <div className="mt-4">
              <span className="text-xs sm:text-sm font-semibold text-gray-500">
                Tech Stack:
              </span>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              className="mt-6 inline-block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
