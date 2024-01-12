const isValid = (code: string): boolean => {
    code = code.toLowerCase().replace(/ /g, '')
    if(code.startsWith('rgb')){
        // rgbPattern matches rgb(X, X, X) or rgba(X, X, X, Y), where X is a number from 0 to 255, and Y is a number from 0 to 1 (optional).
        const rgbPattern: RegExp = /rgba?\(([0-5]{1,3},){2}[0-5]{1,3},?([0-1]+\.?[0-9]?)?\)/gm
        return rgbPattern.test(code)
    }
    if (code.startsWith('#') && (code.length === 7 || code.length === 4)) {
        const hexPattern: RegExp = /#[0-9a-f]{6}|#[0-9a-f]{3}/gm
        return hexPattern.test(code)
    } 
    return false
}

export { isValid }