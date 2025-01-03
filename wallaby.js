const wallabyConfig = (wallaby) => {

    return {
        testFramework: {
            configFile: './jest.config.js'
        },

        trace: true,
        debug: true,

    };
};


export default wallabyConfig;
