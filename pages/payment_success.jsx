import React from "react";
import Router from "next/router";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "../styles/payment_success.module.css";

export default function payment_success() {
  setTimeout(() => {
    Router.push("/");
  }, 3000);

  return (
    <>
      <div className={styles.mainDiv + ""}>
        <div className={styles.centreDiv + " "}>
          <h1 className={styles.header1 + " text-center "}>
            Payment Successful
          </h1>
          <div
            className={
              styles.loadingIcon + " d-flex justify-content-center text-light"
            }
          >
            <CheckCircleRoundedIcon sx={{ fontSize: "200px" }} />
          </div>
          <div className="text-center mt-5">
            <CircularProgress
              color="inherit"
              size={90}
              sx={{ color: "white" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
