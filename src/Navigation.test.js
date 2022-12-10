import React from 'react';
import { render, getByText, screen } from '@testing-library/react';
import Navigation from './Navigation';

it('renders the link to the about page', () => {
    render(<Navigation />);
    const link = screen.getByText(/posts/i);
    expect(link).toBeInTheDocument();
  });