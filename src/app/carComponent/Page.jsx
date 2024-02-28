import { cars } from "@/components/utils";

export default function CarsPage() {
  return (
    <div className="m-8">
      <h1>The Singers</h1>
      {cars.map((car) => (
        <div key={car.id} className="m-8">
          <h2>The {car.commission}</h2>

          <img
            className="object-scale-down h-48 w-96"
            src={car.imageLink}
          ></img>
          <h2>Delivered in {car.year}</h2>
        </div>
      ))}
    </div>
  );
}
