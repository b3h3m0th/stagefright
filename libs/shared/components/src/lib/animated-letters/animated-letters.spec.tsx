import { render } from '@testing-library/react';

import AnimatedLetters from './animated-letters';

describe('AnimatedLetters', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AnimatedLetters />);
    expect(baseElement).toBeTruthy();
  });
});
