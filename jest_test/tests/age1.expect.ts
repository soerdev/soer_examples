
  it('should use timestamp as birth date', () => {
    const myAge = new Age(timestamp);
    expect(myAge).toBeTruthy();
  });
