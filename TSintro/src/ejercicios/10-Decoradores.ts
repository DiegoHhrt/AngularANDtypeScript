/*
    ===== Código de TypeScript =====
*/

function ClassDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
    ) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
    };
  }

class SuperClass{
    public myProperty: string = 'Hallo';

    print () {
        console.log("ojo")
    }
}

console.log(SuperClass)

const myClass = new SuperClass();

console.log(SuperClass.myProperty);