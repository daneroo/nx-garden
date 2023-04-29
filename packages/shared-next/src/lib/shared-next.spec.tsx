import { render } from '@testing-library/react';

import SharedNext from './shared-next';

describe('SharedNext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedNext />);
    expect(baseElement).toBeTruthy();
  });
});
