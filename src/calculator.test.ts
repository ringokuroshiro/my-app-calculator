import calculator, { tokenize, calculate } from './calculator'

test('input 1, 2 result is 12', () => {
    const result = calculator(["1", "2"])
    expect(result).toBe("12")
});

test('input 3, 4 result is 34', () => {
    const result = calculator(["3", "4"])
    expect(result).toBe("34")
});

test('input 3, 4, /, 2, =, result is 17', () => {
    const result = calculator(["3", "4", "/", "2", "="])
    expect(result).toBe("17")
});

test('input 1, 2, +, 3, 4 result is 46', () => {
    const result = calculator(["1", "2", "+", "3", "4"])
    expect(result).toBe("12+34")
});

test('input 1, 2, +, 3, 4, =, result is 46', () => {
    const result = calculator(["1", "2", "+", "3", "4", "="])
    expect(result).toBe("46")
});

test('input 3, 4, -, 1, 2, =, result is 22', () => {
    const result = calculator(["3", "4", "-", "1", "2", "="])
    expect(result).toBe("22")
});

test('dot 1, ., 3', () => {
    const result = calculator(["1", ".", "3"])
    expect(result).toBe("1.3")
});

test('dot 1, ., 3, + 2, ., 5', () => {
    const result = calculator(["1", ".", "3", "+", "2", ".", "5"])
    expect(result).toBe("1.3+2.5")
});

test('dot 1, ., 3, + 2, ., 5, = result 3.8', () => {
    const result = calculator(["1", ".", "3", "+", "2", ".", "5", "="])
    expect(result).toBe("3.8")
});

test('two equals 1, +, 2, =, = result 3', () => {
    const result = calculator(["1", "+", "2", "=", "="])
    expect(result).toBe("3")
});


