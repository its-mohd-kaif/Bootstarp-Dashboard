import React from "react";
import n1 from "../Images/news-1.jpg";
import n2 from "../Images/news-2.jpg";
import n3 from "../Images/news-3.jpg";
import n4 from "../Images/news-4.jpg";

function NewsTbl() {
  // News Compoent
  return (
    <div>
      <table class="table table-borderless">
        <tbody>
          <tr>
            <th scope="row">
              <img
                style={{ width: "7em", borderRadius: "12px" }}
                src={n1}
                alt=""
              />
            </th>
            <td>
              <p style={{ fontSize: "17px", color: "#012970" }}>
                Nihil blanditiis at in nihil autem
              </p>
              <span>
                Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed
                ut harum...
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <img
                style={{ width: "7em", borderRadius: "12px" }}
                src={n2}
                alt=""
              />
            </th>
            <td>
              <p style={{ fontSize: "17px", color: "#012970" }}>
                Quidem autem et impedit
              </p>
              <span>
                Illo nemo neque maiores vitae officiis cum eum turos elan dries
                werona nande...
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <img
                style={{ width: "7em", borderRadius: "12px" }}
                src={n3}
                alt=""
              />
            </th>
            <td>
              <p style={{ fontSize: "17px", color: "#012970" }}>
                Laborum corporis quo dara net para
              </p>
              <span>
                Qui enim quia optio. Eligendi aut asperiores enim repellendusvel
                rerum cuder...
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <img
                style={{ width: "7em", borderRadius: "12px" }}
                src={n4}
                alt=""
              />
            </th>
            <td>
              <p style={{ fontSize: "17px", color: "#012970" }}>
                Id quia et et ut maxime similique occaecati ut
              </p>
              <span>
                Qui enim quia optio. Eligendi aut asperiores enim repellendusvel
                rerum cuder...
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default NewsTbl;
