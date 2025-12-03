// @vitest-environment jsdom
import React from 'react';
import { render, screen } from '../../../vitest.setup';
import { RichText } from './RichText';
import { vi } from 'vitest';

const tiptapMocks = {
    onUpdate: null,
    editor: {
        getHTML: () => '<p>Updated content</p>',
    },
};

vi.mock('@tiptap/react', async (importOriginal) => {
    const actual = await importOriginal();
    return {
        ...actual,
        useEditor: ({ onUpdate }) => {
            tiptapMocks.onUpdate = onUpdate;
            return tiptapMocks.editor;
        },
        EditorContent: () => <div role="textbox"></div>,
    };
});

describe('RichText', () => {
  beforeEach(() => {
    tiptapMocks.onUpdate = null;
    vi.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    render(<RichText />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('calls onChange when the editor content updates', () => {
    const handleChange = vi.fn();
    render(<RichText onChange={handleChange} />);

    expect(tiptapMocks.onUpdate).toBeInstanceOf(Function);

    if (tiptapMocks.onUpdate) {
        tiptapMocks.onUpdate({ editor: tiptapMocks.editor });
    }

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('<p>Updated content</p>');
  });
});
