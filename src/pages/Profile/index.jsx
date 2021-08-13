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
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";

import ChipInput from "material-ui-chip-input";
import { toast } from "react-toastify";
import { useStyles } from "./styles";

const Profile = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [link, setLink] = useState("");
  const [expertiseList, setExpertiseList] = useState([]);
  const history = useHistory();

  const handleAddChip = (chip) => {
    console.log("gff", chip, expertiseList);
    setExpertiseList([...expertiseList, chip]);
  };

  const handleDeleteChip = (chip, index) => {
    setExpertiseList(expertiseList.filter((item) => item === chip));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && num && link && expertiseList?.length > 1) {
      toast.success("با موفقیت اضافه شد");
      history.push("/");
    } else {
      toast.error("لطفا همه فیلدها را پر کنید");
    }
  };

  console.log(expertiseList);
  return (
    <div>
      <Container className={classes.container} maxWidth="sm">
        <h1 className={classes.title}>فرم ثبت نام</h1>
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
          <TextField
            className={classes.input}
            id="standard-basic"
            label="لینک کلاب هاوس"
            onChange={(e) => setLink(e.target.value)}
            value={link}
          />
          <ChipInput
            placeholder="تخصص‌ها"
            className={classes.input}
            value={expertiseList}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip, index) => handleDeleteChip(chip, index)}
          />
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
