import React, { forwardRef, useImperativeHandle } from 'react';
import { View, Text } from 'react-native';

const MockComponent = forwardRef(({ children, style, ...props }: any, ref) => {
    return (
        <View
            ref={ref}
            style={[
                {
                    flex: 1,
                    backgroundColor: '#f3f4f6',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 300,
                },
                style,
            ]}
            {...props}
        >
            <Text style={{ color: '#6b7280', fontFamily: 'sans-serif' }}>
                {/* Render children or placeholder text if children is strictly null/undefined? 
                     Actually children usually contains markers etc, so we should render them. 
                     But we also want a visual placeholder for the map background. */}
                MapLibre View (Web Placeholder)
            </Text>
            {children}
        </View>
    );
});

MockComponent.displayName = 'MapLibreMock';

const MockCamera = forwardRef((props: any, ref) => {
    useImperativeHandle(ref, () => ({
        zoomTo: (zoom: number) => console.log('[MockCamera] zoomTo:', zoom),
        setCamera: (config: any) => console.log('[MockCamera] setCamera:', config),
        flyTo: (coords: any) => console.log('[MockCamera] flyTo:', coords),
        fitBounds: (bounds: any) => console.log('[MockCamera] fitBounds:', bounds),
    }));
    return null;
});

MockCamera.displayName = 'MapLibreCameraMock';

const components = {
    MapView: MockComponent,
    Camera: MockCamera,
    ShapeSource: MockComponent,
    FillLayer: MockComponent,
    LineLayer: MockComponent,
    PointAnnotation: MockComponent,
    Callout: MockComponent,
    setAccessToken: () => { },
};

export default components;
