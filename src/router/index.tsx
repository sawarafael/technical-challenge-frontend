import { Route, Routes } from "react-router-dom";

import { Products } from "@pages";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Products.List />} />
    </Routes>
  );
};

export default AppRoute;
