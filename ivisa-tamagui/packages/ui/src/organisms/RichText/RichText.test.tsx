// @vitest-environment jsdom
import React from 'react';
import { render, screen } from '../../test-utils';
import { RichText } from './RichText';

const tiptapMocks = {
    onUpdate: null,
    editor: {
        getHTML: () => '<p>Updated content</p>',
    },
};

jest.mock('@tiptap/react', () => {
    return {
        useEditor: ({ onUpdate }: any) => {
            tiptapMocks.onUpdate = onUpdate;
            return tiptapMocks.editor;
        },
        EditorContent: () => <div role="textbox"></div>,
    };
});

describe('RichText', () => {
  beforeEach(() => {
    tiptapMocks.onUpdate = null;
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    render(<RichText />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('calls onChange when the editor content updates', () => {
    const handleChange = jest.fn();
    render(<RichText onChange={handleChange} />);

    expect(tiptapMocks.onUpdate).toBeInstanceOf(Function);

    if (tiptapMocks.onUpdate) {
        tiptapMocks.onUpdate({ editor: tiptapMocks.editor });
    }

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('<p>Updated content</p>');
  });
});
