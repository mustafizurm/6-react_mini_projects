import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;


// {
//   "name": "Samsung Galaxy 15F",
//   "brand": "Samsung",
//   "category": "Phones",
//   "price": "480",
//   "description": "smartphone",
//   "createdAt": "2024-11-10",
//   "id": 1
// },
// {
//   "name": "Nokia X30",
//   "brand": "Nokia",
//   "category": "Phones",
//   "price": "580",
//   "description": "smartphone",
//   "createdAt": "2024-11-10",
//   "id": 2
// },
// {
//   "id": 1,
//   "name": "oppo f21 pro",
//   "brand": "oppo",
//   "category": "Phones",
//   "price": "454",
//   "description": "good product",
//   "createdAt": "Fri Dec 06"
// }