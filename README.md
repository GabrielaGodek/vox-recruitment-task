# VOX Recruitment task 

## Installation
1. Clone this repo: `https://github.com/GabrielaGodek/vox-recruitment-task`.
2. Install dependencies `npm install`.
3. Run the application `npm run dev`, it will open `http://localhost:5173/`.
4. Use button at the bottom left to add first tile.

## Dependencies
- Vite `^5.0.8`
- Sass `^1.69.7`
- Vitest `^1.2.0`

## Tests
src/
 \_\_tests\_\_

There are two tests: one for checking configuration (`sanity.test.ts`) and another for verifying if the Tile renders correctly at the front (`TileItem.test.ts`).

### Run test
In the console at the root directory, type `npm run test`.

## Color validation

```ts
const isValid = (code: string): boolean => {
    code = code.toLowerCase()
    if(code.startsWith('rgb')){
        // rgbPattern matches rgb(X, X, X) or rgba(X, X, X, Y), where X is a number from 0 to 255, and Y is a number from 0 to 1 (optional).
        const rgbPattern: RegExp = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/
        return rgbPattern.test(code)
    }
    if (code.startsWith('#') && (code.length === 7 || code.length === 4)) {
        const hexPattern: RegExp = /^#[a-f0-9]{6}$|^#[a-f0-9]{3}$/;
        return hexPattern.test(code)
    } 
    return false
}
```
