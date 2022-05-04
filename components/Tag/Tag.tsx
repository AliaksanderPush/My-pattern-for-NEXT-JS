import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({
  size = "m",
  children,
  href,
  color = "red",
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.red]: color === "red",
        [styles.blue]: color === "blue",
        [styles.green]: color === "green",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
