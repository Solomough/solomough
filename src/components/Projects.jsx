import React from "react";
import { motion } from "framer-motion";
import { Code, Layers, Rocket, Users } from "lucide-react";

const projects = [
  {
    title: "The Ark Academy",
    description:
      "A modern school management system designed for excellence in education, tracking student performance, staff dashboards, parent access, and donations.",
    icon: <Layers className="w-10 h-10 text-indigo-400" />,
  },
  {
    title: "SEEPAF",
    description:
      "Strategic Establishment Empowerment Partnership Aid Forum — a Web3-powered donations and empowerment platform for global partnerships.",
    icon: <Rocket className="w-10 h-10 text-pink-400" />,
  },
  {
    title: "The Ark — Christ Riches in Glory",
    description:
      "A discipleship and accountability platform to keep believers growing in Kingdom realities and walking in divine purpose.",
    icon: <Users className="w-10 h-10 text-green-400" />,
  },
  {
    title: "Creative AI Tools",
    description:
      "AI-powered tools for learning, teaching, content creation, and innovation — helping people acquire skills with speed and excellence.",
    icon: <Code className="w-10 h-10 text-yellow-400" />,
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-800 text-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{project.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
