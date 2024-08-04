"use-client";
import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../components/ui/3d-card";
import Link from "next/link";

const projects = [
  {
    title: "Yoru Chat",
    description:
      "Implementation of end-to-end encryption (E2EE) for a chat application using the Web Crypto API with the RSA-OAEP algorithm. Built using Reactjs, Nodejs, and Socket.io.",
    imgSrc: "Yoru.png",
    link: "https://github.com/pk-vishnu/yoru-chat",
  },
  {
    title: "BlockFund",
    description:
      "Blockfund uses Polygon to ensure transparency and lets funders have a say in backed organizations, promoting trust, collaboration, and impact.",
    imgSrc:
      "https://github.com/real-vit/BlockFund/blob/main/website/static/images/randomlogo4.png?raw=true",
    link: "https://github.com/real-vit/BlockFund",
  },
  {
    title: "Flowtype",
    description:
      "Flowtype is a streamlined typing speed testing application that enables users to assess and enhance their typing speed and accuracy by typing song lyrics with SpotifyAPI integration.",
    imgSrc: "FlowTypelogo1.png",
    link: "https://github.com/pk-vishnu/flowtype",
  },
];

const otherProjects = [
  {
    name: "AstuteAI",
    description: "Web Development, Generative AI (06/2024 - Present)",
    details: [
      "CMS - Tailored for creating blogs with full Markdown formatting capabilities. Generative AI",
      "Chatbot Server - Manages and serves a vector database from the CMS content dynamically",
    ],
    github: "",
  },
  {
    name: "Athen.ai",
    description: "AIML, Blockchain, Web Development (03/2024)",
    details: [
      "Supporting women entrepreneurs with AI and blockchain tools, - decentralized crowdfunding.",
      "Tech stack: Flask, HTML, Tailwind, MySQL, Polygon (OpenZeppelin Framework), Gemini API.",
    ],
    github: "https://github.com/pk-vishnu/athenai",
  },
  {
    name: "Travalgo",
    description: "Blockchain, Web development (01/2023)",
    details: [
      "Utilizes Algorand Blockchain SDK to convert travel tickets into NFTs, ensuring secure and transferable ownership.",
      "Tech stack: PHP, HTML, CSS, py-algorand-sdk, and MySQL.",
    ],
    github: "https://github.com/pk-vishnu/TravAlgo",
  },
  {
    name: "CareerX",
    description: "AIML, Web Development (10/2023)",
    details: [
      "AI-driven career guidance - combines personality and aptitude assessments, powered by the latest in machine learning.",
    ],
    github: "https://github.com/rsashank/CareerX",
  },
];

export default function Projects() {
  return (
    <>
      <div className="mx-auto px-4 py-2 max-w-screen-lg mt-9 font-poppins">
        <h1 className="text-4xl font-mono text-center text-white ">
          Recent Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <CardContainer
              key={index}
              className="inter-var flex justify-center"
            >
              <CardBody className=" relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-xs h-auto rounded-xl p-6 border border-gray-700">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-300 text-sm max-w-sm mt-2"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={project.imgSrc}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-center items-center mt-4">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.link}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal text-blue-400 hover:text-blue-600"
                  >
                    GitHub →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
      <div className="mt-0 mb-4">
        <div className="mt-0">
          <iframe
            width="600"
            height="350"
            src="https://www.youtube.com/embed/U2AIy8pKtmo?autoplay=1&mute=1&loop=1&playlist=U2AIy8pKtmo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mx-auto"
          ></iframe>
        </div>
      </div>
      <div className="p-6 rounded-lg shadow-md font-poppins">
        <h2 className="text-2xl font-normal mb-4 text-center text-white font-poppins">
          Other Projects
        </h2>
        <div className="space-y-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="p-4 border border-gray-700 rounded shadow-sm bg-gray-900 bg-opacity-20"
            >
              <h3 className="text-xl font-semibold text-white">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-2">{project.description}</p>
              <ul className="list-disc list-inside text-gray-300">
                {project.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
              <a className="text-blue-400 hover:text-blue-600">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
