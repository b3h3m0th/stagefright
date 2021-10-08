import './home.module.scss';

/* eslint-disable-next-line */
export interface HomeProps {}

export const Home = (props: HomeProps) => {
  return (
    <div>
      <h1>StageFright</h1>
      <img src="assets/img/logo.png" alt="StageFright logo" />
    </div>
  );
};

export default Home;
