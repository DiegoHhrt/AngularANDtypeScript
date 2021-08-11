/*
    ===== Código de TypeScript =====
*/
function wichType<T>(arg: T){
    return arg;
}

let imString = wichType('Hi there');
let imNumber = wichType(123);
let imArray = wichType([2,3,4,4]);
let imExplicit = wichType<string>('hey');
