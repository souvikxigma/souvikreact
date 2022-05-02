import React, { useEffect, useState } from 'react'


function Alllists() {
    const [val, setVal] = useState([]);
    useEffect(() => {
        allResults();
    })
    const allResults = () => {
        fetch(`https://99online.website:7047/api/allusers`)
            .then(response => response.json())
            .then(data => {
                setVal(data.data)
            });
    }
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        
                        <th scope="col">Name</th>
                        <th scope="col">State</th>
                        <th scope="col">At name</th>

                        <th scope="col">Property(Municipality)</th>
                        <th scope="col">Land(Panchyat)</th>
                        <th scope="col">Location</th>
                        <th scope="col">Taxes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        val.map((dynamicData) =>
                            <tr className=""> 
                            <td> {dynamicData.name}</td> 
                            <td> {dynamicData.state_name} </td>
                            <td> {dynamicData.at_name} </td>
                            <td> {dynamicData.property ? dynamicData.property : "-"} </td>
                            <td> {dynamicData.land ? dynamicData.land : "-"} </td>
                            <td> {dynamicData.location} </td>
                            <td> {dynamicData.taxes ? dynamicData.taxes : "-"} </td>
                            </tr>
                        )}

                    
                </tbody>
            </table>
        </div>
    )
}

export default Alllists