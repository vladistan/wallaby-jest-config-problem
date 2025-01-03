const wallabyConfig = (wallaby) => {

  console.log("wallaby", wallaby);
  return {
    files: [
      { pattern: 'package.json', instrument: false },
      { pattern: 'tsconfig.*', instrument: false },
      'src/**/*.ts',
      '!src/**/*.test.ts',
    ],

    tests: [
      'src/**/*.test.ts'
    ],

    env: {
      type: 'node',
      params: {
        runner: '--experimental-vm-modules'
      }
    },

    testFramework: 'jest',
    trace: true,
    debug: true,

  };
};

export default wallabyConfig;
