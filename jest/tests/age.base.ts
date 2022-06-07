import Age from '../ex1';
import { set, reset } from 'mockdate'


describe('Age', () => {
  const date = '2020-09-26';
  const timestamp = new Date(date).getTime();
  let myAge: Age;


  beforeEach(() => {
	set(date);
  });


  });

  afterEach(() => {
	reset();
  });
});

