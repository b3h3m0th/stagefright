import { render } from '@testing-library/react';

import ShowsMarquee from './shows-marquee';

describe('ShowsMarquee', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShowsMarquee />);
    expect(baseElement).toBeTruthy();
  });
});
