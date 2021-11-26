import { render } from '@testing-library/react';

import NoiseBackground from './noise-background';

describe('NoiseBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NoiseBackground />);
    expect(baseElement).toBeTruthy();
  });
});
