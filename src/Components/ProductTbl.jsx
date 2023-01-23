import React from "react";
import p1 from "../Images/product-1.jpg";
import p2 from "../Images/product-2.jpg";
import p3 from "../Images/product-3.jpg";
import p4 from "../Images/product-4.jpg";
import p5 from "../Images/product-5.jpg";

function ProductTbl() {
  // Product Table
  return (
    <div>
      <table class="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Preview</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Sold</th>
            <th scope="col">Revenue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <img
                style={{ width: "4em", marginTop: "-1.3em" }}
                src={p1}
                alt=""
              />
            </th>
            <td style={{ color: "#1b76fd" }}>
              Ut inventore ipsa voluptas nulla
            </td>
            <td>$64</td>
            <td style={{ fontWeight: "bolder" }}>124</td>
            <td>$5828</td>
          </tr>
          <tr>
            <th scope="row">
              <img
                style={{ width: "4em", marginTop: "-1.3em" }}
                src={p2}
                alt=""
              />
            </th>
            <td style={{ color: "#1b76fd" }}>
              Exercitationem similique doloremque
            </td>
            <td>$46</td>
            <td style={{ fontWeight: "bolder" }}>98</td>
            <td>$4508</td>
          </tr>
          <tr>
            <th scope="row">
              <img
                style={{ width: "4em", marginTop: "-1.3em" }}
                src={p3}
                alt=""
              />
            </th>
            <td style={{ color: "#1b76fd" }}>Doloribus nisi exercitationem</td>
            <td>$59</td>
            <td style={{ fontWeight: "bolder" }}>74</td>
            <td>$4366</td>
          </tr>
          <tr>
            <th scope="row">
              <img
                style={{ width: "4em", marginTop: "-1.3em" }}
                src={p4}
                alt=""
              />
            </th>
            <td style={{ color: "#1b76fd" }}>
              Officiis quaerat sint rerum error
            </td>
            <td>$32</td>
            <td style={{ fontWeight: "bolder" }}>63</td>
            <td>$2016</td>
          </tr>
          <tr>
            <th scope="row">
              <img
                style={{ width: "4em", marginTop: "-1.3em" }}
                src={p5}
                alt=""
              />
            </th>
            <td style={{ color: "#1b76fd" }}>
              Sit unde debitis delectus repellendus
            </td>
            <td>$79</td>
            <td style={{ fontWeight: "bolder" }}>41</td>
            <td>$3239</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductTbl;
