import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Sidebar = () => {
    return (
        <div className ='sidebar'>
            <div className="top">
                <span className="logo">TICKET DASHBOARD</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">MAIN</p>
                    <li>
                        <PersonOutlineIcon className="icon"/>
                        <span>DMG</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon"/>
                        <span>Media</span>
                    </li>
                    <li>
                        <CreditCardIcon className="icon"/>
                        <span>Helpdesk</span>
                    </li>
                    <li>
                        <StoreIcon className="icon"/>
                        <span>MAIN</span>
                    </li>
                    <p className="title">MAIN</p>
                    <li>
                        <StoreIcon className="icon"/>
                        <span>MAIN</span>
                    </li>
                    <li>
                        <StoreIcon className="icon"/>
                        <span>MAIN</span>
                    </li>
                    <li>
                        <StoreIcon className="icon"/>
                        <span>MAIN</span>
                    </li>
                    <p className="title">MAIN</p>
                    <li>
                        <InsertChartIcon className="icon"/>
                        <span>Users</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon"/>
                        <span>profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon"/>
                        <span>logout </span>
                    </li>
                    
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        
        </div>
    )
}

export default Sidebar