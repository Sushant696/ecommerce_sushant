import { useContext } from "react";
import StoreContext from "../../context/storeContext";

export default function Smartphone() {
const { data} = useContext(StoreContext)
  return (
    <div>
     hi {data.username}
    </div>
  );
}

// fuck man the problem was not in context or anything but the way i provided data so what should i do is in the file where api call is made i will make different state to fetch the data and pass those state to the context global state 