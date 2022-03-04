function test(){

}

//PODEMOS ATRIBUIR OU NÃO NO MOMENTO DA DECLARAÇÃO
let x: number = 5
let name:string;
let isStudent:boolean;
let hobbies:string[];
let math:number[];

//DEFININDO TUPLAS

let role: [number, string]
role = [5, 'adc'] // QUALQUER COISA DIFERENTE DISSO DARÁ UM ERRO


//DEFININDO OBJETOS
// - FUNCIONA COM OS TYPES OU INTERFACES
// - PRIMEIRO CRIAMOS UM DESSES

type Person = {
    name?:string, // ? SIGNIFICA QUE ESSA PROPRIEDADE É OPCIONAL
    age:number | string // PODEMOS DEFINIR UMA VARIEDADE DE TIPOS PARA AS VARIAVEIS SE CHAMA 'UNION'
}

const myMon:Person = {
    name:'Cintia',
    age:'42'
}
const family:Person[] = [
    {name:'Caio',age:'19'},
    {name:'Aninha',age:'12'},
    myMon
]
family.map(el => console.log(el))

//DEFININDO FUNÇÕES

let printName:(name:string) => void; //returns undefined
let printFName:(name:string) => never // não retorna nada

//TYPES ANY E NEVER
let any:any = 'posso colocar qualquer tipo aqui'
let unknown:unknown = 'interssante usar quando não se sabe que tipo será atribuido'


//ENTENDENDO MELHOR ALIASES

type X  = {
    a: string,
    b:number
}
type Y = X & {
    c:string,
    d:boolean
}

let alphabeto: Y = {
    a:'Lucas',
    b:5,
    c:'test',
    d:false
}
//POSSO DIZER ENTAÕ Q O TYPE Y É O TYPE X + AS NOVAS PROPRIEDADES

//AGORA COM INTERFACES FUNCIONA DA MESMA FORMA, A SINTAXE UM POUCO DIFERENTE
interface Y1 {
    a:string,
    b:number
}

interface X1 extends Y1{
    c:number,
    d:number

}
type Z = X1 & {
    newT:number,
}
export default test