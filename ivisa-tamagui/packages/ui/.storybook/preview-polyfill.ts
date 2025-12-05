if (typeof process === 'undefined') {
    globalThis.process = {
        env: {
            NODE_ENV: 'development',
            TAMAGUI_TARGET: 'web',
        },
    };
}
