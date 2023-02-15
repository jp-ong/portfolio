import styles from "./Button.module.scss";
import Link from "next/link";

type Props = {
  label: string;
  icon?: React.ReactNode;
  maxWidth?: boolean;
  variant?: "primary" | "secondary";
  href?: string;
  download?: boolean;
};

const Button: React.FC<Props> = ({
  icon,
  label,
  maxWidth,
  variant,
  href,
  download,
}) => {
  const classes = [
    styles.button,
    maxWidth && styles.maxWidth,
    variant && styles[variant],
  ]
    .filter((c) => c)
    .join(" ");
  return href ? (
    <Link
      href={href}
      className={classes}
      download={download}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span>{label}</span>
    </Link>
  ) : (
    <button className={classes}>
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default Button;
