import { render } from '@testing-library/react';

import Music from './music';

describe('Music', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Music />);
    expect(baseElement).toBeTruthy();
  });
});
