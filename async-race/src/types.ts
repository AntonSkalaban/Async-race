export interface ICar { name: string, color: string, id: number }

export interface IRes { cars: Array<ICar>, totalCars: number}

export interface IFinishedCar { carId: string, time: number } 

export interface IWinner { id: number, wins: number, time: number }

export interface IWinners  { winners: Array<IWinner>, totalWinners: number}
