import "./widget.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import useFetch from "../../useFetch";
 
const Widget = ({ type }) => {
let fake_data;


const {data:DMG, loading, error} = useFetch("http://localhost:5000/tickets/DMG");
const {data:HELPDESK} = useFetch("http://localhost:5000/tickets/HELPDESK");
const {data:MEDIA} = useFetch("http://localhost:5000/tickets/MEDIA");
  if (loading) return <h1> loading </h1>
  if (error) console.log(error)

    switch (type) {
        case "DMG":
            fake_data = {
                title: "DMG",
                link: "see all usFDSFerss",
                counter: DMG,
                icon: <PersonOutlinedIcon className="icon" style={{
                    color: "crimson",
                    backgroundColor: "rgba(255,0,0,0.2)",
                }}/>,
                percentage:15,
            };
            break;
            case "HELPDESK":
            fake_data = {
                title: "HELPDESK",
                counter: HELPDESK,
                link: "see all usFDSFerss",
                icon: <PersonOutlinedIcon className="icon"/>,
                percentage:10,
            };
            break;
            case "MEDIA":
            fake_data = {
                title: "MEDIA",
                counter: MEDIA,
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
                <span className="title">{fake_data.title}</span>
                <div>last 24 hours</div>
                <div>TICKETS</div>
                <span className="counter">{fake_data.counter}</span>
                <span className="link">{fake_data.link}</span>
            </div>
            <div className="right">
                <div className="percentage">
                    <KeyboardArrowUpIcon/>
                    {fake_data.percentage} 
                </div>
                {fake_data.icon} 
            </div>
        </div>
    )
}

export default Widget