import { ReactElement, useEffect, useState } from "react";
import { Assignment } from "../Services/Data/assignments";
import { HttpService } from "../Services/Http.service";
import exampleLogo from "../assets/example-logo.png"
export default function Assignments(): ReactElement {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    HttpService.getAssignments().then((data) => {
      setAssignments(data);
    });
  }, []);

  let loading = true;

  return (
    <div className="container">
      <h1 className="mb-5">Assignments</h1>
      <div className="row gy-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
        {assignments.map((assignment) => (
          <div>
            <div className="card">
              <img
                src={exampleLogo}
                className="img-fluid"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">{assignment.name}</h5>
                <p className="card-text">{assignment.description}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-danger">Delete</button>
                  <button className="btn btn-outline-primary">Edit</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {loading &&
          [1, 2, 3, 4].map((_) => (
            <div>
              <div className="card">
                <div
                  style={{ height: "180px" }}
                  className="bg-dark bg-opacity-25"
                ></div>
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <div className="bg-dark bg-opacity-25"></div>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>

                  <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-danger disabled placeholder col-3"></button>
                    <button className="btn btn-outline-primary disabled placeholder col-2"></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
