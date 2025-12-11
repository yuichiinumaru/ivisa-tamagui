// @vitest-environment jsdom
import React from 'react';
import { render, screen } from '../../test-utils';
import { RichText } from './RichText';

// Mock the Tooltip component to prevent crashes in JSDOM
jest.mock('../../molecules/Tooltip', () => ({
    Tooltip: ({ children }) => <>{children}</>,
    TooltipTrigger: ({ children }) => <>{children}</>,
    TooltipContent: ({ children }) => <>{children}</>,
}));

// Mock ToggleGroup because its context is breaking in JSDOM with nested children
jest.mock('../../molecules/ToggleGroup', () => ({
    ToggleGroup: ({ children }) => <div>{children}</div>,
    // Render as a button so we can find it by role
    ToggleGroupItem: ({ children, 'aria-label': ariaLabel }) => <button aria-label={ariaLabel}>{children}</button>,
}));

const mockEditor = {
    isActive: jest.fn().mockReturnValue(false),
    chain: jest.fn(() => ({
        focus: jest.fn(() => ({
            toggleBold: jest.fn(() => ({ run: jest.fn() })),
            toggleItalic: jest.fn(() => ({ run: jest.fn() })),
            toggleStrike: jest.fn(() => ({ run: jest.fn() })),
            toggleHeading: jest.fn(() => ({ run: jest.fn() })),
        })),
    })),
    getHTML: () => '<p>Updated content</p>',
};

const tiptapMocks = {
    onUpdate: null,
    editor: mockEditor,
};

jest.mock('@tiptap/react', () => ({
    useEditor: ({ onUpdate }: any) => {
        tiptapMocks.onUpdate = onUpdate;
        return tiptapMocks.editor;
    },
    EditorContent: () => <div role="textbox"></div>,
}));

describe('RichText', () => {
    beforeEach(() => {
        tiptapMocks.onUpdate = null;
        jest.clearAllMocks();
    });

    it('renders correctly with default props', () => {
        render(<RichText />);
        expect(screen.getByRole('button', { name: 'Negrito' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Itálico' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Título 1' })).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('calls onChange when the editor content updates', () => {
        const handleChange = jest.fn();
        render(<RichText onChange={handleChange} />);
        if (tiptapMocks.onUpdate) {
            tiptapMocks.onUpdate({ editor: tiptapMocks.editor });
        }
        expect(handleChange).toHaveBeenCalledWith('<p>Updated content</p>');
    });

    it('renders the skeleton when isLoading is true', () => {
        render(<RichText isLoading />);
        expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
        expect(screen.queryByRole('button', { name: 'Negrito' })).not.toBeInTheDocument();
    });

    it('renders the editor with an error state when hasError is true', () => {
        render(<RichText hasError />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
});
