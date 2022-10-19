import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardMedia,
  Checkbox,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Rating,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import React from "react";
import shop1 from "../images/shop1.webp";
import shop2 from "../images/shop2.webp";
import shop3 from "../images/shop3.webp";
import shop4 from "../images/shop4.webp";
import shop5 from "../images/shop5.webp";
import shop6 from "../images/shop6.webp";
import shop7 from "../images/shop7.webp";
import shop8 from "../images/shop8.webp";
import shop9 from "../images/shop9.webp";
import shop10 from "../images/shop10.webp";
import book1 from "../images/book1.webp";
import book2 from "../images/book2.webp";
import book3 from "../images/book3.webp";
import book4 from "../images/book4.webp";
import book5 from "../images/book5.webp";
import iPhone from "../images/iphone.webp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import "./homePage.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCheckbox, addData, addShop, deleteCheckbox } from "../redux/testsSlice";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export default function ShopCard() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.todoShop);
  console.log(data);
  return (
    <Box className="shop-card">
      <Box>
        <Card>
          <Typography variant="h6" component="div" sx={{ ml: 3 }}>
            Kitoblar
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {booksCategory.map((item, i) => {
              return (
                <Link to={item.link}>
                  <Box key={i}>
                    <ListItem alignItems="flex-start">
                      <img
                        alt="Img"
                        src={item.img}
                        width="80px"
                        style={{ marginRight: "20px" }}
                      />
                      <ListItemText
                        primary={item.name}
                        secondary={
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="rgba(0, 0, 0, 0.56)"
                          >
                            {item.text}
                          </Typography>
                        }
                      />
                    </ListItem>
                    {i !== booksCategory.length - 1 && <Divider />}
                  </Box>
                </Link>
              );
            })}
          </List>
        </Card>
        {top.map((item, i) => {
          return (
            <Card key={i} sx={{ padding: 2, position: "relative", mt: 5 }}>
              <Typography variant="h6" component="div">
                {item.nameTop}
              </Typography>
              <img alt="iPhone" src={item.img} width="90%" />
              <Typography component="div" variant="p">
                {item.name}
              </Typography>
              <Rating name="size-small" defaultValue={5} size="small" />
              <br />
              <Typography component="div" variant="h6">
                {item.sum} so'm
              </Typography>
              <Typography component="div" variant="p" sx={{ mb: 2 }}>
                {((item.sum * 1.45) / 120).toFixed() * 10} so'm /12 oy
              </Typography>
              <Card
                sx={{ position: "absolute", top: 0, right: 0, boxShadow: 5 }}
              >
                <IconButton onClick={(e) => dispatch(addData(item))}>
                  <LocalGroceryStoreIcon sx={{ color: "rgb(48, 152, 221)" }} />
                </IconButton>
                <br />
                    <Checkbox
                      label="aria-label"
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite 
                        sx={{color: "red"}}
                        />}
                        onClick={(e) => {
                          e.target.checked === true ?
                          dispatch(addCheckbox(item)):
                          dispatch(deleteCheckbox(item.id))
                          console.log(e.target.checked);
                        }}
                    />
              </Card>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <ButtonGroup
                  align="center"
                  variant="contained"
                  aria-label="outlined primary button group"
                >
                  <Tooltip
                    TransitionComponent={Zoom}
                    title="Rassrochka"
                    placement="top"
                    sx={{ background: "rgb(48, 152, 221)" }}
                  >
                    <Button>Rass...</Button>
                  </Tooltip>
                  <Tooltip
                    TransitionComponent={Zoom}
                    title="Bir klikda olish"
                    placement="top"
                    sx={{ background: "rgb(48, 152, 221)" }}
                  >
                    <Button>Kilik...</Button>
                  </Tooltip>
                </ButtonGroup>
              </Box>
            </Card>
          );
        })}
      </Box>
      <Box>
        <Typography component="div" variant="h6" sx={{ ml: 2 }}>
          Back 2 school
        </Typography>
        <Box className="shop-grid">
          {shopCategory.map((item, i) => {
            return (
              <Card key={i} sx={{ padding: 2, position: "relative" }}>
                <img alt={item.name} src={item.img} width="90%" />
                <Typography component="div" variant="p">
                  {item.name}
                </Typography>
                <Rating
                  name="size-small"
                  defaultValue={item.rating}
                  size="small"
                  value={item.rating}
                />
                <br />
                <Typography sx={{ color: "red" }} component="del">
                  {item.previousPrice}
                </Typography>
                <br />
                <Typography component="div" variant="h6">
                  {item.sum} so'm
                </Typography>
                <Typography component="div" variant="p" sx={{ mb: 2 }}>
                  {((item.sum * 1.45) / 120).toFixed() * 10} so'm /12 oy
                </Typography>
                <Card
                  sx={{ position: "absolute", top: 0, right: 0, boxShadow: 5 }}
                >
                  <IconButton
                    onClick={(e) => {
                      dispatch(addData(item));
                    }}
                  >
                    <LocalGroceryStoreIcon
                      sx={{ color: "rgb(48, 152, 221)" }}
                    />
                  </IconButton>
                  <br />
                    <Checkbox
                      label="aria-label"
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite 
                        sx={{color: "red"}}
                        />}
                        onClick={(e) => {
                          e.target.checked === true ?
                          dispatch(addCheckbox(item)):
                          dispatch(deleteCheckbox(item.id))
                          console.log(e.target.checked);
                        }}
                    />
                </Card>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <ButtonGroup
                    align="center"
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <Tooltip
                      TransitionComponent={Zoom}
                      title="Rassrochka"
                      placement="top"
                      sx={{ background: "rgb(48, 152, 221)" }}
                    >
                      <Button>Rass...</Button>
                    </Tooltip>
                    <Tooltip
                      TransitionComponent={Zoom}
                      title="Bir klikda olish"
                      placement="top"
                      sx={{ background: "rgb(48, 152, 221)" }}
                    >
                      <Button>Kilik...</Button>
                    </Tooltip>
                  </ButtonGroup>
                </Box>
              </Card>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
export const shopCategory = [
  {
    id: 1,
    img: shop1,
    name: 'YOKI "Akang talaba uje" Qora futbolka',
    rating: 4,
    comment: 6,
    sum: 199000,
    previousPrice: 350000,
  },
  {
    id: 2,
    img: shop2,
    name: "Xiaomi Pad 5 6/128Gb Wi-Fi White planshet",
    rating: 4,
    comment: 6,
    sum: 199000,
    previousPrice: 350000,
  },
  {
    id: 3,
    img: shop3,
    name: "Smart chas Modio kids MK05 (blue. pink)(Bestseller)",
    rating: 4,
    comment: 6,
    sum: 199000,
    previousPrice: 350000,
  },
  {
    id: 4,
    img: shop9,
    name: "Xiaomi Mi HD (Kumushrang) simli quloqchini",
    rating: 4,
    comment: 6,
    sum: 199000,
    previousPrice: 350000,
  },
  {
    id: 5,
    img: shop5,
    name: "Smart chas Amazfit Bip 3 Black",
    rating: 4,
    comment: 6,
    sum: 199000,
    previousPrice: 350000,
  },
  {
    id: 6,
    img: shop6,
    name: "Klous Shab: To`rtinchi sanoat inqilobi",
    rating: 4,
    comment: 6,
    sum: 199000,
    previousPrice: 350000,
  },
  {
    id: 7,
    img: shop7,
    name: "Xiaomi Mi TV Stick 4K HDR Smart TV adapter",
    rating: 4,
    comment: 6,
    sum: 199000,
    previousPrice: 350000,
  },
  {
    id: 8,
    img: shop8,
    name: "2E Gaming Anti-blue Glasses (Black-Blue) himoya ko`zoynagi",
    rating: 4,
    comment: 6,
    sum: 199000,
    previousPrice: 350000,
  },
  {
    id: 9,
    img: shop4,
    name: "Super chegirma 50 ta mashxur kitob - 999000 So`m",
    rating: 4,
    comment: 6,
    sum: 199000,
    previousPrice: 350000,
  },
  {
    id: 10,
    img: shop10,
    name: "Smart braslet Xiami Mi Band 7 Qora",
    rating: 4,
    comment: 6,
    sum: 199000,
    previousPrice: 350000,
  },
  {
    id: 11,
    img: shop1,
    name: 'YOKI "Akang talaba uje" Qora futbolka',
    rating: 4,
    comment: 6,
    sum: 199000,
    previousPrice: 350000,
  },
  {
    id: 12,
    img: shop2,
    name: "Xiaomi Pad 5 6/128Gb Wi-Fi White planshet",
    rating: 4,
    comment: 6,
    sum: 199000,
    previousPrice: 350000,
  },
  {
    id: 13,
    img: shop3,
    name: "Smart chas Modio kids MK05 (blue. pink)(Bestseller)",
    rating: 4,
    comment: 6,
    sum: 199000,
    previousPrice: 350000,
  },
  {
    id: 14,
    img: shop9,
    name: "Xiaomi Mi HD (Kumushrang) simli quloqchini",
    rating: 4,
    comment: 6,
    sum: 199000,
    previousPrice: 350000,
  },
  {
    id: 15,
    img: shop5,
    name: "Smart chas Amazfit Bip 3 Black",
    rating: 4,
    comment: 6,
    sum: 199000,
    previousPrice: 350000,
  },
  {
    id: 16,
    img: shop6,
    name: "Klous Shab: To`rtinchi sanoat inqilobi",
    rating: 4,
    comment: 6,
    sum: 199000,
    previousPrice: 350000,
  },
];

const top = [
  {
    nameTop: "Hafta tavari",
    name: "iPhone 14 Pro 128GB Deep Purple smartfoni",
    id: 21,
    img: iPhone,
    rating: 5,
    comment: 6,
    sum: 15699000,
  },
  {
    nameTop: "Eng yahshi mahsulot",
    name: "iPhone 14 Pro 128GB Deep Purple smartfoni",
    id: 21,
    img: iPhone,
    rating: 5,
    comment: 6,
    sum: 15699000,
  },
];

const booksCategory = [
  {
    link: "#",
    img: book1,
    name: "Daron Ajemo‘g‘li, Jeyms A. Robinson: Mamlakatlar...",
    text: "Asaxiy books kitoblari",
  },
  {
    link: "#",
    img: book2,
    name: "Rey Bredberi: Farengeyt bo'yicha 451º",
    text: "Asaxiy books kitoblari",
  },
  {
    link: "#",
    img: book3,
    name: "Super chegirma. Ellikta mashhur kitob - 999 000 So'm",
    text: "Bestseller to‘plamlar",
  },
  {
    link: "#",
    img: book4,
    name: "Vikas Svarup: Xarobadan chiqqan millioner",
    text: "Badiiy adabiyotlar",
  },
  {
    link: "#",
    img: book5,
    name: "Jyul Vern: Kapitan Grant bolalari",
    text: "Asaxiy Books kitoblari",
  },
];
