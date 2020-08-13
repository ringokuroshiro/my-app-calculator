export type InputType = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "+" | "-" | "/" | "*" | "=" |
    "."

export default function calculator(input: InputType[]): string {
    return evaluate(tokenize(input))
}

export function tokenize(input: InputType[]): string[] {
    let result: string[] = []
    let isStillNumber = false
    let hasPoint = false
    for (const i of input) {
        if (isOperator(i)) {
            // [+, -, *, /]の演算子が連続する場合,最新の[+, -, *, /]演算子を格納して直前の[+, -, *, /]演算子を捨てる
            // "+", "-"と続いた場合"+"は捨てる
            if (result[result.length - 1] === "+" || result[result.length - 1] === "-" || result[result.length - 1] === "*" || result[result.length - 1] === "/") {
                result.splice(result.length - 1, 1, i)
            } else {
                result.push(i)
            }
            isStillNumber = false
            hasPoint = false
            continue
        }
        if (hasPoint) {
            if (i === ".") {
                continue
            }
        } else {
            if (i === ".") {
                hasPoint = true
            }
        }
        if (isStillNumber) {
            result.splice(result.length - 1, 1, result[result.length - 1] + i)
        } else {
            result.push(i)
            isStillNumber = true
        }
    }
    // 結果の配列の最初が"+"のように演算子だった場合、"0", "+"という配列に変える
    if (isOperator(result[0])) {
        result.unshift("0")
    }
    return result
}

function isOperator(ope: string): boolean {
    switch (ope) {
        case "+":
            return true
        case "-":
            return true
        case "*":
            return true
        case "/":
            return true
        case "=":
            return true
        default:
            return false
    }
}

export function evaluate(input: string[]): string {
    const calcArray = input.splice(0, 3)
    if (calcArray)
        if (calcArray[1] === "=") {
            if (calcArray[0].startsWith(".")) {
                calcArray[0] = calcArray[0].replace(".", "0.")
            }
            return evaluate([calcArray[0], calcArray[2]].concat(input))
        }
    if (input.length > 0) {
        let c = applyOperator(calcArray[0], calcArray[2], calcArray[1])
        return evaluate([c].concat(input))
    } else {
        if (calcArray.includes("+") || calcArray.includes("-") || calcArray.includes("*") || calcArray.includes("/")) {
            if (isOperator(calcArray[0]) && isOperator(calcArray[2])) {
                return "Error"
            }
            return calcArray.join("")
        }
        return calcArray[0]
    }
}

function applyOperator(a: string, b: string, ope: string): string {
    if (isOperator(a) && isOperator(b)) {
        return "Error"
    }
    if (ope === "*") {
        return String(Number(a) * Number(b))
    } else if (ope === "/") {
        return String(Number(a) / Number(b))
    } else if (ope === "+") {
        return String(Number(a) + Number(b))
    } else if (ope === "-") {
        return String(Number(a) - Number(b))
    }
    return "0"
}


