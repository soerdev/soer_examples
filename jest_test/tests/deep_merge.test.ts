import deepMerge from '../deep_merge';

describe('Deep merge', () => {

	it ('should merge simple object with uniq keys', () => {
		expect(deepMerge({a: 1}, {b: 1})).toEqual({a: 1, b: 1});
	});

	it ('should merge simple object without uniq keys', () => {
		expect(deepMerge({a: 1}, {a: 2})).toEqual({a: 2});
		expect(deepMerge({a: [1]}, {a: [2]})).toEqual({a: [1, 2]});
		expect(deepMerge({a: 1}, {a: [2]})).toEqual({a: [1, 2]});
		expect(deepMerge({a: [1]}, {a: 2})).toEqual({a: [1, 2]});
	});

	it ('should merge nested object', () => {
		expect(deepMerge({a: {b: 1}}, {a: {b: 2}})).toEqual({a: {b: 2}}); 
		expect(deepMerge({a: {b: [1]}}, {a: {b: 2}})).toEqual({a: {b: [1, 2]}}); 
	});

});

