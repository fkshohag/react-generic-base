import React from 'react';
import { render, screen } from '@testing-library/react';
import '../../../layout/SideBar/node_modules/@testing-library/jest-dom/extend-expect';
import Box from './Box';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<Box name=''/>);
    
    const box = screen.getByTestId('Box');

    expect(box).toBeInTheDocument();
  });
});