function isObject(o: any): o is object {
	return typeof(o) === 'object' && !Array.isArray(o);
}
function mergeValues(a: any, b: any): any {

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
	source: object,
	target: object) : object {
		const result = {};
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
