export const carMarks = [ 'Tesla', 'Opel', 'BMV', 'Lada', 'Audi', 'Ford', 'Kia', 'Mazda', 'Pegeot', 'Skoda'];
export const carTypes = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'l', 'm'];

const getRandomArrVal = (arr: Array<string>) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const getRandomNumber = () => {
  return Math.ceil(Math.random() * 255);
}

export const getRandomName = (marks: Array<string>, types: Array<string>) => {
  return `${ getRandomArrVal(marks) } ${ getRandomArrVal(types) }`
}

export const getRandomColor = () => {
  return `rgb(${ getRandomNumber() }, ${ getRandomNumber() }, ${ getRandomNumber() })`
}

export const createCarParams = (name: string, color: string) => {
  return { name, color }
}
