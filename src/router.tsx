// @/src/router.tsx
import { Routes, Route } from "react-router-dom";

import { RouteHome } from "./Pages";
import RouteLogin from "./Pages/RouteLogin";
import RouteMyAccount from "./Pages/RouteMyAccount";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<RouteHome />} />
      <Route path="/login" element={<RouteLogin />} />
      <Route path="/minha-conta" element={<RouteMyAccount />} />
    </Routes>
  );
};