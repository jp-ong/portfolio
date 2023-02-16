import styles from "./InfoSection.module.scss";
import Image from "next/image";
import { EnvelopeIcon } from "../icons/EnvelopeIcon";
import { PhoneIcon } from "../icons/PhoneIcon";
import { MapMarkerIcon } from "../icons/MapMarkerIcon";
import Button from "../Button";
import { GitHubIcon } from "../icons/GitHubIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";

const InfoSection = () => {
  return (
    <section id="info">
      <div className={styles.panel}>
        <h1 className={styles.greeting}>
          <small>Hello, I'm</small>
          <span>JOHN PAUL ONG</span>
        </h1>
        <div className={styles.image}>
          <Image
            src="/assets/selfie/mebutsmiling.jpg"
            alt="John Paul Ong"
            fill
          />
        </div>
      </div>
      <div className={styles.panel}>
        <h2>Web Developer</h2>
        <hr />
        <div className={styles.contacts}>
          <div>
            <EnvelopeIcon />
            <span>jpong5202@gmail.com</span>
          </div>
          <div>
            <EnvelopeIcon />
            <span>201801383@iacademy.edu.ph</span>
          </div>
          <div>
            <PhoneIcon />
            <span>639173243289</span>
          </div>
          <div>
            <MapMarkerIcon />
            <span>Manila City, NCR, Philippines</span>
          </div>
        </div>
        <hr />
        <div className={styles.links}>
          <div>
            <Button
              icon={<GitHubIcon />}
              label="GitHub"
              variant="secondary"
              maxWidth
              href="https://github.com/jp-ong"
            />
            <Button
              icon={<LinkedInIcon />}
              label="LinkedIn"
              variant="secondary"
              href="https://www.linkedin.com/in/johnpaulong/"
              maxWidth
            />
          </div>
          <div>
            <Button
              label="Download My Resume"
              variant="primary"
              maxWidth
              href="/assets/Ong_JohnPaul.pdf"
              download
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
