import './contact.scss';
import { contact } from '@stagefright/shared/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

/* eslint-disable-next-line */
export interface ContactProps {}

export const Contact: React.FC = (props: ContactProps) => {
  return (
    <div className="contact" id="contact">
      <h2 className="contact__title">Contact</h2>
      <div className="contact__content">
        <div className="contact__content__email">
          <FontAwesomeIcon icon={faEnvelope} />
          <a
            href={`mailto:${contact.email}`}
            className="contact__content__email__email"
          >
            {contact.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
