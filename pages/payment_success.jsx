import React from "react";
import Router from "next/router";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function payment_success() {

    setTimeout(() => {
        Router.push("/");
    }, 3000);

  return (
    <>
      <div className="mainDiv">
        <h1 className="text-center text-light">Payment Successful</h1>
        <div className=" d-flex justify-content-center text-light">
          <CheckCircleRoundedIcon sx={{ fontSize: "200px" }} />
        </div>
        <div className="text-center mt-5">
          <CircularProgress color="inherit" size={90} sx={{color: "white"}}/>
        </div>
      </div>
    </>
  );
}
