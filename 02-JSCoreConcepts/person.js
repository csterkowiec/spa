class Person {
    constructor(name, surname){
        this.name = name
        this.surname = surname
    }

    printName(){
        return `${this.name} ${this.surname.toUpperCase()}`
    }

    printInitials(){
        return `${this.name.charAt(0)}.${this.surname.charAt(0)}.`
    }
}

testPerson = new Person("Jan", "Nowak")
me = new Person("Camil", "Sterkowiec")

console.log(testPerson.printName())
console.log(testPerson.printInitials())
console.log(me.printName())
console.log(me.printInitials())