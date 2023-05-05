interface ICar {
  id: number;
  model: string;
  year: number;
  price: number;
}

const cars: ICar[] = [
  {
    id: 1,
    model: "audi",
    year: 2020,
    price: 120000,
  },
  {
    id: 2,
    model: "opel",
    year: 2019,
    price: 110000,
  },
  {
    id: 3,
    model: "bmw",
    year: 2010,
    price: 90000,
  },
];

export default cars
