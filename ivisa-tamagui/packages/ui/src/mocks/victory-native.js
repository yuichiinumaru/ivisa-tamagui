const React = require('react');

const MockVictoryComponent = (name) => React.forwardRef(({ children, style, ...props }, ref) => {
    return React.createElement('div', {
        ref,
        style: {
            padding: '20px',
            backgroundColor: '#f9fafb',
            border: '1px dashed #d1d5db',
            borderRadius: '8px',
            textAlign: 'center',
            color: '#6b7280',
            ...style
        },
        ...props
    }, children || `${name} Mock`);
});

const components = {
    VictoryPie: MockVictoryComponent('VictoryPie'),
    VictoryChart: MockVictoryComponent('VictoryChart'),
    VictoryAxis: MockVictoryComponent('VictoryAxis'),
    VictoryBar: MockVictoryComponent('VictoryBar'),
    VictoryLine: MockVictoryComponent('VictoryLine'),
    VictoryTheme: { material: {} },
};

module.exports = {
    ...components,
    default: components
};
