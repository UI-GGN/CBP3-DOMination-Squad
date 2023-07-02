import Card from './Card';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('Card', () => {
  it('should render Card component', () => {
    const { container } = render(<Card />);

    expect(container).toMatchSnapshot();
  });
});
