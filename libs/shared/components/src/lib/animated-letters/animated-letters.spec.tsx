import { render } from '@testing-library/react';

import AnimatedLetters from './animated-letters';

describe('AnimatedLetters', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AnimatedLetters text="test" />);
    expect(baseElement).toBeTruthy();
  });
});
