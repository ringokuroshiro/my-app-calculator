import calculator, { tokenize } from './calculator'

test('tokenize 3, 4', () => {
    const result = tokenize(["3", "4"])
    expect(result).toStrictEqual(["34"])
});

test('tokenize 3, 4, +, 2, -, 3', () => {
    const result = tokenize(["3", "4", "+", "2", "-", "3"])
    expect(result).toStrictEqual(["34", "+", "2", "-", "3"])
});

test('tokenize 3, 5, +, 2, -, 1', () => {
    const result = tokenize(["3", "5", "+", "2", "-", "1"])
    expect(result).toStrictEqual(["35", "+", "2", "-", "1"])
});

test('tokenize 1, 2, + 3, =, -, 3 ', () => {
    const result = tokenize(["1", "2", "+", "3", "=", "-", "3"])
    expect(result).toStrictEqual(["12", "+", "3", "=", "-", "3"])
});

test('tokenize 3, 5, *, 2, /, 1', () => {
    const result = tokenize(["3", "5", "*", "2", "/", "1"])
    expect(result).toStrictEqual(["35", "*", "2", "/", "1"])
});

test('tokenize 3, ., 5', () => {
    const result = tokenize(["3", ".", "5"])
    expect(result).toStrictEqual(["3.5"])
});

test('tokenize 3, ., 5, +, 1, ., 2', () => {
    const result = tokenize(["3", ".", "5", "+", "1", ".", "2"])
    expect(result).toStrictEqual(["3.5", "+", "1.2"])
});

test('tokenize 3, ., 5, +, 1, ., 2, =,', () => {
    const result = tokenize(["3", ".", "5", "+", "1", ".", "2", "="])
    expect(result).toStrictEqual(["3.5", "+", "1.2", "="])
});

test('tokenize 3, ., 5, +, 1, ., 2, =, =', () => {
    const result = tokenize(["3", ".", "5", "+", "1", ".", "2", "=", "="])
    expect(result).toStrictEqual(["3.5", "+", "1.2", "=", "="])
});

test('tokenize 3, ., 5, +, 1, ., 2, =, *, 3', () => {
    const result = tokenize(["3", ".", "5", "+", "1", ".", "2", "=", "*", "3"])
    expect(result).toStrictEqual(["3.5", "+", "1.2", "=", "*", "3"])
});

test('tokenize 1, ., 1', () => {
    const result = tokenize(["1", ".", "1"])
    expect(result).toStrictEqual(["1.1"])
});
test('tokenize 1, ., 1, ., 1', () => {
    const result = tokenize(["1", ".", "1", ".", "1"])
    expect(result).toStrictEqual(["1.11"])
});

test('tokenize 1, ., ., 1', () => {
    const result = tokenize(["1", ".", ".", "1"])
    expect(result).toStrictEqual(["1.1"])
});

test('tokenize 1, ., ., 1, -, 0, ., 3, =', () => {
    const result = tokenize(["1", ".", ".", "1", "-", "0", ".", "3", "="])
    expect(result).toStrictEqual(["1.1", "-", "0.3", "="])
});

test('tokenize ., 3', () => {
    const result = tokenize([".", "3"])
    expect(result).toStrictEqual([".3"])
});

test('tokenize ., 3, +, ., 3', () => {
    const result = tokenize([".", "3", "+", ".", "3"])
    expect(result).toStrictEqual([".3", "+", ".3"])
});

test('tokenize 2, ., 3, =, 2, ., 3', () => {
    const result = tokenize(["2", ".", "3", "=", "2", ".", "3"])
    expect(result).toStrictEqual(["2.3", "=", "2.3"])
});

test('tokenize 0, =, 0, =, 0', () => {
    const result = tokenize(["0", "=", "0", "=", "0"])
    expect(result).toStrictEqual(["0", "=", "0", "=", "0"])
});

test('tokenize +, result 0, +', () => {
    const result = tokenize(["+"])
    expect(result).toStrictEqual(["0", "+"])
});

test('tokenize +, -, result 0, +', () => {
    const result = tokenize(["+", "-"])
    expect(result).toStrictEqual(["0", "-"])
});


