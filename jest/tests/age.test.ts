import Age from '../ex1';
import { set, reset } from 'mockdate'


describe('Age', () => {
  const date = '2020-09-26';
  const timestamp = new Date(date).getTime();
  let myAge: Age;


  beforeEach(() => {
	set(date);
  });

  it('should use timestamp as birth date', () => {
    const myAge = new Age(timestamp);
    expect(myAge).toBeTruthy();
  });

  it('should not accept future timestamp', () => {
	expect(() => {new Age(timestamp + 1)}).toThrow(Error);
  });


  it('should convert to string full years', () => {
	const myAgeAfterCurrentDate = new Age(new Date('2018-09-28').getTime());
	expect(myAgeAfterCurrentDate.toString()).toEqual('1');
	const myAgeBeforeCurrentDate = new Age(new Date('2018-09-25').getTime());
	expect(myAgeBeforeCurrentDate.toString()).toEqual('2');

  });

  afterEach(() => {
	reset();
  });
});

