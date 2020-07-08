import React from "react";

import GetEmployees from "../utils/API"

import Jumbotron from "./Jumbotron"
import Table from "./Table"




class MainContain extends React.Component {
    state = { 
        Employees: []
    }
    
    // Use the randomuser.me API call to generate employees and add them to an array in state object
    CreateEmployees = () => {
        GetEmployees().then(results => {
            this.setState({Employees: results.data.results})
            console.log("Employees Succesful generation")
            console.log(this.state.Employees)
        }).catch((error) => console.log(error))
    }
    
    // Run on page first load "component first Print => do this"
    componentDidMount() {
        this.CreateEmployees()
    } 
    

    render() {
    return (
    <div className="MainContain">
        <Jumbotron />
        <Table />
    </div>
    )}
}
export default MainContain