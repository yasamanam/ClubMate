import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    margin: " 1rem auto",
    color: "#545454",
    fontSize: "28px",
    width: "100%",
    maxWidth: "1000px",
  },
  input: {
    width: "80%",
    maxWidth: "270px",
  },
  Head: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: "0",
    margin: "auto",
  },
  table: {
    margin: "30px auto",
    textAlign: "center",
  },
  link: {
    color: "green",
  },
  oneLine: {
    whiteSpace: "nowrap",
    textAlign: "center",
  },
  cell: {
    textAlign: "center",
    color: "#444444",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    marginBottom: "30px",
  },
}));
