import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { dataToUi } from "./src/dataToUi";
import { categoryArrFunc } from "./src/categoryArr";


const getApiData = async () => {
  const res = await fetch(`https://anthonyfs.pythonanywhere.com/api/products/`);
//   console.log(res);
  try {
    if (!res.ok) {
      throw new Error(
        alert("Opss...Something went wrong.Please try again later ")
      );
    } else {
        const data =await res.json()
        // console.log(data); 
        dataToUi(data)
        categoryArrFunc(data)
    }
  } catch (error) {
    console.log(error);
  }
};
getApiData();

