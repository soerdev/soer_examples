export type DeepValue = string | number | DeepObject | Array<DeepValue>;


export interface DeepObject {
		[key: string]: DeepValue;
};

function isObject(o: DeepValue): o is DeepObject {
	return typeof(o) === 'object' && !Array.isArray(o);
}
function mergeValues(a: DeepValue, b: DeepValue): DeepValue {

	if (isObject(a) && isObject(b)) {
		return deepMerge(a, b);
	}
	if (Array.isArray(a) && Array.isArray(b)) {
		return [...a, ...b];
	}
	if (!Array.isArray(a) && Array.isArray(b)) {
		return [a, ...b];
	}
	if (Array.isArray(a) && !Array.isArray(b)) {
		return [...a, b];
	}
			
	return b === undefined ? a : b;
}

export default function deepMerge(
	source: DeepObject,
	target: DeepObject) : DeepObject {
		const result: DeepObject = {};
		const okeys = new Set();
		Object.keys(source).forEach(okeys.add, okeys);
		Object.keys(target).forEach(okeys.add, okeys);

		okeys.forEach((key: string) => 
			result[key] = mergeValues(
				source[key],
				target[key])
		);
		return result;
	}
