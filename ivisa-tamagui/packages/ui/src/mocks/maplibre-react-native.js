const React = require('react');

const MockComponent = ({ children }) => children || null;

module.exports = {
    MapView: MockComponent,
    Camera: MockComponent,
    ShapeSource: MockComponent,
    FillLayer: MockComponent,
    LineLayer: MockComponent,
    PointAnnotation: MockComponent,
    Callout: MockComponent,
    setAccessToken: () => { },
    default: {
        MapView: MockComponent,
        Camera: MockComponent,
        ShapeSource: MockComponent,
        FillLayer: MockComponent,
        LineLayer: MockComponent,
        PointAnnotation: MockComponent,
        Callout: MockComponent,
        setAccessToken: () => { },
    }
};
