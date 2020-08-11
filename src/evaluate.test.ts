import calculator, { evaluate } from './calculator'

test('evaluate 12, +, 3, =, -, 3 result 15 - 3', () => {
    const result = evaluate(["12", "+", "3", "=", "-", "3"])
    expect(result).toBe("15-3")
});

test('evaluate 12, + 3, =, =, -, 3 result 15 - 3', () => {
    const result = evaluate(["12", "+", "3", "=", "=", "-", "3"])
    expect(result).toBe("15-3")
});

test('evaluate 1, 3, +, 1, 5, = result 28', () => {
    const result = evaluate((["13", "+", "15", "="]))
    expect(result).toBe("28")
});

test('evaluate 38', () => {
    const result = evaluate(["38"])
    expect(result).toBe("38")
});

test('evaluate 1, 3, +, 1, 5', () => {
    const result = evaluate((["13", "+", "15"]))
    expect(result).toBe("13+15")
});

test('evaluate .3 result .3', () => {
    const result = evaluate([".3"])
    expect(result).toBe(".3")
});

test('evaluate .3、= result 0.3', () => {
    const result = evaluate([".3", "="])
    expect(result).toBe("0.3")
});

test('evaluate .3, +, .3 = result 0.6', () => {
    const result = evaluate([".3", "+", ".3", "="])
    expect(result).toBe("0.6")
});

test('evaluate .3, +, 0.3 = result 0.6', () => {
    const result = evaluate([".3", "+", "0.3", "="])
    expect(result).toBe("0.6")
});

test('evaluate .3, +, .3, = result 0.3+0.3', () => {
    const result = evaluate([".3", "+", ".3"])
    expect(result).toBe(".3+.3")
});

test('evaluate 4, =', () => {
    const result = evaluate(["4", "="])
    expect(result).toBe("4")
});

test('evaluate 4, =, 4', () => {
    const result = evaluate(["4", "=", "4"])
    expect(result).toBe("4")
});
test('evaluate 2, ., 3, =, 2, ., 3', () => {
    const result = evaluate(["2.3", "=", "2.3"])
    expect(result).toBe("2.3")
});

test('evaluate 2.3, =, 2.3, =', () => {
    const result = evaluate(["2.3", "=", "2.3", "="])
    expect(result).toBe("2.3")
});

test('evaluate 0, =, 0, =, 0', () => {
    const result = evaluate(["0", "=", "0", "=", "0"])
    expect(result).toBe("0")
});