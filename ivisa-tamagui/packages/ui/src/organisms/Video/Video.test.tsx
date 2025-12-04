import { render, screen } from '../../../vitest.setup'
import { Video } from './Video'
import { vi, describe, it, expect } from 'vitest'

vi.mock('expo-av', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Video: ({ source, useNativeControls, resizeMode, style, ...rest }: any) => {
    const src = source?.uri || ''
    return <div data-testid="video" data-src={src} style={style} {...rest} />
  },
  ResizeMode: {
    COVER: 'cover',
  },
}))

describe('Video', () => {
  it('renders the video component', () => {
    render(<Video source={{ uri: 'https://test.com/video.mp4' }} />)
    const video = screen.getByTestId('video')
    expect(video).toBeInTheDocument()
  })

  it('renders with the correct src', () => {
    render(<Video source={{ uri: 'https://test.com/video.mp4' }} />)
    const video = screen.getByTestId('video')
    expect(video).toHaveAttribute('data-src', 'https://test.com/video.mp4')
  })

  it('renders with the correct width and height', () => {
    render(<Video source={{ uri: 'https://test.com/video.mp4' }} width={300} height={200} />)
    const video = screen.getByTestId('video')
    expect(video.parentElement).toHaveAttribute('width', '300')
    expect(video.parentElement).toHaveAttribute('height', '200')
  })
})
