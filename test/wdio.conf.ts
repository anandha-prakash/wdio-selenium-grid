import type { Options } from '@wdio/types'

export const config: Options.Testrunner = {
    hostname: 'localhost',
    port: 4444,
    path: '/',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'test/tsconfig.json'
        }
    },
    specs: [
        './test/specs/**/*.ts'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    },
    // {
    //     maxInstances: 1,
    //     browserName: 'firefox',
    //     acceptInsecureCerts: true
    // },{
    //     maxInstances: 1,
    //     browserName: 'MicrosoftEdge',
    //     acceptInsecureCerts: true
    // }
],
    // capabilities: {
    //     myChromeBrowser: {
    //         capabilities: {
    //             browserName: 'chrome',
    //             acceptInsecureCerts: true
    //         }
    //     },
    //     myFirefoxBrowser: {
    //         capabilities: {
    //             browserName: 'firefox',
    //             acceptInsecureCerts: true
    //         }
    //     },
    //     mySafariBrowser: {
    //         capabilities: {
    //             browserName: 'safari',
    //             acceptInsecureCerts: true
    //         }
    //     }
    // },
    logLevel: 'trace',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [['docker', {
        options: {
            healthCheck: 'https://localhost:4444',
            args: '',
        },
    }]],
    reporters: ['spec'],
    framework: 'jasmine',
    jasmineOpts: {
        defaultTimeoutInterval: 60000,
        expectationResultHandler: function(passed, assertion) {
            // do something
        }
    },
}
