import './home.scss';

/* eslint-disable-next-line */
export interface HomeProps {}

export const Home = (props: HomeProps) => {
  return (
    <div className="home">
      <div className="home__hero"></div>
      <div className="home__music"></div>
    </div>
  );
};

export default Home;
