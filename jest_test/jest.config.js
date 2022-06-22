/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	reporters: ['jest-dot-reporter'],
	globals: {
		'ts-jest': {
			diagnostics: {
				ignoreCodes: [ 'TS151001' ],
			},
		},
	},
};
