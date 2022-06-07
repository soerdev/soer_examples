type Timestamp = number;

export default class Age {
	constructor(
		public birthDate: Timestamp
	) {}

	toString(): string {
    	 return (new Date(Date.now() - this.birthDate).getUTCFullYear() - 1970) + '';
	}
	
}

