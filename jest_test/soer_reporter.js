const pluralize = (word, count) => `${count} ${word}${count === 1 ? '' : 's'}`;

class JestSimpleDotReporter {
    constructor(globalConfig, options) {
        this._globalConfig = globalConfig;
        this._options = options;
    }

    onRunStart(test) {
        this._numTestSuitesLeft = test.numTotalTestSuites; 
	     console.log()
	    //      console.log(`Found \x1b[31m${test.numTotalTestSuites}\x1b[0m test suites`);
    }

    onRunComplete(test, results) {
        const {
            numFailedTests,
            numPassedTests,
            numTodoTests,
            numPendingTests,
            testResults,
            numTotalTests,
            startTime
        } = results;

        console.log();
        testResults.map(({failureMessage}) => {
            if (failureMessage) {
                console.error(failureMessage);
            }
        });

        if (!results.snapshot.didUpdate && results.snapshot.unchecked) {
            const obsoleteError = pluralize('obsolete snapshot', results.snapshot.unchecked) + ' found.';
            if (this._options.color)
                console.error(`\x1b[31m${obsoleteError}\x1b[0m`);
            else
                console.error(obsoleteError);
        }

        // console.log(`Ran ${numTotalTests} tests in ${testDuration()}`);
        console.log(`\x1b[32m ${numPassedTests || 0} passing\x1b[0m`);
        console.log(`\x1b[31m ${numFailedTests || 0} failing\x1b[0m`);
        console.log(`\x1b[33m ${(numTodoTests || 0) + (numPendingTests || 0)} skipped\x1b[0m`);
        console.log();

        function testDuration() {
            const end = new Date();
            const start = new Date(startTime);

            const seconds = (end - start) / 1000;
            return `${seconds} s`;
        }
    }

    onTestResult(test, testResult) {
            for (var i = 0; i < testResult.testResults.length; i++) {
                switch (testResult.testResults[i].status) {
                    case "passed":
                        process.stdout.write(".")
                        break
                    case "skipped":
                    case "pending":
                    case "todo":
                    case "disabled":
                        process.stdout.write("*")
                        break
                    case "failed":
                        process.stdout.write("F")
                        break
                    default:
                        process.stdout.write(`(${testResult.testResults[i].status})`)
                }
            }

        if (!--this._numTestSuitesLeft && this._globalConfig.collectCoverage) {
            console.log()
        }
    }
}

module.exports = JestSimpleDotReporter;
