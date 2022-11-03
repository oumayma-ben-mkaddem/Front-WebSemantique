import axios from "axios";
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";

const Home = (props) => {
    const [companiesList, setCompaniesList] = useState([]);

    useEffect(
        () => {
            getAllCompanies();
        }, [])

    const getAllCompanies = async () => {
        await axios.get("http://localhost:8090/elitemchi/AllcompaniesAvion").then(
            (response) => {
                setCompaniesList(response.data)
                console.log(response.data)
                //console.log(clientList)

            });
    }
    return (
        
        //
        <div>
            <table className="bs-example container" data-example-id="striped-table">

                <thead>
                    <tr>
                    <h1 className="text-center">Companies list</h1>                        
                    </tr>
                </thead>
                <tbody>
                {companiesList?.map((c, key) => {
                        return <tr>
                            <td> {c.ca} </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
           

export default Home