import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Input,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";

import ChipInput from "material-ui-chip-input";
import { toast } from "react-toastify";
import { useStyles } from "./styles";
import { postNewUser, postUserSkills } from "../../server/api/usersApi";

const Profile = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [expertiseList, setExpertiseList] = useState([]);
  const history = useHistory();

  const handleAddChip = (chip) => {
    setExpertiseList([...expertiseList, chip]);
  };

  const handleDeleteChip = (chip, index) => {
    console.log(chip.toString(),expertiseList );
    setExpertiseList(expertiseList.filter((item) => item !== chip));
  };

  const handleSubmit = async (e) =>  {
    e.preventDefault();
 
    if (name && num && link && email) {
     await postNewUser({
        "name": name,
        "clubhouse_id": link,
        "email": email,
        "phone_number": num
    }, expertiseList)


      toast.success("با موفقیت اضافه شد");
      history.push("/");
    } else {
      toast.error("لطفا همه فیلدها را پر کنید");
    }
  };

  const handleGoToHome = () => {
    history.push("/");
  };

  return (
    <div>
      <Container className={classes.container} maxWidth="sm">
        <h1 className={classes.title}>فرم ثبت نام</h1>
        <Button
            variant="contained"
            color="primary"
            onClick={handleGoToHome}
            style={{float: "left"}}
          >
            بازگشت
          </Button>
        <form>
          <TextField
            className={classes.input}
            id="standard-basic"
            label="نام و نام خانوادگی"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            className={classes.input}
            id="standard-basic"
            label="شماره تماس"
            onChange={(e) => setNum(e.target.value)}
            value={num}
          />
          <p style={{fontSize: "14px"}}>شماره تماس شما محرمانه خواهد بود و در دسترس عموم قرار نمیگیرد</p>
          <TextField
            className={classes.input}
            id="standard-basic"
            label="ایمیل"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            className={classes.input}
            id="standard-basic"
            label="آیدی کلاب هاوس"
            onChange={(e) => setLink(e.target.value)}
            value={link}
          />
          <p style={{fontSize: "14px"}}>آیدی کلاب هاوس در قسمت پروفایل شما نوشته شده و با @ مشخص شده است.</p>
          <ChipInput
            placeholder="مهارتها"
            className={classes.input}
            value={expertiseList}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip, index) => handleDeleteChip(chip, index)}
          />
          <p style={{fontSize: "14px"}}>تخصص‌ها، بعد از نوشتن هر مهارت یا علاقه مندی دکمه Enter را بزنید</p>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            ثبت
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Profile;
