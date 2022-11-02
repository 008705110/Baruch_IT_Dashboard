import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Table from '../../components/table/Table'
import "./home.scss"


const Home = () => {
    return (
        <div className="home">  
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget type="DMG"/>
                    <Widget type="HELPDESK"/>
                    <Widget type="MEDIA"/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart title="Last 6 Months (ticket)" aspect={3} />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Recent ticket</div>
                    <Table/>
                </div>
            </div>
        </div>
    )
}

export default Home

