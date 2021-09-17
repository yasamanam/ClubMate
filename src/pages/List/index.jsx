import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  CircularProgress
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";
import { Link as LinkIcon } from "@material-ui/icons";
import { useStyles } from "./styles";
import { getSkills, getUsers } from "../../server/api/usersApi";
import "../../index.css"

const List = () => {
  const basicRows = [
    createData(
      "در حال فراخوانی",
      ["در حال فراخوانی"],
      "",
      "در حال فراخوانی"
    ),
  ];
  const [searchKey, setSearchKey] = useState("");
  const [rows, setRows] = useState(basicRows);
  const [loading, setLoading] = useState(false);
  const [init, setInit] = useState([]);
  const classes = useStyles();
  const history = useHistory();
  console.log(rows);

  function createData(name, expertiseList, clubLink, num, email) {
    return { name, expertiseList, clubLink, num, email };
  }

  const handleFilter = (e) => {
    setSearchKey(e.target.value?.toUpperCase());
  };

  useEffect(() => {
    if (searchKey) {
      let filteredRows = init.filter(
        (r) =>
          r.name?.toUpperCase().includes(searchKey) ||
          r.expertiseList.find((item) =>
            item?.toUpperCase().includes(searchKey)
          ) ||
          r.clubLink?.toUpperCase().includes(searchKey)
      );

      setRows(filteredRows);
    } else {
      setRows(init);
    }
  }, [searchKey]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setLoading(true);
    getUsers().then(async (res) => {
      setLoading(false);
      const results = res?.data?.results;
      await getSkills().then(res => {
        const skills = res?.data?.results;
        if (results) {
          const newResults = [];

          results.map(result => {
            console.log("******", skills.filter(item => item.user));
            newResults.push(createData(result.name, skills.filter(item => item.user === result.id).map(i => { return i.title }), result.clubhouse_id, result.phone_number, result.email))
          })
          console.log("#####", newResults);
          setInit(newResults)
          setRows(newResults)
        }
      });

    }).catch(e => {

      setLoading(false);
    })


  }, [])

  const handleGoToProfile = () => {
    history.push("/profile");
  };

  return (
    <div>
      <Container className={classes.container} maxWidth="sm">
        <h1 className={classes.title}>Clubmate</h1>
        <div>
          <p style={{
            fontSize: "16px", textAlign: "justify"
          }}>
            کاربر گرامی، Clubmate مکانی رایگان برای درج مشخصات و توانمندی های شما کاربران عزیز است و برای هم افزایی ایرانیان در سراسر دنیا استفاده خواهد شد تا بتوانیم سریعتر و راحت تر یکدیگر را پیدا کنیم. محصول پیش رو نسخه یک میباشد و قرار است بنابر فیدبک و نظرات شما به آن ویژگیهای بسیاری افزوده شود. مشارکت شما کمک شایانی به توسعه این پروژه خواهد کرد.
          </p>
          <p style={{ fontSize: "16px" }}>نظرات خود را از طریق لینک ارسال نمایید <a style={{ fontSize: "16px", color: "#0fa50f" }} href="https://wa.me/+989124955173">ارسال نظر</a></p>
        </div>
        <div className={classes.btnWrap}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGoToProfile}
            style={{
              whiteSpace: 'nowrap'
            }}
            className={classes.btn}
          >
            ثبت‌ نام
          </Button>
        </div>

        <div className={classes.Head}>
          <TextField
            className={classes.input}
            id="standard-basic"
            label="جستجو..."
            onChange={handleFilter}
            value={searchKey}
          />

        </div>
        {loading ? <CircularProgress /> :
          <>
            {rows?.map((row, index) => (
              <a className={classes.userCard} target="_blank" href={"https://www.clubhouse.com/@" + row.clubLink?.replace("@", "")} >
                <h3 className={classes.userTitle}>{row.name}</h3>
                <p className={classes.text}>{row.expertiseList.join(" | ")}</p>
                <span className={classes.userLink}><LinkIcon/></span>
              </a>))}  </>
        } </Container>
    </div>
  );
};

export default List;
