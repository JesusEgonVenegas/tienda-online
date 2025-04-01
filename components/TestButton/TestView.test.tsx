import React from 'react';
import {render, screen, userEvent} from '@testing-library/react-native';
import { TestView } from './TestView';

it('renders correctly', async () => {
  const user = userEvent.setup()
  render(<TestView />);

  const myButton = await screen.findByText('Test Button')
  await user.press(myButton)
  await screen.findByText('New Text')
});