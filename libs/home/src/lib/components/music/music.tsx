import './music.scss';

/* eslint-disable-next-line */
export interface MusicProps {}

export const Music: React.FC<MusicProps> = (props: MusicProps) => {
  return (
    <div className="music" id="music">
      <h2 className="music__title">Music</h2>
      <div className="music__content">
        <p className="music__content__announcement">
          Debut Album{' '}
          <span className="music__content__announcement__album-title">
            "Wanted"
          </span>{' '}
          Coming Soon!
        </p>
      </div>
    </div>
  );
};

export default Music;
