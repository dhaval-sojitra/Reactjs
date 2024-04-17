import React, { useDebugValue, useState } from 'react'

export default function Getdata() {

    const [data, setdata] = useState([])
    function getdata() {
        fetch('https://swapi.py4e.com/api/films').then((response) => {
            return response.json()
        }).then((list) => {
            setdata(list.results)
        })
    }
    return (
        <div className='container'>

            {data.map((list) => {
                return (
                    <>
                        <table className="table table-striped">
                            <thead>
                                <th>Title</th>
                                <th>Director Name</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{list.title}</td>
                                    <td>{list.director}</td>
                                </tr>
                            </tbody>
                        </table>
                        {/* <h2></h2>
                <h3>{list.director}</h3> */}
                    </>
                )
            })}
            <div className="row justify-content-center">
                <div className="col-auto">
                    <button onClick={getdata} className="btn btn-primary">fetch</button>
                </div>
            </div>

        </div>
    )

}
