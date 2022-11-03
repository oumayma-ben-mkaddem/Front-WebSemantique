import '../../App.css'
import axios from "axios";
import React, { useEffect, useState } from 'react'



const Products = (props) => {
    const [clientList, setClientList] = useState([]);

    useEffect(
        () => {
            getAllClients();
        }, [])

    const getAllClients = async () => {
        await axios.get("http://localhost:8090/elitemchi/clients").then(
            (response) => {
                setClientList(response.data)
                console.log(response.data)
                //console.log(clientList)

            });
    }


    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Prenom</th>
                        <th scope="col">Email </th>
                        <th scope="col">Age </th>
                    </tr>
                </thead>
                <tbody>
                    {clientList?.map((c, key) => {
                        return <tr>
                            <td> {c.nom} </td>
                            <td> {c.prenom} </td>
                            <td> {c.email} </td>
                            <td> {c.age} </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default Products 

