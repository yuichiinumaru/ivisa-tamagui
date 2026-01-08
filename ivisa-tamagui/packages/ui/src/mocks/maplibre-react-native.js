const React = require('react');

const MockComponent = React.forwardRef(({ children, style, ...props }, ref) => {
    return React.createElement('div', {
        ref,
        style: {
            flex: 1,
            backgroundColor: '#f3f4f6',
            backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b7280',
            fontSize: '14px',
            fontFamily: 'sans-serif',
            minHeight: '300px',
            ...style
        },
        ...props
    }, children || 'MapLibre View (Web Placeholder)');
});

const MockCamera = React.forwardRef((props, ref) => {
    React.useImperativeHandle(ref, () => ({
        zoomTo: (zoom) => console.log('[MockCamera] zoomTo:', zoom),
        setCamera: (config) => console.log('[MockCamera] setCamera:', config),
        flyTo: (coords) => console.log('[MockCamera] flyTo:', coords),
        fitBounds: (bounds) => console.log('[MockCamera] fitBounds:', bounds),
    }));
    return null;
});

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

module.exports = {
    ...components,
    default: components
};
