const AboutSection = () => {
  const lines = [
    "I'm a fresh graduate in Information Technology based in Metro Manila, Philippines. I specialize in Web Development and enjoy the challenge in taking on project requirements and complex designs and implementing them into simple and beautiful systems for clients and customers while doing it in the most elegant and efficient way I am capable of for other developers.",
    " I am most confident in my ability to work with JavaScript and its ecosystem, but I am also capable of quickly learning new languages, frameworks, and libraries if necessary.",
    "When I'm not programming, I'll usually be gaming, or occassionally be working out in the gym.",
  ];
  return (
    <section id="about">
      <h1>About Me</h1>
      {lines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </section>
  );
};

export default AboutSection;
