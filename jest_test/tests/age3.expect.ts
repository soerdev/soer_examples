
  it('should to convert full years to string', () => {
	const myAgeAfterCurrentDate = new Age(new Date('2018-09-28').getTime());
	expect(myAgeAfterCurrentDate.toString()).toEqual('1');
	const myAgeBeforeCurrentDate = new Age(new Date('2018-09-25').getTime());
	expect(myAgeBeforeCurrentDate.toString()).toEqual('2');
  });