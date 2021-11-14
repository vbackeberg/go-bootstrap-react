import { ReactElement, useEffect, useState } from "react";
import { Assignment } from "../Services/Data/assignments";
import { HttpService } from "../Services/Http.service";
import exampleLogo from "../assets/example-logo.png";
export default function Assignments(): ReactElement {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    HttpService.getAssignments().then((data) => {
      setAssignments(data);
      setLoading(false);
    });
  }, []);

  return <div></div>;
}
