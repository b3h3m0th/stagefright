import { render } from '@testing-library/react';

import Socials from './socials';

describe('Socials', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Socials />);
    expect(baseElement).toBeTruthy();
  });
});
