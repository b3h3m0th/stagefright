import { render } from '@testing-library/react';

import Band from './band';

describe('Band', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Band />);
    expect(baseElement).toBeTruthy();
  });
});
