
  it('should use timestamp as a birth date', () => {
    const myAge = new Age(timestamp);
    expect(myAge).toBeTruthy();
  });
