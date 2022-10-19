import { Clear, LanguageOutlined, Search } from "@mui/icons-material";
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../images/logo.svg";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { deleteCheckbox, deleteData } from "../redux/testsSlice";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgb(250, 250, 250)",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 480,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

export default function Header() {
  const dispatch = useDispatch()

  const nawShop = useSelector((state) => state.test.todoShop);
  const nawCheckbox = useSelector((state) => state.test.dataCheckbox);

  const arraySum = nawShop.map((item, i) => {
    return item.sum;
  });

  const umumiySum = arraySum.length > 0 ? arraySum.reduce((x, y) => x + y) : [];

  return (
    <Card
      sx={{
        background: "#fff",
        display: "grid",
        gridTemplateColumns: "10% 44% auto",
        alignItems: "center",
        borderBottom: "1px solid rgb(220 220 220)",
      }}
      className="header-container"
    >
      <CardMedia
        component="img"
        sx={{ width: 140 }}
        image={logo}
        alt="Paella dish"
      />
      <Box className="navbar-input">
        <input placeholder="Search…" />
        <Button sx={{ right: "0", position: "absolute", mx: 2, color: "#fff" }}>
          <Search />
          <Typography variant="p">Qidiruv</Typography>
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {category.map((item, i) => {
          return (
            <Card
              key={i}
              align="center"
              sx={{
                boxShadow: "none",
                cursor: "pointer",

                ":hover": {
                  color: "rgb(48, 152, 221)",
                },
              }}
            >
              {i === 3 ? (
                <HtmlTooltip
                  title={
                    nawShop.length>0&&
                    <Card sx={{boxShadow: 5}}>
                      { nawShop.map((item, i) => {
                        return (
                          <Link to="#">
                            <Card
                              key={i}
                              sx={{
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                padding: "5px 10px",
                                pr: 4,
                                my: 1,
                                ":hover": {
                                  color: "rgb(48, 152, 221)",
                                },
                              }}
                            >
                              <img src={item.img} width="50px" alt="naw-shop" />
                              <Typography
                                variant="p"
                                component="div"
                                sx={{ ml: 2, mr: 5 }}
                              >
                                {item.name}
                              </Typography>
                              <Typography variant="h6" component="div">
                                {item.sum}
                              </Typography>

                              <Typography
                                sx={{ ml: 1 }}
                                variant="p"
                                component="div"
                              >
                                So'm
                              </Typography>
                              <IconButton
                                onClick={(e) =>
                                  dispatch(deleteData(item.id))
                                }
                                sx={{
                                  position: "absolute",
                                  color: "red",
                                  zIndex: 2,
                                  top: 0,
                                  right: 0,
                                }}
                              >
                                <Clear />
                              </IconButton>
                            </Card>
                          </Link>
                        );
                      })}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          m: 2,
                        }}
                      >
                        <Typography component="div" variant="h6">
                          Jami
                        </Typography>
                        <Typography component="div" variant="h5">
                          {umumiySum} So'm
                        </Typography>
                      </Box>
                      <Box align="center" sx={{ mb: 2 }}>
                        <ButtonGroup
                          disableElevation
                          variant="contained"
                          aria-label="Disabled elevation buttons"
                        >
                          <Button>Sotib olish</Button>
                          <Button>Savatga o'tish</Button>
                        </ButtonGroup>
                      </Box>
                    </Card>
                  }
                >
                  <Box>
                  <Badge
                    badgeContent={nawShop.length > 0 ? nawShop.length : "0"}
                    color="primary"
                    sx={{
                      mt: "5px",
                      "& .MuiBadge-badge": {
                        right: -4,
                        top: 8,
                        border: `2px solid`,
                        padding: "0 4px",
                      },
                    }}
                  >
                    <item.icon
                      sx={{
                        fontSize: 30,
                        mb: "-5px",
                      }}
                    />
                  </Badge>
                  
              <Typography>{item.name}</Typography>
              </Box>
                </HtmlTooltip>
              ) : i === 4 ? (
                <HtmlTooltip
                title={
                  nawCheckbox.length>0&&
                  <Card sx={{boxShadow: 5}}>
                    { nawCheckbox.map((item, i) => {
                      return (
                        <Link to="#">
                          <Card
                            key={i}
                            sx={{
                              position: "relative",
                              display: "flex",
                              alignItems: "center",
                              padding: "5px 10px",
                              pr: 4,
                              my: 1,
                              ":hover": {
                                color: "rgb(48, 152, 221)",
                              },
                            }}
                          >
                            <img src={item.img} width="50px" alt="naw-shop" />
                            <Typography
                              variant="p"
                              component="div"
                              sx={{ ml: 2, mr: 5 }}
                            >
                              {item.name}
                            </Typography>
                            <Typography variant="h6" component="div">
                              {item.sum}
                            </Typography>

                            <Typography
                              sx={{ ml: 1 }}
                              variant="p"
                              component="div"
                            >
                              So'm
                            </Typography>
                            <IconButton
                              onClick={(e) =>
                                dispatch(deleteCheckbox(item.id))
                              }
                              sx={{
                                position: "absolute",
                                color: "red",
                                zIndex: 2,
                                top: 0,
                                right: 0,
                              }}
                            >
                              <Clear />
                            </IconButton>
                          </Card>
                        </Link>
                      );
                    })}
                    <Box align="center" sx={{ mb: 2 }}>
                      <ButtonGroup
                        disableElevation
                        variant="contained"
                        aria-label="Disabled elevation buttons"
                      >
                        <Button>Sotib olish</Button>
                        <Button>Sevimlilarga o'tish</Button>
                      </ButtonGroup>
                    </Box>
                  </Card>
                }
              >
                <Box>
                <Badge
                  badgeContent={nawCheckbox.length > 0 ? nawCheckbox.length : "0"}
                  color="primary"
                  sx={{
                    mt: "5px",
                    "& .MuiBadge-badge": {
                      right: -4,
                      top: 8,
                      border: `2px solid`,
                      padding: "0 4px",
                    },
                  }}
                >
                  <item.icon
                    sx={{
                      fontSize: 30,
                      mb: "-5px",
                    }}
                  />
                </Badge>
                
            <Typography>{item.name}</Typography>
            </Box>
              </HtmlTooltip>
           ) : (
                <>
                  <item.icon
                    sx={{
                      fontSize: 30,
                      mb: "-5px",
                    }}
                  />
              <Typography>{item.name}</Typography>
                </>
              )}
            </Card>
          );
        })}
      </Box>
    </Card>
  );
}

const category = [
  { icon: CreditCardOutlinedIcon, name: "To'lov" },
  { icon: LocalShippingOutlinedIcon, name: "Trek" },
  { icon: LanguageOutlined, name: "O'zbekcha" },
  { icon: LocalGroceryStoreOutlinedIcon, name: "Savatcha" },
  { icon: FavoriteBorderOutlinedIcon, name: "Sevimli..." },
  { icon: AccountCircleOutlinedIcon, name: "Kobinet" },
];
