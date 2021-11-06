import { icon, IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSProperties } from 'react';
import './button.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  text: string;
  link?: string;
  icon?: IconProp;
  linkTarget?: string;
  linkClassName?: string | string[];
  buttonClassName?: string | string[];
  linkStyle?: CSSProperties;
  buttonStyle?: CSSProperties;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  link,
  icon,
  linkTarget,
  linkClassName,
  buttonClassName,
  linkStyle,
  buttonStyle,
  onClick,
}: ButtonProps) => {
  const innerButton: JSX.Element = (
    <button
      className={`primary-button__button ${
        buttonClassName
          ? buttonClassName instanceof Array
            ? buttonClassName.join(' ')
            : buttonClassName
          : ''
      }`}
      style={buttonStyle && buttonStyle}
      onClick={() => onClick && onClick()}
    >
      {icon && <FontAwesomeIcon icon={icon} />} <span>{text}</span>
    </button>
  );

  return link ? (
    <a
      className={`primary-button ${
        linkClassName
          ? linkClassName instanceof Array
            ? linkClassName.join(' ')
            : linkClassName
          : ''
      }`}
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
