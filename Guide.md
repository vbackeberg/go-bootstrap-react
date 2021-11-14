# Go Bootstrap React

## Tasks

1. Setup repository:
   ```bash
    git clone https://github.com/vbackeberg/go-bootstrap-react.git
    npm install
    git checkout start-here
   ```
2. Import bootstrap styles.

   <details>
   <summary>Code hint here</summary>

   #### **`App.scss`**

   ```scss
   @import "../node_modules/bootstrap/scss/bootstrap";
   ```

   This example comes with Sass installed.
   [Usually, you would need to install it yourself.](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)

   </details>

3. Add a navbar to the top by using the [Bootstrap Navbar](https://getbootstrap.com/docs/5.1/components/navbar/).

   <details>
   <summary>Code hint here</summary>

   #### **`Navbar.tsx`**

   ```tsx
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div className="container-fluid">
       <button
         className="navbar-toggler"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navbarTop"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarTop">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
             <Link className="nav-link" to="/">
               Assignments
             </Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/boids">
               Boids
             </Link>
           </li>
         </ul>
         <button className="btn btn-primary">
           <i className="bi bi-person-fill"></i>
         </button>
       </div>
     </div>
   </nav>
   ```

 </details>

4. Add an Icon to the Navbar that redirects to our assignments page.

   <details>
   <summary>Code hint here</summary>

   #### **`App.scss`**

   ```scss
   @import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
   ```

   #### **`Navbar.tsx`**

   ```tsx
   <Link className="navbar-brand" to="/">
     <img src={brand} height="38" width="38" alt="" />
   </Link>
   ```

 </details>

5. Create a [Bootstrap Container](https://getbootstrap.com/docs/5.1/layout/containers/) with a title inside in the Assignments component:

   <details>
   <summary>Code hint here</summary>

   #### **`Assignments.tsx`**

   ```tsx
   <div className="container">
     <h1 className="mb-5">Assignments</h1>
   </div>
   ```

 </details>

6. Display all assignments as cards with [Bootstrap Card](https://getbootstrap.com/docs/5.1/components/card/).

   <details>
   <summary>Code hint here</summary>

   #### **`Assignments.tsx`**

   ```tsx
   <div className="container">
     <h1 className="mb-5">Assignments</h1>
     <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
       {assignments.map((assignment) => (
         <div>
           <div className="card">
             <img src={exampleLogo} className="img-fluid" alt="" />
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
     </div>
   </div>
   ```

  </details>
  
7. Add a top margin [top margin](https://getbootstrap.com/docs/5.1/utilities/spacing/) to our main container and also [vertical gutter](https://getbootstrap.com/docs/5.1/layout/gutters/) between the cards.
   <details>
   <summary>Code hint here</summary>

    #### **`Assignments.tsx`**

      ```tsx
      <div className="row gy-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
        ...
      </div>
      ```

    #### **`App.tsx`**

    ```tsx
    <main className="mt-4">
    ```

  </details>

8. Add 4 [placeholder cards](https://getbootstrap.com/docs/5.1/components/placeholders/) that appear while `loading` is `true`.

   <details>
   <summary>Code hint here</summary>

   #### **`Assignments.tsx`**

   ```tsx
   {
     loading &&
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
       ));
   }
   ```

  </details>

9. [Customize our global theme](https://getbootstrap.com/docs/5.1/customize/sass/#variable-defaults) with [Netlight colors](https://netlight365beta.sharepoint.com/sites/CommunicationsDesign/SitePages/Brandbook.aspx#colors) and button font weight.

   <details>
   <summary>Code hint here</summary>

   #### **`App.scss`**

   ```scss
   $secondary: #4d4d4d;
   $primary: #4a49cb;
   $danger: #fc4a4a;
   $warning: #fc9a1a;

   $btn-font-weight: 600;
   ```

  </details>

10. On to the Boids component: Create a [Bootstrap Container](https://getbootstrap.com/docs/5.1/layout/containers/) with a title.

    <details>
    <summary>Code hint here</summary>

    #### **`Boids.tsx`**

    ```tsx
    <Fragment>
      <div className="container">
        <h1 className="mb-5">Available Boids</h1>
      </div>
    </Fragment>
    ```

    </details>

11. Display the boids in a table.

    <details>
    <summary>Code hint here</summary>

    #### **`Boids.tsx`**

    ```tsx
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
                <input className="form-check-input" type="checkbox" value="" />
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
    ```

    </details>

12. Add a loading animation.

    <details>
    <summary>Code hint here</summary>

    #### **`Boids.tsx`**

    ```tsx
    {
      loading && (
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
      );
    }
    ```

    </details>

13. Create a button on top of the table that opens a [Bootstrap Modal](https://getbootstrap.com/docs/5.1/components/modal/).

    <details>
    <summary>Code hint here</summary>

    #### **`Boids.tsx`**

    ```tsx
    <div className="d-flex justify-content-end mb-3">
        <button
        className="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#addBoidModal"
        >
        Add Boid
        </button>
    </div>

    ...

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
            <div className="modal-body"></div>
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

    ```

      </details>

14. Add a form inside the modal.

    <details>
    <summary>Code hint here</summary>

    #### **`Boids.tsx`**

    ```tsx
    <form>
      <div className="container-fluid">
        <div className="row row-cols-2">
          <div className="col">
            <label htmlFor="first-name" className="col-form-label">
              First name
            </label>
            <input type="text" className="form-control" id="first-name" />
          </div>
          <div className="col">
            <label htmlFor="last-name" className="col-form-label">
              Last name
            </label>
            <input type="text" className="form-control" id="last-name" />
          </div>
        </div>
        <div className="row row-cols-2">
          <div className="col">
            <label htmlFor="available-from" className="col-form-label">
              Available from
            </label>
            <input className="form-control" id="available-from" />
          </div>
          <div className="col">
            <label htmlFor="skillset" className="col-form-label">
              Skillset
            </label>
            <textarea className="form-control" id="skillset"></textarea>
          </div>
        </div>
      </div>
    </form>
    ```

    </details>
