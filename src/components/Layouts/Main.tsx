import React from "react";
import "./Main.css";
export const MainLayout: React.FC = ({ children }) => {
  return <main className="App">{children}</main>;
};

export default MainLayout;
