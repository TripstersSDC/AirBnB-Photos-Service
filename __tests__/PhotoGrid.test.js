import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import response from './__mocks__/mock-response.json';

import PhotoGrid from '../client/src/components/PhotoGrid/PhotoGrid'

jest.mock('axios');
afterEach(cleanup);

describe('PhotoGrid component', () => {
  it('should exist in the document', () => {
    axios.get.mockResolvedValue(response)

    render(<PhotoGrid listingId="30506101"/>);
    expect(document.querySelector('.photogrid')).toBeInTheDocument();
  })

  it('"Show All Photos" button should be visible', () => {
    axios.get.mockResolvedValue(response)

    render(<PhotoGrid listingId="30506101"/>);
    expect(screen.getByText('Show All Photos')).toBeInTheDocument();
  })

  it('"Show All Photos" button should open modal', () => {
    axios.get.mockResolvedValue(response)

    render(<PhotoGrid listingId="30506101"/>);
    userEvent.click(screen.getByText('Show All Photos'));
    expect(document.getElementsByClassName('modal')[0]).toHaveClass('modalopen');
  })

  it('photo click should open modal', () => {
    axios.get.mockResolvedValue(response)

    render(<PhotoGrid listingId="30506101"/>);
    const btn = screen.getAllByRole('button')[1];
    userEvent.click(btn);
    expect(document.getElementsByClassName('modal')[0]).toHaveClass('modalopen');
  })

  it('five photo buttons should render', () => {
    axios.get.mockResolvedValue(response)

    render(<PhotoGrid listingId="30506101"/>);
    const count = screen.getAllByRole('button').length;
    expect(count).toBeGreaterThanOrEqual(5);
  })

})