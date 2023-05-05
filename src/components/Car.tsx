import cars from "../models/Car";

const Car = () => {
  return (
    <div>
      {cars.map((el) => {
        return <p key={el.id}>{el.model}</p>;
      })}
    </div>
  );
};

export default Car;
