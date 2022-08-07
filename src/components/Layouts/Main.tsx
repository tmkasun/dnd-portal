import React from "react";
import "./Main.css";
type MainLayoutProps = {
  children: React.ReactNode;
}
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <main className="App">{children}</main>;
};

export default MainLayout;
