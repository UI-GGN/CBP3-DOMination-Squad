import Head from './Header';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';

const mocks = vi.hoisted(() => {
  return {
    navigate: vi.fn(),
    signOut: vi.fn(),
  };
});

vi.mock('react-router-dom', async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...mod,
    useNavigate: () => mocks.navigate,
  };
});

vi.mock('react-auth-kit', async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...mod,
    useSignOut: () => mocks.signOut,
  };
});

describe('Head', () => {
  it('should render Head component', () => {
    const { container, getByTestId } = render(<Head />);

    expect(getByTestId('main')).toBeInTheDocument();
    expect(getByTestId('header-close')).toBeInTheDocument();
    expect(getByTestId('profile-title')).toBeInTheDocument();
    expect(getByTestId('nav-option-requests')).toBeInTheDocument();
    expect(getByTestId('logout-button')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should call onHeaderClose when close button is clicked', () => {
    const mockOnHeaderClose = vi.fn();
    const { getByTestId } = render(<Head onHeaderClose={mockOnHeaderClose} />);

    fireEvent.click(getByTestId('header-close'));

    expect(mockOnHeaderClose).toHaveBeenCalledTimes(1);
  });

  it('should call onPress when requests option is clicked', () => {
    const mockOnPress = vi.fn();
    const { getByTestId } = render(<Head selected="REQUESTS" onPress={mockOnPress} />);

    fireEvent.click(getByTestId('nav-option-requests'));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
    expect(mockOnPress).toHaveBeenCalledWith('REQUESTS');
  });

  it('should call navigate when logout button is clicked', () => {
    const { getByTestId } = render(<Head />);

    fireEvent.click(getByTestId('logout-button'));

    expect(mocks.navigate).toHaveBeenCalledTimes(1);
    expect(mocks.navigate).toHaveBeenCalledWith('/login');
  });
});
