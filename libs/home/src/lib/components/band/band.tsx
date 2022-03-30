/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { HomeSection } from '@stagefright/router';
import { SectionTitle } from '@stagefright/shared/components';
import { bandBio } from '@stagefright/shared/data';
import './band.scss';
import band from '../../../../../../apps/stagefright/src/assets/img/band_hero.png';

/* eslint-disable-next-line */
export interface BandProps {}

export const Band: React.FC = (props: BandProps) => {
  return (
    <div id={HomeSection.band} className="band">
      <SectionTitle text="Band" />
      <div className="band__content">
        <img src={band} alt="StageFright band" />
        <div className="band__content__band-bio">{bandBio}</div>
      </div>
    </div>
  );
};

export default Band;
