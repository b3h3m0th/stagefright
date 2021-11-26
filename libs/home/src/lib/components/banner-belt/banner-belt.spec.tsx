import { render } from '@testing-library/react';

import BannerBelt from './banner-belt';

describe('BannerBelt', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BannerBelt />);
    expect(baseElement).toBeTruthy();
  });
});
