const React = require('react');
const View = ({ children, ...props }) => React.createElement('div', props, children);

module.exports = {
    VictoryPie: () => React.createElement(View, null, "VictoryPie Mock"),
    VictoryChart: () => React.createElement(View, null, "VictoryChart Mock"),
    VictoryAxis: () => React.createElement(View, null, "VictoryAxis Mock"),
    VictoryBar: () => React.createElement(View, null, "VictoryBar Mock"),
    VictoryLine: () => React.createElement(View, null, "VictoryLine Mock"),
    VictoryTheme: { material: {} },
    // Add other exports as needed by the components
};
