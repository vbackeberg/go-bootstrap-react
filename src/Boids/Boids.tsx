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

  return (
    <Fragment>
      <div className="container">
        <h1 className="mb-5">Available Boids</h1>
        <div className="d-flex justify-content-end mb-3">
          <button
            className="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#addBoidModal"
          >
            Add Boid
          </button>
        </div>
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Availabe from</th>
              <th scope="col">Skillset</th>
            </tr>
          </thead>
          <tbody>
            {boids.map((boid) => (
              <tr>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                  </div>
                </td>
                <td>{boid.firstName}</td>
                <td>{boid.lastName}</td>
                <td>{boid.availableFrom}</td>
                <td>{boid.skillset}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {loading && (
          <div className="position-absolute top-50 start-50 translate-middle d-flex gap-3">
            <div className="spinner-grow text-primary" role="status"></div>
            <div
              className="spinner-grow text-primary text-opacity-75"
              role="status"
            ></div>
            <div
              className="spinner-grow text-primary text-opacity-50"
              role="status"
            ></div>
            <div
              className="spinner-grow text-primary text-opacity-25"
              role="status"
            ></div>
          </div>
        )}
      </div>

      <div className="modal fade" id="addBoidModal" tabIndex={-1}>
        <div className="modal-dialog modal-lg modal-fullscreen-md-down modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addBoidModalLabel">
                Add new boid
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="container-fluid">
                  <div className="row row-cols-2">
                    <div className="col">
                      <label htmlFor="first-name" className="col-form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="first-name"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="last-name" className="col-form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="last-name"
                      />
                    </div>
                  </div>
                  <div className="row row-cols-2">
                    <div className="col">
                      <label
                        htmlFor="available-from"
                        className="col-form-label"
                      >
                        Available from
                      </label>
                      <input className="form-control" id="available-from" />
                    </div>
                    <div className="col">
                      <label htmlFor="skillset" className="col-form-label">
                        Skillset
                      </label>
                      <textarea
                        className="form-control"
                        id="skillset"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
