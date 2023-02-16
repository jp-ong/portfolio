import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectsSection.module.scss";

const ProjectsSection = () => {
  const projects = [
    {
      repo: "iflexhibit",
      title: "iFlexhibit",
      description: [
        "iFlexhibit is a content-sharing platform made for students of iACADEMY. In this platform, members can share their talents by uploading their artwork either as an image or as a video. The platform also allows social media interactions such as commenting and liking an artwork.",
        "This was built as a thesis project alongside two other members and is using NextJS to leverage a hybrid of client-side and server-side rendering, ReduxJS for its state management, and is connected to 'iFlexhibit API' for its backend functionalities.",
      ],
    },
    {
      repo: "iflexhibit-api",
      title: "iFlexhibit API",
      description: [
        "iFlexhibit API is a system built alongside the platform 'iFlexhibit' primarily for its backend functionalities. It was later then attached with a dashboard on the frontend for administrator and moderator activities such as approving or rejecting submitted posts and comments, responding to reported users or contents, and generating system logging.",
        "Built with NodeJS, ExpressJS, ReactJS, PostgreSQL + MongoDB, it includes implementations of REST API, Google OAuth 2.0 for user authentication, encryption of credentials, CRUD operations, and practice of using proper HTTP response codes.",
      ],
    },
    {
      repo: "c19statistics",
      title: "C19Statistics",
      description: [
        "C19Statistics displays COVID-19 statistics provided by JHU COVID19 MongoDB Atlas and allows users to view statistics globally or locally.",
        "This was my first hobby project built while learning NextJS, leveraging its server-side rendering capabilities, and MaterialUI for theming.",
      ],
    },
    {
      repo: "override-syntax",
      title: "Override Syntax Storefront",
      description: [
        "Override Syntax is an mock e-commerce storefront built as an academic project which includes creating a user account and ordering fictitious items.",
        "While it does not include a Payment System, it was built using the MERN stack (Mongoose, Express, React + Redux, Node) and it is integrated with 3 other systems — Syntax Inventory System, Syntax API Server, and an Order Management System built by my groupmate.",
      ],
    },
    {
      repo: "syntax-inventory",
      title: "Syntax Inventory System",
      description: [
        "A simple inventory and content management system that uses plain HTML5, CSS3, and JavaScript built as an academic project. This system serves exclusively as a subsystem to my mock e-commerce 'Override Syntax Storefront' system. This system enables an administrator of said mock e-commerce to modify a fictitious inventory, including its stocks, prices, and information.",
      ],
    },
    {
      repo: "syntax-api-server",
      title: "Syntax API Server",
      description: [
        "Syntax API Server is a system built as an academic project that is meant to be a Headless API for my other systems such as 'Override Syntax Storefront' and 'Syntax Inventory System' to connect to.",
        "It is built with NodeJS and ExpressJS, and MongoDB for its database. It includes implementations of REST API, token-based authentication, encryption of credentials, CRUD operations, and practice of using proper HTTP response codes.",
      ],
    },
    {
      repo: "covid-stats-global",
      title: "COVID-19 Statistics Global",
      description: [
        "This website displays COVID-19 statistics provided by JHU COVID19 MongoDB Atlas and allows users to view statistics globally or locally.",
        "This was one of my first hobby projects built while learning the MERN stack — MongoDB, ExpressJS, ReactJS + ReduxJS, and NodeJS.",
      ],
    },
  ];
  return (
    <section id="projects">
      <h1>Projects</h1>
      {projects.map((project, i) => (
        <Project {...project} key={project.repo} id={i + 1} />
      ))}
    </section>
  );
};

type ProjectProps = {
  repo: string;
  title: string;
  description: string[];
  id: number;
};

const Project: React.FC<ProjectProps> = ({ id, repo, title, description }) => {
  return (
    <div className={styles.project}>
      <Link
        className={styles.preview}
        target="_blank"
        href={`/assets/projects/${repo}.jpg`}
      >
        <Image src={`/assets/projects/${repo}.jpg`} alt={title} fill />
      </Link>
      <div className={styles.info}>
        <div className={styles.title}>
          <span>{id}.</span>
          <Link href={`https://github.com/jp-ong/${repo}`} target="_blank">
            {title}
          </Link>
        </div>
        {description.map((d, i) => (
          <p className={styles.description} key={i}>
            {d}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
