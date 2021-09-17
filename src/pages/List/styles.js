import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    margin: " 1rem auto",
    color: "#545454",
    fontSize: "28px",
    width: "100%",
    maxWidth: "1000px",
    textAlign: "center"
  },
  userCard: {
    margin: "15px auto",
    background: "#ffffff",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxShadow: "0 2px 9px #0000001a",
    borderRadius: "10px",
    boxSizing: "border-box",
    textDecoration: "none",
    color: "#5f5f5f",
    fontSize: "16px",
    textAlign: "left",
    position:"relative",
    
  },
  text: {
    textAlign: "justify"
  },
  userTitle: {
    fontSize: "20px",
    color: "#5f5f5f",
    margin: "0"
  },
  input: {
    width: "100%",
    padding: "10px 0",
    margin: "20px 0"
  },
  Head: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: "0",
    margin: "auto",
    display: 'block',
    width: "100%"
  },
  table: {
    margin: "auto",
    textAlign: "center",
  },
  userLink: {
    color: "green",
    position: "absolute",
    right: "20px"
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
  btn: {
    whiteSpace: "nowrap",
    margin: "auto",
    width: "300px",
    alignSelf: "center",
    padding: "11px",
    fontSize: "20px",
    background: "green",
    float: "left",

    "&:hover": {
      background: "#036103"
    }
  },
  btnWrap: {
    width: "100%",
    textAlign: "center",
    display: "flex",
    marginTop: "20px"
  },

}));
