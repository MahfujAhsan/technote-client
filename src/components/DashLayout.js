import { Outlet } from "react-router-dom"
import DashFooter from "./DashFooter"
import DashHeader from "./DashHeader"

const DashLayout = () => {
  return (
    <>
        <DashHeader />
        <div className="dash-container">
            <Outlet></Outlet>
        </div>
        <DashFooter />
    </>
  )
}

export default DashLayout