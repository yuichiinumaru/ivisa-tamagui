import type { Meta, StoryObj } from '@storybook/react';
import { MediaGrid } from './MediaGrid';
import { MediaItem } from './MediaGrid.props';

const meta: Meta<typeof MediaGrid> = {
  title: 'Organismos/MediaGrid',
  component: MediaGrid,
  tags: ['autodocs'],
  argTypes: {
    onSelect: { action: 'selected' },
    onDelete: { action: 'deleted' },
    onUpload: { action: 'uploaded' },
  },
};

export default meta;
type Story = StoryObj<typeof MediaGrid>;

const mockItems: MediaItem[] = Array.from({ length: 10 }).map((_, i) => ({
  id: String(i),
  type: i % 3 === 0 ? 'video' : 'image',
  url: `https://picsum.photos/seed/${i}/200/200`,
  title: `Media Asset ${i + 1}`,
  description: `Description for asset ${i + 1}`,
  size: 1024 * 1024 * (i + 1),
  createdAt: new Date().toISOString(),
}));

export const Padrao: Story = {
  args: {
    items: mockItems,
    viewMode: 'grid',
  },
};

export const List: Story = {
  args: {
    items: mockItems,
    viewMode: 'list',
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};

export const Carregando: Story = {
  args: {
    items: [],
    isLoading: true,
  },
};
