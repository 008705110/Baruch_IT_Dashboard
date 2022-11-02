import "./featured.scss"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Tickets</h1>
                <MoreVertIcon fontsize="small"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
                </div>
                <p className="title">Totle tickets today</p>
                <p className="amount">3242 tickets</p>
                <p className="desc">Totle tickets today</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Today</div>
                        <div className="itemResult">
                            <KeyboardArrowUpIcon fontSize="big"/>
                            <div className="resultAmount">
                                12
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult">
                            <KeyboardArrowUpIcon fontSize="big"/>
                            <div className="resultAmount">
                                12
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Month</div>
                        <div className="itemResult">
                            <KeyboardArrowUpIcon fontSize="big"/>
                            <div className="resultAmount">
                                12
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured