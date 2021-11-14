import { Fragment, ReactElement, useEffect, useState } from "react";
import { Boid } from "../Services/Data/boids";
import { HttpService } from "../Services/Http.service";

export default function Boids(): ReactElement {
  const [boids, setBoids] = useState<Boid[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    HttpService.getBoids().then((boids) => {
      setBoids(boids);
      setLoading(false);
    });
  });

  return <Fragment></Fragment>;
}
