# Video Spec

## Overview
A video player component wrapper around `expo-av`.

## API
- `src` (string): URL of the video.
- `source` (object): Expo AV source object (alternative to src).
- `useNativeControls` (boolean, default true).
- `resizeMode` (ResizeMode, default COVER).
- `...StackProps`: Layout props for the container.

## Behavior
- Renders `ExpoVideo` inside a `Stack`.
- Default sizing: width 100%, height 200.
