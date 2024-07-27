import classes from "./logo.module.css";

const Logo = ({ variant = "dark" }) => {
  return (
    <a
      href="/"
      className={`${classes["logo"]} ${
        variant === "dark" ? classes["light"] : classes["dark"]
      }`}
    >
      DR. SAROJ <br />
      KUMAR JHA
    </a>
  );
};

export default Logo;
