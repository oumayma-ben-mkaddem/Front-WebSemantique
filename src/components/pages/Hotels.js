import '../../App.css'
import axios from "axios";
import React, { useEffect, useState } from 'react'



const Hotels = (props) => {
    const [allHotelList, setAllHotelList] = useState([]);


    useEffect(
        () => {
            getHotels();
        }, [])

    const getHotels = async () => {
        await axios.get("http://localhost:8090/elitemchi/AllHotels").then(
            (response) => {
                setAllHotelList(response.data)
                console.log(response.data)

            });
    }

    const handleEtoiles = async (e) => {
        const id = e.target.value
        await axios.get('http://localhost:8090/elitemchi/hotelsParEtoile?a=' + id).then(
            (response) => {
                
                setAllHotelList(response.data)

                console.log('nbet '+response)


            })
    }


    return (
        <div>

            <section>
                <h3>Recherche Hotels par Nombre Etoiles</h3>
                <input type="number" min="1" max="5" defaultValue={1} placeholder='Search By reviews' onChange={handleEtoiles} />


            </section>

            <table >
                <thead>
                    <tr>
                        <th scope="col">NomHotel</th>
                        <th scope="col">places disponibles</th>
                        <th scope="col">nombres Etoiles</th>

                    </tr>
                </thead>
                <tbody>
                    {allHotelList?.map((c, key) => {
                        return <tr>
                            <td> {c.hotel} </td>
                            <td> {c.nbPlacesDisponibles} </td>
                            <td> {c.nbEtoiles} </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default Hotels

