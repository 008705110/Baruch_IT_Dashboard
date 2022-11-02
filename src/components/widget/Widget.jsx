import "./widget.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
 
const Widget = ({ type }) => {
let data;

    switch (type) {
        case "DMG":
            data = {
                title: "DMG",
                link: "see all usFDSFerss",
                counter: 12,
                icon: <PersonOutlinedIcon className="icon" style={{
                    color: "crimson",
                    backgroundColor: "rgba(255,0,0,0.2)",
                }}/>,
                percentage:15,
            };
            break;
            case "HELPDESK":
            data = {
                title: "HELPDESK",
                counter: 432,
                link: "see all usFDSFerss",
                icon: <PersonOutlinedIcon className="icon"/>,
                percentage:10,
            };
            break;
            case "MEDIA":
            data = {
                title: "MEDIA",
                counter: 123,
                link: "see all usFDSFerss",
                icon: <PersonOutlinedIcon className="icon"/>,
                percentage:20,
            };
            break;
        default:
            break;
            
    }


    

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <div>last 24 hours</div>
                <div>TICKETS</div>
                <span className="counter">{data.counter}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage">
                    <KeyboardArrowUpIcon/>
                    {data.percentage} %
                </div>
                {data.icon} 
            </div>
        </div>
    )
}

export default Widget