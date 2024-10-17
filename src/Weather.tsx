type Props = {
  temp: number;
  description: string;
};

export default function Wheather ({ temp, description }: Props) {
  return (
    <div className="weather">
      <p>Temperature: {temp} °C</p>
      <p>Weather: {description}</p>
    </div>
  );
};
