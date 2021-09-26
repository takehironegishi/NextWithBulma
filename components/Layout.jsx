import { Navbar } from "./Navbar";
import { ActiveResource } from "components/ActiveResource"


export const Layout = ({ children }) => (
  <>
    <Navbar />
    <ActiveResource />
    { children }
  </>
)