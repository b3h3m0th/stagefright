import { render } from '@testing-library/react';

import SkewScrollingWrapper from './skew-scrolling-wrapper';

describe('SkewScrollingWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkewScrollingWrapper />);
    expect(baseElement).toBeTruthy();
  });
});
