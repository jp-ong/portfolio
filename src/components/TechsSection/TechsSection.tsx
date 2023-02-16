import Image from "next/image";
import styles from "./TechsSection.module.scss";

const TechsSection = () => {
  const techs = [
    { label: "HTMl5", src: "html5" },
    { label: "CSS3", src: "css3" },
    { label: "JavaScript", src: "javascript" },
    { label: "TypeScript", src: "typescript" },
    { label: "Sass", src: "sass" },
    { label: "NodeJS", src: "nodejs" },
    { label: "ExpressJS", src: "expressjs" },
    { label: "ReactJS", src: "reactjs" },
    { label: "NextJS", src: "nextjs" },
    { label: "ReduxJS", src: "reduxjs" },
    { label: "MongoDB", src: "mongodb" },
    { label: "PostgreSQL", src: "postgresql" },
    { label: "Git", src: "git" },
    { label: "GitHub", src: "github" },
    { label: "Figma", src: "figma" },
  ];
  return (
    <section id="techs">
      <h1>Tech Stack</h1>
      <div className={styles.techs}>
        {techs.map((tech) => (
          <TechBox {...tech} key={tech.src} />
        ))}
      </div>
    </section>
  );
};

type TechBoxProps = {
  label: string;
  src: string;
};

const TechBox: React.FC<TechBoxProps> = ({ label, src }) => {
  return (
    <div className={styles.tech}>
      <div className={styles.icon}>
        <Image src={`/assets/techs/${src}.svg`} alt={label} fill />
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default TechsSection;
