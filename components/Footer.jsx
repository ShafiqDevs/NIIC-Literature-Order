import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "orange" }}
      >
        <div className="container p-4 pb-0">
          <section className="">
            <p className="d-flex justify-content-center align-items-center">
              <span className="">
                <h4>Visit our Centre</h4>
              </span>
            </p>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © {new Date().getFullYear() + " "}{" "}
          <a className="text-white" href="https://www.nottinghamislam.com/">
            nottinghamislam
          </a>
        </div>
      </footer>
    </>
  );
}
