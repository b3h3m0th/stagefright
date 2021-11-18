import { render } from '@testing-library/react';

import SkewScrollingWrapper from './skew-scrolling-wrapper';

describe('SkewScrollingWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SkewScrollingWrapper>test</SkewScrollingWrapper>
    );
    expect(baseElement).toBeTruthy();
  });
});
