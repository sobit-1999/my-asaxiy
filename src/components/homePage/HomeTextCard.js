import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
  Box,
  Card,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import React from "react";
import phoneLogo from "../images/phone-logo.png";
import "./homePage.css"
export default function HomeTextCard() {
  const [open, setOpen] = React.useState(false);

  const handleClick = (e) => {
    setOpen(!open);
  };

  return (
    <>
      <Card sx={{ mt: 5, p: 2 }}>
        <Typography variant="h4" component="div">
          Asaxiy kompaniyasi haqida
        </Typography>
        <Typography variant="p" component="div" sx={{ my: 2 }}>
          Butun O‘zbekiston bo‘ylab maishiy texnika va elektronika tovarlarini
          yetkazib beruvchi kompaniyamizning asosiy afzalligi – ko‘p yillik ish
          tajribasi va yaxshi nom qozonib ulgurganidir. Asos solinganidan buyon
          Asaxiy internet-do‘koni va uning jamoasi iste’mol bozorining talablari
          tendensiyalarini tinimsiz kuzatib kelmoqda; bu esa bizga eng so‘nggi
          texnologiyalar va innovatsion yechimlardan hamisha boxabar bo‘lib
          turish imkonini beradi.
        </Typography>
        <Typography variant="p" component="div">
          Kompaniiya mutaxassislari mijozlarimizning istaklarini diqqat bilan
          o‘rganishadi, shu bois resurs doimiy tarzda hamyonbop narxlardagi
          sifatli yangi mahsulotlar bilan boyitilib kelmoqda.
        </Typography>

        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {category.map((item, i) => {
            return (
              <Box key={i}>
                {" "}
                <ListItemButton onClick={handleClick}>
                  <ListItemText primary={item.name} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText
                        primary={
                          <Typography component="div" variant="p">
                            {item.text}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </List>
                </Collapse>
              </Box>
            );
          })}
        </List>
        <Typography component="div" variant="p" sx={{ my: 5 }}>
          "Asaxiy Books" MCHJ <br />
          Ro'yxatdan o'tish raqami: 646439
          <br />
          INN: 305829008
          <br />
          MCHJ rahbari: Allayev Firuz Abdunasimovich
          <br />
        </Typography>
      </Card>
      {/* <Box className="logo-phone-card">
        <img alt="phone" src={phoneLogo} width="60%"/>
        <Box sx={{bgcolor:"blue"}}>
            kk
        </Box>
      </Box> */}
    </>
  );
}

const category = [
  {
    name: "Kompaniyaning ish tomoillari",
    text: `Har bir xaridor telefonlar va boshqa gadjetlarni qulay
    shart-sharoitlarda, maksimal darajada tez tanlay olishi
    kerak; shuning uchun biz intuitiv tushunarli menyu
    yaratganmiz, internetning yangi foydalanuvchilari ham uni
    o‘zlashtirib olishlari oson. Juda qulay bo‘lishini ko‘zlab
    biz menyu qismini tegishli bo‘limlarga ajratganmiz, ularda
    siz 15 ming xildan ortiq orgtexnika va unga yondosh
    tovarlarni topishingiz mumkin. Ular quyidagicha ko‘rinish
    olgan: • idish-tovoqlar – bu yerda siz kundalik
    turmushimizda ishlatiladigan turli-tuman uy-ro‘zg‘or
    buyumlarining eng keraklilarini topasiz. Do‘konimiz saytida
    taqdim etilgan tovarlar yuqori sifatga va mustahkamlikka
    ega; • konditsionerlar va uy iqlimi texnikasi – bu bo‘lim
    o‘z ehtiyojlaringizga mos tarzda foydali xaridlar
    qilishingizda ko‘maklashadi. Har bir tovarning tavsifi
    berilgan, bu esa to‘g‘ri tanlash imkonini beradi; •
    televizorlar, video va audio tovarlari navbatdagi bo‘limda
    joylashgan, bu bo‘lim maishiy texnika mahsulotlari nomiga
    munosib. Bu yerda zamon bilan hamqadam tarzdagi
    funksiyalarning to‘laqonli ro‘yxatiga ega bo‘lgan eng
    so‘nggi yangi mahsulotlar va ishlanmalar o‘rin olgan; •
    go‘zallik va salomatlik uchun texnika – doimiy
    xaridorlarimiz bo‘lmish ayol-qizlarga eng sevimli
    bo‘limlardan biri. Zero, ular salomatlikning qadriga
    yetishadi va to‘g‘ri ovqatlanish yo‘li bilan tabiiy
    go‘zallikka intilishadi; • Kompyuterlar va orgtexnika – eng
    katta bo‘lim, chunki u kompyuterlashtirish jarayonini
    osonlashtirishga va ish vaqti sarfini kamaytirishga
    mo‘ljallangan barcha turdagi aksessuarlar hamda yordamchi
    butlovchi qismlarni ham o‘z ichiga olgan. Shuningdek,
    Asaxiy.uz kompaniyamiz o‘yin servislari ishqibozlari haqida
    ham qayg‘uradi, geymerlar uchun bo‘limi buning yaqqol
    dalilidir. Bu yerda qudratli kompyuter ta’minoti
    mahsulotlari, o‘yinbop sichqoncha va klaviaturalar taqdim
    etilgan; ular o‘yin jarayonini maksimal darajada aniq va
    bexato amalga oshirishga imkon beradi. Mutolaa ixlosmandlari
    uchun esa biz audio kitoblar ko‘rinishida
    takomillashtirilgan adabiyot namunalarini taqdim etmoqdamiz;
    ularning janr va mavzulari yetarlicha keng ko‘lamli.
  `,
  },
  {
    name: "Bizning avzalliklarimiz",
    text: `
  Asaxiy.uz kompaniyasi o‘zining barcha imkoniyatlarini
  shiddat bilan kengaytirmoqda, bugun biz o‘z mijozlarimizga
  ancha-muncha chegirmalarni va bir qator shaharlarga tezkor
  yetkazib berishni taklif etmoqdamiz. Bizning xizmat
  ko‘rsatish hududimizga Andijon, Buxoro, Farg‘ona, Jizzax,
  Xorazm, Namangan, Navoiy, Qashqadaryo, Samarqand, Sirdaryo,
  Surxondaryo va butun Toshkent viloyatidagi, shuningdek,
  Qoraqalpog‘iston Respublikasidagi shaharlar kiradi. Bu hali
  biz tovar yetkazib berayotgan hududlarning to‘liq xaritasi
  emas. Bizning yetkazib berish hududlarimiz bilan batafsil
  tanishish uchun internet-do‘konimiz mutaxassisiga qo‘ng‘iroq
  qilishingiz mumkin, u sizni qiziqtiruvchi barcha
  ma’lumotlarni taqdim etadi. Do‘konimizning har bir xaridori
  – hurmatli mehmonimizdir, unga biz yoqimli chegirmalar va
  bonus dasturlarini taklif etamiz. Biz mijoz talablariga mos
  tovarlarni tanlash jarayonida unga to‘liq hamrohlik qilamiz
  va istalgan qulay usul bilan yetkazib berishni amalga
  oshiramiz`,
  },
];
