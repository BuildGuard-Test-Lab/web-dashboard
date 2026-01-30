import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the dashboard heading', () => {
    render(<App />);
    expect(screen.getByText('Dashboard')).toBeDefined();
  });

  it('renders stat cards', () => {
    render(<App />);
    expect(screen.getByText('Total Users')).toBeDefined();
    expect(screen.getByText('Revenue')).toBeDefined();
    expect(screen.getByText('Active Orders')).toBeDefined();
  });
});
