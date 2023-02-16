import Link from "next/link";
import { AddressCardIcon } from "../icons/AddressCardIcon";
import { CodeBranchIcon } from "../icons/CodeBranchIcon";
import { PencilRulerIcon } from "../icons/PencilRulerIcon";
import { UserIcon } from "../icons/UserIcon";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Navlink icon={<AddressCardIcon />} label="Info" href="#info" />
      <Navlink icon={<UserIcon />} label="About" href="#about" />
      <Navlink icon={<PencilRulerIcon />} label="Tech" href="#techs" />
      <Navlink icon={<CodeBranchIcon />} label="Projects" href="#projects" />
    </nav>
  );
};

type NavlinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

const Navlink: React.FC<NavlinkProps> = ({ href, icon, label }) => {
  return (
    <Link className={styles.link} href={href}>
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default Navbar;
