type Timestamp = number;

export default class Age {
	constructor(
		private _birthDate: Timestamp
	) {
		this.validation();
	}

	private validation(): void {
	  const now = Date.now();

	  if (this._birthDate < 0 || this._birthDate > now) {
		throw new Error('Неверная дата рождения');
	  } 
	}

	toString(): string {
	  const now = Date.now();
	  return (new Date(now - this._birthDate).getUTCFullYear() - 1970) + '';
	}
	
}

