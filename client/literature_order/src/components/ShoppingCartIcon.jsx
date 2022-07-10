import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function ShoppingCart(props) {
  const [isHovered, setisHovered] = useState(false);

  const defaultStyle = {
    color: props.cartItemCount > 0 ? "rgb(201, 116, 0)" : "rgb(150, 150, 150)",
    fontSize: 40,
  };

  const hoveredStyle = {
    color: props.cartItemCount > 0 ? "rgb(255, 147, 0)" : "rgb(255, 255, 255)",
    fontSize: 40,
  };

  return (
    <div>
      <Badge badgeContent={props.cartItemCount} color="success">
        <ShoppingCartIcon
          onMouseEnter={(e) => {
            setisHovered(true);
          }}
          onMouseLeave={(e) => {
            setisHovered(false);
          }}
          onClick={(event) => {
            props.onClick();
          }}
          sx={isHovered ? hoveredStyle : defaultStyle}
        />
      </Badge>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
      </Box>
    </div>
  );
}
