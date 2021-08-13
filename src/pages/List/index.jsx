import {
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

import Button from "@material-ui/core/Button";
import { Link as LinkIcon } from "@material-ui/icons";
import { useStyles } from "./styles";

const List = () => {
  const basicRows = [
    createData(
      "Yasaman Rezaee",
      ["Frontend development", "UI/UX", "GIT"],
      "/@yasa",
      "989120228862"
    ),
    createData(
      "Alireza Ghaffari",
      ["Marketing Manager", "SEO", "Consulting"],
      "/@arg",
      "989120228862"
    ),
  ];
  const [searchKey, setSearchKey] = useState("");
  const [rows, setRows] = useState(basicRows);
  const classes = useStyles();
  const history = useHistory();
  console.log(rows);

  function createData(name, expertiseList, clubLink, num) {
    return { name, expertiseList, clubLink, num };
  }

  const handleFilter = (e) => {
    setSearchKey(e.target.value?.toUpperCase());
  };

  useEffect(() => {
    if (searchKey) {
      let filteredRows = basicRows.filter(
        (r) =>
          r.name?.toUpperCase().includes(searchKey) ||
          r.expertiseList.find((item) =>
            item?.toUpperCase().includes(searchKey)
          ) ||
          r.clubLink?.toUpperCase().includes(searchKey)
      );

      setRows(filteredRows);
    } else {
      setRows(basicRows);
    }
  }, [searchKey]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleGoToProfile = () => {
    history.push("/profile");
  };

  return (
    <div>
      <Container className={classes.container} maxWidth="sm">
        <h1 className={classes.title}>Clubmate</h1>
        <div className={classes.Head}>
          <TextField
            className={classes.input}
            id="standard-basic"
            label="جستجو..."
            onChange={handleFilter}
            value={searchKey}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleGoToProfile}
          >
            ثبت نام
          </Button>
        </div>
        <TableContainer className={classes.table}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.oneLine}></TableCell>
                <TableCell className={classes.oneLine}>نام </TableCell>
                <TableCell className={classes.oneLine} align="right">
                  مهارت‌ها
                </TableCell>
                <TableCell className={classes.oneLine} align="right">
                  کلاب هاوس
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell
                    className={classes.cell}
                    component="th"
                    scope="row"
                  >
                    {index + 1}
                  </TableCell>
                  <TableCell className={classes.cell} align="right">
                    {row.name}
                  </TableCell>
                  <TableCell className={classes.cell} align="right">
                    {row.expertiseList.join(" | ")}
                  </TableCell>
                  <TableCell className={classes.cell} align="right">
                    <Link className={classes.link} to={row.clubLink || "/"}>
                      <LinkIcon />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default List;
