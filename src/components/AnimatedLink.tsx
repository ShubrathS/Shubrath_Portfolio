import type { AnchorHTMLAttributes } from "react";
import "./styles/AnimatedLink.css";

/*
 * Animated hover links, ported from Skiper UI "Skiper 40" (Link000–Link005)
 * to plain CSS. Variant numbers match the originals:
 *   0 – underline wipes in from the left, out to the right (no arrow)
 *   1 – same wipe, with arrow
 *   2 – underline grows from and retracts to the left, with arrow
 *   3 – underline grows from the center, with arrow
 *   4 – inverted bar rises from the bottom, arrow rotates
 *   5 – inverted fill sweeps in from the left, arrow slides in
 *
 * Original: https://skiper-ui.com by @gurvinder-singh02 (https://gxuri.me).
 * Free version requires attribution to Skiper UI.
 */

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 0 | 1 | 2 | 3 | 4 | 5;
};

const AnimatedLink = ({
  variant = 1,
  className = "",
  children,
  ...props
}: Props) => {
  return (
    <a
      className={`anim-link anim-link-${variant} ${className}`.trim()}
      {...props}
    >
      {children}
      {variant !== 0 && (
        <svg
          className="anim-link-arrow"
          fill="none"
          viewBox="0 0 10 10"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M1.004 9.166 9.337.833m0 0v8.333m0-8.333H1.004"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </a>
  );
};

export default AnimatedLink;
