
  it('should not accept a future timestamp', () => {
    expect(() => {new Age(timestamp + 1)}).toThrow(Error);
  });

