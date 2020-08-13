export type InputType = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "+" | "-" | "/" | "*" | "=" |
    "."

export default function calculator(input: InputType[]): string {
    return evaluate(tokenize(input))
}

export function tokenize(input: InputType[]): string[] {
    let tokenizedArray: string[] = []
    let str = ""
    let hasPoint = false
    for (const i of input) {
        if (isOperator(i)) {
            if (str !== "") {
                tokenizedArray.push(str)
                str = ""
            }
            if (tokenizedArray[tokenizedArray.length - 1] === "+" || tokenizedArray[tokenizedArray.length - 1] === "-" || tokenizedArray[tokenizedArray.length - 1] === "*" || tokenizedArray[tokenizedArray.length - 1] === "/") {
                tokenizedArray.splice(tokenizedArray.length - 1, 1, i)
            } else {
                tokenizedArray.push(i)
            }
            hasPoint = false
        }
        else {
            if (hasPoint) {
                if (i === ".") {
                    continue
                }
            } else {
                if (i === ".") {
                    hasPoint = true
                }
            }
            str += i
        }
    }
    if (str !== "") {
        tokenizedArray.push(str)
    }
    if (isOperator(tokenizedArray[0])) {
        tokenizedArray.unshift("0")
    }
    return tokenizedArray
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


