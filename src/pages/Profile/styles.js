import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    margin: " 2rem auto",
    color: "#545454",
    fontSize: "28px",
    width: "100%",
    maxWidth: "1000px",
  },
  input: {
    width: "100%",
    margin: "12px auto",
  },
  button: {
    width: "100%",
    height: "50px",
    fontSize: "22px",
    background: "green",
    marginTop: "50px",

    "&:hover": {
      background: "green",
    },
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    marginBottom: "30px",
  },
}));
