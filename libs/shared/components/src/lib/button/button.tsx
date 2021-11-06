import { CSSProperties } from 'react';
import './button.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  text: string;
  link?: string;
  linkTarget?: string;
  className?: string | string[];
  linkStyle?: CSSProperties;
  buttonStyle?: CSSProperties;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  link,
  linkTarget,
  className,
  linkStyle,
  buttonStyle,
  onClick,
}: ButtonProps) => {
  const innerButton: JSX.Element = (
    <button
      className={`primary-button__button ${
        className instanceof Array ? className.join(' ') : className
      }`}
      style={buttonStyle && buttonStyle}
      onClick={() => onClick && onClick()}
    >
      {text}
    </button>
  );

  return link ? (
    <a
      className="primary-button"
      style={linkStyle && linkStyle}
      href={link}
      target={linkTarget}
      rel="no-referrer"
    >
      {innerButton}
    </a>
  ) : (
    innerButton
  );
};

export default Button;
