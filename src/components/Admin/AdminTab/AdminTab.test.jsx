import AdminTab from './AdminTab';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';

describe('Admin Tab', () => {
  it('should render Admin Tab component', () => {
    const { container, getByTestId, queryByTestId } = render(<AdminTab selected="Requests" isHeaderVisible={true} />);

    expect(getByTestId('container')).toBeInTheDocument();
    expect(queryByTestId('hamburger-icon')).not.toBeInTheDocument();
    expect(getByTestId('admin-tab-title')).toBeInTheDocument();
    expect(getByTestId('admin-tab-title')).toHaveTextContent('Requests');
    expect(container).toMatchSnapshot();
  });

  it('should render Admin Tab component with hamburger icon when isHeaderVisible is true', () => {
    const { queryByTestId } = render(<AdminTab selected="Requests" isHeaderVisible={false} />);

    expect(queryByTestId('hamburger-icon')).toBeInTheDocument();
  });

  it('should call onIconPress when the hamburger icon is clicked', () => {
    const mockOnIconPress = vi.fn();
    const { getByTestId } = render(
      <AdminTab selected="Requests" onIconPress={mockOnIconPress} isHeaderVisible={false} />
    );

    fireEvent.click(getByTestId('hamburger-icon'));

    expect(mockOnIconPress).toHaveBeenCalledTimes(1);
  });
});
