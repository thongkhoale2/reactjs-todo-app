import { memo } from "react";
import styles from "./general.module.scss";

function Home(props) {
  console.log("render");
  return <h2>Home Page {props.content}</h2>;
}

export default memo(Home);
