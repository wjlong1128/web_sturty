export enum Sex { MAN = 'man', WOMAN = 'woman' }
export default interface Student {
    id: number
    name: string
    age: number
    sex: Sex
}