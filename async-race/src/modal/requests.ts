import { IRes, IWinners, ICar } from './../types';

const baseUrl = 'http://localhost:3000';

export const getCars = async (page:number): Promise<IRes> => {
  const response = await fetch(`${ baseUrl }/garage?_page=${ page }&_limit=7`);
  const cars = await response.json();
  const totalCars = Number(response.headers.get('X-Total-Count'))
  return { cars: cars, totalCars: totalCars }
}

export const getCar = async (id: number): Promise<ICar> => {
  const response = await fetch(`${ baseUrl }/garage/${ id }`);
  return await response.json();
}

export const createCar = async (body: { name: string, color: string}) => {
  await fetch(`${ baseUrl }/garage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
}

export const updateCar = async (id: string, body: { name: string, color: string }) => {
  await fetch(`${ baseUrl }/garage/${ id }`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
}

export const deleteCar = async (id: string) => {
  await fetch(`${ baseUrl }/garage/${ id }`, {
    method: 'DELETE'
  });
}

export const startEngine = async (id: string) => {
  const res = await fetch(`${ baseUrl }/engine?id=${ id }&status=started`, {
    method: 'PATCH', 
  });
  const params = await res.json();
  return params.distance/params.velocity;
}

export const stopEngine = async (id: string) => {
  return await fetch(`${ baseUrl }/engine?id=${ id }&status=stopped`, {
    method: 'PATCH', 
  });
}

export const isDrive = async (id: string) => {
  try {
    const res = await fetch(`${ baseUrl }/engine?id=${ id }&status=drive`, {
      method: 'PATCH', 
    });
    return res.status === 200 ? true : false;
  }
  catch(err) {
    if (err instanceof Error) throw Error(err.message);
  }
}

export const getWinners = async (page?:number, sort?: string, order?: string): Promise<IWinners> => {
  const response = await fetch(`${ baseUrl }/winners${ 
    page 
      ? `?_page=${ page }&_limit=10&_sort=${ sort }&_order=${ order }`
      : ''
  }`);

  const winners = await response.json();
  const totalWinners = Number(response.headers.get('X-Total-Count'))
  return { winners, totalWinners }
}

export const createWinner = async (
  body: { id: number,  wins: number,time: number}
) => {
  await fetch(`${ baseUrl }/winners`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
}

export const updateWinner = async (id: string, body: { wins: number, time: number }) => {
  await fetch(`${ baseUrl }/winners/${ id }`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
}

export const deleteWinner = async (id: string) => {
  await fetch(`${ baseUrl }/winners/${ id }`, {
    method: 'DELETE'
  });
}