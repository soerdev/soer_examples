type Timestamp = number;

class Age {
	constructor(
		public birthDate: Timestamp
	) {}

	toString(): string {
	  const now = Date.now();

	  if (this.birthDate < 0 || this.birthDate > now) {
		throw new Error('Неверная дата рождения');
	  } 

	  return (new Date(now - this.birthDate).getUTCFullYear() - 1970) + '';
	}
	
}


const myAge = new Age(new Date("2017-09-26").getTime());
myAge.birthDate = 9999999999999999;
console.log(
	myAge.toString()
);
