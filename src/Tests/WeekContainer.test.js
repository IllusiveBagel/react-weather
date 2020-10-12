import React from 'react';
import { render } from '@testing-library/react';
import WeekContainer from '../Components/WeekContainer';

test('Renders Title', () => {
    const { getByText } = render(<WeekContainer />);
    const linkElement = getByText(/React Forecast/i);
    expect(linkElement).toBeInTheDocument();
});