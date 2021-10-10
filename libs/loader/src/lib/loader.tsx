import './loader.scss';

/* eslint-disable-next-line */
export interface LoaderProps {}

export const Loader: React.FC = (props: LoaderProps) => {
  return (
    <div className="loader">
      <img
        className="loader__logo"
        src="assets/img/logo_filled.png"
        alt="StageFright Logo"
      />
    </div>
  );
};

export default Loader;
