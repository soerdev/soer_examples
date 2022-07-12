type timestamp = number;
type Measure = [timestamp, number];

interface IMonoid<T> {
	zero(): T;
	isZero(v: T): boolean;
	op(a: T, b: T): T;
}


class MaxTemperature implements IMonoid<Measure> {
	zero(): Measure {
		return [0, 0];
	}

	isZero(v: Measure):	boolean {
		const [temp, value] = v;
		return temp === 0 && value === 0;
	}

	op(a: Measure, b: Measure): Measure {
		if (this.isZero(a)) {
			return b;
		}
		if (this.isZero(b)) {
				return a;
		}

		const [, aValue] = a;
		const [, bValue] = b;
		return aValue > bValue ? a : b;
	}
}




class Series<T> {

	constructor(private values: T[]) {}

	reduce(monoid: IMonoid<T>): T {
		let result = monoid.zero();
		for(let i = 0; i < this.values.length; i++) {
			result = monoid.op(result, this.values[i]);		
		}
		return result;
	}
}


const s1 = new Series<Measure>([[1, 200], [2, 300], [3, 250]]);
const s2 = new Series<Measure>([[450, 1200]]);
const s3 = new Series<Measure>([]); // Exception?

const maxTemp = new MaxTemperature();

console.log(s1.reduce(maxTemp));
console.log(s2.reduce(maxTemp));
console.log(s3.reduce(maxTemp));
