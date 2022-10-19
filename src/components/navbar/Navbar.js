import { Menu } from "@mui/icons-material";
import { AppBar, Card, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        px: "7%",
        py: 2,
        alignItems: "center"
      }}
    >
      {category.map((item, i) => {
        return (
          <Link to={item.link}
          key={i}
          >
            {i === 0 ? (
              <Box sx={{ display: "flex", 
              alignItems: "center" }}
              
              >
                <IconButton sx={{
                    color: "rgb(48, 152, 221)"
                }}>
                  <Menu />
                </IconButton>
                <Typography key={i}>{item.name}</Typography>
              </Box>
            ) : (
              <Typography key={i}>{item.name}</Typography>
            )}
          </Link>
        );
      })}
    </Card>
  );
}

const category = [
  { name: "Barcha bo'limlat", link: "#" },
  { name: "Yangiliklar", link: "#" },
  { name: "Yangi kelganlar", link: "#" },
  { name: "Chegirmalar", link: "#" },
  { name: "Kitoblar", link: "#" },
  { name: "Mebel", link: "#" },
  { name: "Telefon va gadjetlar", link: "#" },
  { name: "koditsanerlar", link: "#" },
];
