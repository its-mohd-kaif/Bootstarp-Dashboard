import React from "react";

function CustomerTbl() {
  // Customer Table Component
  return (
    <div>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Customer</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">#2457</th>
            <td>Brandon Jacob</td>
            <td style={{ color: "#1b76fd" }}>At praesentium minu</td>
            <td>$64</td>
            <td>
              <span className="badge bg-success">Approved</span>
            </td>
          </tr>
          <tr>
            <th scope="row">#2147</th>
            <td>Bridie Kessler</td>
            <td style={{ color: "#1b76fd" }}>
              Blanditiis dolor omnis similique
            </td>
            <td>$47</td>
            <td>
              <span className="badge bg-warning">Pending</span>
            </td>
          </tr>
          <tr>
            <th scope="row">#2049</th>
            <td>Ashleigh Langosh</td>
            <td style={{ color: "#1b76fd" }}>At recusandae consectetur</td>
            <td>$147</td>
            <td>
              <span className="badge bg-success">Approved</span>
            </td>
          </tr>
          <tr>
            <th scope="row">#2644</th>
            <td>Angus Grady</td>
            <td style={{ color: "#1b76fd" }}>Ut voluptatem id earum et</td>
            <td>$67</td>
            <td>
              <span className="badge bg-danger">Rejected</span>
            </td>
          </tr>
          <tr>
            <th scope="row">#2644</th>
            <td>Raheem Lehner</td>
            <td style={{ color: "#1b76fd" }}>Sunt similique distinctio</td>
            <td>$165</td>
            <td>
              <span className="badge bg-success">Approved</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTbl;
