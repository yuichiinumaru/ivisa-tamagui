# Video Component Specification

## 1. Overview

The `Video` component is an organism wrapper around `expo-av`'s Video component. It provides a unified interface for playing video content across platforms, handling the nuances of Web vs. Native video rendering.

## 2. Composition & Pattern

The `Video` component follows a "Wrapper" pattern.

- **`Video` (Component):** Wraps `ExpoVideo` (from `expo-av`) or a standard HTML5 `<video>` tag (if needed for lighter web bundles, though `expo-av` works on web too).
- **Controls:** Uses native platform controls by default, but can be customized.

## 3. Component API

### `VideoProps`

| Prop              | Type                  | Required | Description                                                                 |
| :---------------- | :-------------------- | :------- | :-------------------------------------------------------------------------- |
| `src`             | `string`              | No       | The remote URL of the video source.                                         |
| `source`          | `AVPlaybackSource`    | No       | The Expo AV source object (e.g. `require('./file.mp4')`). Overrides `src`. |
| `useNativeControls` | `boolean`           | No       | Whether to display the platform's native playback controls. Default `true`. |
| `resizeMode`      | `ResizeMode`          | No       | How the video should scale (`CONTAIN`, `COVER`, `STRETCH`). Default `COVER`.|
| `isLooping`       | `boolean`             | No       | Whether the video should loop indefinitely. Default `false`.                |
| `shouldPlay`      | `boolean`             | No       | If `true`, the video will start playing automatically. Default `false`.     |
| `...StackProps`   | `StackProps`          | No       | Inherits Tamagui Stack props for sizing and layout.                         |

## 4. Usage Example

```tsx
import { Video } from '@ivisa/ui'
import { ResizeMode } from 'expo-av'

const PromoVideo = () => {
  return (
    <Video
      src="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
      width="100%"
      height={200}
      useNativeControls
      resizeMode={ResizeMode.CONTAIN}
      isLooping
    />
  )
}
```

## 5. Accessibility

- **Captions:** The underlying `expo-av` component supports closed captions if provided in the stream.
- **Controls:** Native controls are generally accessible by default.
- **Alt Text:** Video components should generally have an accessible label or description if strictly visual.

## 6. Implementation Notes

- **Split Implementation:** The component uses `Video.native.tsx` for iOS/Android (using `expo-av`) and `Video.tsx` for Web (using `expo-av` web support or HTML5 fallback).
- **Mocks:** In test environments (JSDOM), the Video component may need to be mocked as `expo-av` relies on browser APIs not fully present in JSDOM.
