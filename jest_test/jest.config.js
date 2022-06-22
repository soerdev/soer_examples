/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	reporters: ['./soer_reporter.js'],
	globals: {
		'ts-jest': {
			diagnostics: {
				ignoreCodes: [ 'TS151001' ],
			},
		},
	},
};
