
  it('should not accept future timestamp', () => {
    expect(() => {new Age(timestamp + 1)}).toThrow(Error);
  });

