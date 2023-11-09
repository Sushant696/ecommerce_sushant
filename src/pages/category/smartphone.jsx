import  { useContext } from "react";
import { Context } from "../../context/context";

export default function Consumer() {
  const count = useContext(Context);

  return (
    <div>
      hello {count} hello
      {console.log(count)}
    </div>
  );
}