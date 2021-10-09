import './shows.scss';

/* eslint-disable-next-line */
export interface ShowsProps {}

export const Shows: React.FC = (props: ShowsProps) => {
  return (
    <div className="shows" id="shows">
      <h1 className="shows__title">Upcoming Shows!</h1>
      <div className="shows__content"></div>
    </div>
  );
};

export default Shows;
