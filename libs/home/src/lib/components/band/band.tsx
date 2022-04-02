/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { HomeSection } from '@stagefright/router';
import { SectionTitle } from '@stagefright/shared/components';
import { bandBio } from '@stagefright/shared/data';
import './band.scss';
import band from '../../../../../../apps/stagefright/src/assets/img/band_hero.png';
import { useEffect } from 'react';
import { animationData, loading } from '@stagefright/shared/config';
import gsap from 'gsap';

/* eslint-disable-next-line */
export interface BandProps {}

export const Band: React.FC = (props: BandProps) => {
  useEffect(() => {
    gsap.from('.band__content__band-bio', {
      opacity: 0,
      duration: animationData.shows.duration / 1000,
      scrollTrigger: {
        trigger: '.band__content__band-bio',
        toggleActions: 'play none none none',
        start: 'top 90%',
      },
    });
  });

  return (
    <div id={HomeSection.band} className="band">
      <SectionTitle text="Band" />
      <div className="band__content">
        {/* <img src={band} alt="StageFright band" /> */}
        <div className="band__content__band-bio">{bandBio}</div>
      </div>
    </div>
  );
};

export default Band;
