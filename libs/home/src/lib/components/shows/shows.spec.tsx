import { render } from '@testing-library/react';

import Shows from './shows';

describe('Shows', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Shows />);
    expect(baseElement).toBeTruthy();
  });
});
