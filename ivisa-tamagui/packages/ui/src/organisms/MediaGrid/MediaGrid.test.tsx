import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import { MediaGrid } from './MediaGrid';
import { MediaItem } from './MediaGrid.props';

const mockItems: MediaItem[] = [
  { id: '1', type: 'image', url: 'img1.jpg', title: 'Image 1' },
  { id: '2', type: 'image', url: 'img2.jpg', title: 'Image 2' },
];

describe('MediaGrid', () => {
  it('renders items correctly', () => {
    render(<MediaGrid items={mockItems} />);
    expect(screen.getByText('Image 1')).toBeTruthy();
    expect(screen.getByText('Image 2')).toBeTruthy();
  });

  it('handles selection', () => {
    const onSelect = jest.fn();
    render(<MediaGrid items={mockItems} onSelect={onSelect} />);

    // We expect the click to happen on the item, which we find by text
    fireEvent.click(screen.getByText('Image 1'));
    expect(onSelect).toHaveBeenCalledWith('1');
  });

  it('renders upload button when onUpload is provided', () => {
      const onUpload = jest.fn();
      render(<MediaGrid items={[]} onUpload={onUpload} />);
      expect(screen.getByText('Upload')).toBeTruthy();
      fireEvent.click(screen.getByText('Upload'));
      expect(onUpload).toHaveBeenCalled();
  });
});

