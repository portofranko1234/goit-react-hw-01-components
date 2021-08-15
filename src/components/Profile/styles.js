import { createUseStyles } from "react-jss";

export default createUseStyles({
  profile: {
    display: "block",
    width: 270,
    margin: "10px auto 30px auto",
    borderRadius: 5,
  },

  description: {
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: "5px 5px 0 0",
  },

  avatar: {
    width: "50%",
    padding: 10,
  },

  stats: {
    display: "flex",
    justifyContent: "center",

    listStyle: "none",
    margin: 0,
    padding: "15px 5px 15px 5px",
    backgroundColor: "silver",
    borderRadius: "0 0 5px 5px",
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    margin: 0,
    paddingTop: 5,
    paddingBottom: 5,
  },

  tag: {
    color: "black",
    margin: 0,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 14,
  },

  location: {
    color: "black",
    margin: 0,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 14,
  },

  label: {
    display: "inline-flex",
    justifyContent: "center",
    width: 90,
    fontSize: 12,
  },

  quantity: {
    display: "inline-flex",
    justifyContent: "center",
    width: 90,
    color: "black",
    fontWeight: "bold",
  },
});
