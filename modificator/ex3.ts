type Timestamp = number;

class Age {
	constructor(
		public birthDate: Timestamp
	) {
		this.validation();
	}

	validation(): void {
	  const now = Date.now();

	  if (this.birthDate < 0 || this.birthDate > now) {
		throw new Error('Неверная дата рождения');
	  } 
	}

	toString(): string {
	  const now = Date.now();
    	  return (new Date(now - this.birthDate).getUTCFullYear() - 1970) + '';
	}
	
}

// const birthDate = 9999999999999999;
const birthDate = new Date('2017-09-26').getTime();
const myAge = new Age(birthDate);
myAge.birthDate = 999999999999999;
console.log(
	myAge.toString()
);
