import { CallEndOutlined, LocationOnOutlined, Sms } from "@mui/icons-material";
import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import grid1 from "../images/grid1.svg";
import grid2 from "../images/grid2.svg";
import grid3 from "../images/grid3.svg";
import grid4 from "../images/grid4.svg";
import Facebook from "../images/facebook.jpg";
import "./footer.css";

export default function Footer() {
  return (
    <Box className="footer-container">
      <Card className="footer-grid-icon">
        {footerGrid.map((item, i) => {
          return (
            <Box className="card" key={i}>
              <img alt="grid" src={item.img} width="75px" />
              <Box sx={{ ml: 2 }}>
                <Typography component="div" variant="h6">
                  {item.name}
                </Typography>

                <Typography sx={{mt: 1}} component="div" variant="p">
                  {item.text}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Card>
              <Box className="footer-grid-card2">
                {footerGrid2.map((item, i) => {return(
                  <Box key={i}>
           <Typography component="div" variant="h6" sx={{ mb: 3 }}>
                  {item.name}
                </Typography>
               {item.category.map((item2, i2) => {
                  return (
                    <Link to="#">
                    <Box key={i2} 
                    sx={{display: "flex",
                  my: 2,
                  alignItems: "center",
                  color:"#fff"
                  }}
                    >
                      {item2.icon&&item2.icon}
                      <Typography
                      component="div"
                      variant="p"
                      sx={{ml:i===1&& 2}}
                      >{item2.nameText?item2.nameText:item2}</Typography>
                    </Box>
                    </Link>
                  );
                })} 
                </Box>
                )})}
 <Box>
  
 <Typography component="div" variant="h6" sx={{ mb: 3 }}>
                  Bizning Facebook
                </Typography>
                <img alt="facebook" src={Facebook}/>
 </Box>
              </Box>
    </Box>
  );
}

const footerGrid = [
  {
    img: grid1,
    name: "Endi bozorga borishga hojat yo'q",
    text: "Bizda qulay narxlar va uyga yetkazib berish mavjud",
  },
  {
    img: grid2,
    name: "Tez yetkazib berish",
    text: "Bizning xizmatimiz sizni ajablantiradi",
  },
  {
    img: grid3,
    name: "Siz uchun qulayliklar",
    text: "Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish kafolati",
  },
  {
    img: grid4,
    name: "Bo'lib to'lash",
    text: "3, 6, 9 va 12 oy davomida oldindan to'lovsiz",
  },
];

const footerGrid2 = [
  {
    name: "Malumotlar",
    category: [
      "Ommaviy oferta (Foydalanuvchi bitimi)",
      "Muddatli toʻlov asosida sotib olishning umumiy qoidalari",
      "Muddatli toʻlov shartlari",
      "Tovarlarni yetkazib berish va toʻlov turlari",
      "Buyurtmani bekor qilish va tovarni qaytarish",
      "Biz haqimizda",
    ],
  },
  {
    name: "Biz bilan aloqa",
    category: [
      { nameText: "+998 71 200 01 05", icon: <CallEndOutlined /> },
      { nameText: "info@asaxiy.uz", icon: <Sms /> },
      { nameText: "Cilonzor 3, Toshkent sh", icon: <LocationOnOutlined /> },
    ],
  },
];
