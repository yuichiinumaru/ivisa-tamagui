import { render, screen } from '../../../vitest.setup'
import { Video } from './Video'
import { vi } from 'vitest'

vi.mock('expo-av', () => ({
  Video: ({ source, useNativeControls, resizeMode, style, ...rest }) => {
    const src = source?.uri || ''
    return <div data-testid="video" src={src} style={style} {...rest} />
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
    expect(video).toHaveAttribute('src', 'https://test.com/video.mp4')
  })

  it('renders with the correct width and height', () => {
    render(<Video source={{ uri: 'https://test.com/video.mp4' }} width={300} height={200} />)
    const video = screen.getByTestId('video')
    expect(video.parentElement).toHaveStyle('width: 300px')
    expect(video.parentElement).toHaveStyle('height: 200px')
  })
})
