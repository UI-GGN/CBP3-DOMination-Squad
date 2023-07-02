import RequestStatusCard from './RequestStatusCard';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

const props = {
  name: 'Shivansh Garg',
  employeeID: '33067',
  projectCode: '123',
  date: '2023-07-03',
  time: '10:00 AM',
  location: true,
  pickup: 'Home',
  drop: 'Office',
};

describe('Card', () => {
  it('should render RequestStatusCard component', () => {
    const { container, getByText, getByTestId } = render(<RequestStatusCard {...props} />);

    expect(getByTestId('employee-details-section')).toBeDefined();
    expect(getByTestId('location-section')).toBeDefined();

    expect(getByText('Shivansh Garg (33067)')).toBeInTheDocument();
    expect(getByTestId('name-label').textContent).toBe('Name');
    expect(getByTestId('name').textContent).toBe('Shivansh Garg (33067)');

    expect(getByTestId('project-code-label').textContent).toBe('Project Code');
    expect(getByTestId('project-code').textContent).toBe('123');

    expect(getByTestId('date-label').textContent).toBe('Date');
    expect(getByTestId('date').textContent).toBe('2023-07-03');

    expect(getByTestId('pickup-time-label').textContent).toBe('Pickup Time');
    expect(getByTestId('pickup-time').textContent).toBe('10:00 AM');

    expect(getByText('Start Point')).toBeInTheDocument();
    expect(getByTestId('start-point-label')).toHaveTextContent('Start Point');
    expect(getByTestId('pickup-location')).toHaveTextContent('Home');

    expect(getByText('End Point')).toBeInTheDocument();
    expect(getByTestId('end-point-label')).toHaveTextContent('End Point');
    expect(getByTestId('drop-location')).toHaveTextContent('Office');
    expect(container).toMatchSnapshot();
  });

  it('should render RequestStatusCard with custom footer component', () => {
    const updatedProps = {
      ...props,
      footer: () => <div>Custom Footer</div>,
    };

    const { getByText } = render(<RequestStatusCard {...updatedProps} />);

    expect(getByText('Custom Footer')).toBeInTheDocument();
  });

  it('should not render employee detials section with missing name prop', () => {
    const updatedProps = {
      ...props,
      name: null,
    };

    const { queryByTestId } = render(<RequestStatusCard {...updatedProps} />);

    expect(queryByTestId('employee-details-section')).toBeNull();
    expect(queryByTestId('name-label')).toBeNull();
    expect(queryByTestId('name')).toBeNull();
    expect(queryByTestId('project-code-label')).toBeNull();
    expect(queryByTestId('project-code')).toBeNull();
  });

  it('should not render location segment when location prop is false', () => {
    const updatedProps = {
      ...props,
      location: false,
    };

    const { queryByTestId } = render(<RequestStatusCard {...updatedProps} />);

    expect(queryByTestId('location-section')).toBeNull();
    expect(queryByTestId('start-point-label')).toBeNull();
    expect(queryByTestId('pickup-location')).toBeNull();
    expect(queryByTestId('end-point-label')).toBeNull();
    expect(queryByTestId('drop-location')).toBeNull();
  });
});
