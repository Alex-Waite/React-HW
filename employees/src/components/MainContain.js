import React from "react";

import GetEmployees from "../utils/API"

import Jumbotron from "./Jumbotron"
import Navbar from "./Navbar"




function MainContain () {
    state = { 
        Employees: []
    }

    function renderEmployees() {
        GetEmployees().then(results => {
            this.setState({Employees: results.data.results})
        })
    }

    componentDidMount(() => {
        renderEmployees();
    }) 


    return (
    <div className="MainContain">
        <Jumbotron />
        <Navbar />
    </div>
    )}

export default MainContain