import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import photos from './__mocks__/photos-array.json';
import photo from './__mocks__/photo-object.json';

import PhotoViewer from '../client/src/components/PhotoViewer/PhotoViewer'

afterEach(cleanup);

describe('PhotoViewer component exists', () => {
  it('PhotoGrid component should exist in the document', () => {
    render(<PhotoViewer modalOpen={false} setModalOpen={() => {}} selectedPhoto={photo} setSelectedPhoto={() => {}} photos={photos} />);
    expect(document.querySelector('.viewer')).toBeInTheDocument();
  })

  it('image source should change when provided a different input', () => {
    render(<PhotoViewer modalOpen={false} setModalOpen={() => {}} selectedPhoto={photos[0]} setSelectedPhoto={() => {}} photos={photos} />);

    const sourceOne = document.getElementsByClassName('photo')[0].getAttribute('src');

    cleanup();
    render(<PhotoViewer modalOpen={false} setModalOpen={() => {}} selectedPhoto={photos[1]} setSelectedPhoto={() => {}} photos={photos} />);

    const sourceTwo = document.getElementsByClassName('photo')[0].getAttribute('src');

    expect(sourceOne).toEqual(expect.not.stringContaining(sourceTwo));
  })

  it('description should be displayed', () => {
    render(<PhotoViewer modalOpen={false} setModalOpen={() => {}} selectedPhoto={photo} setSelectedPhoto={() => {}} photos={photos} />);

    const description = screen.getByText('Test description');
    expect(description).toBeInTheDocument();
  })
})