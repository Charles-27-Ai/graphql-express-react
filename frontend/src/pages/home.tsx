import React from 'react'
import { useQuery, gql } from "@apollo/client";
import ILaunch from '../interface/launch'

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number,
            mission_name,
            launch_date_local,            
            launch_success
        }
    }
`

const renderLaunchRow = (launch: ILaunch) => {
    if (launch) {
        const status = launch.launch_success ? "successful" : "failed"
        return (
            <tr key={launch.flight_number}>
                <td>{launch.flight_number}</td>
                <td>{launch.mission_name}</td>
                <td>{launch.launch_date_local}</td>
                <td>{status}</td>
            </tr>
        )
    }
}

const HomePage: React.FunctionComponent<any> = props => {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY)
    if (loading) return <h2 className="text-center">Loading...</h2>
    if (error) return <h2 className="text-center">Error: {error.message}</h2>
    return (
        <div className="container">
            <h1 className="text-center mb-3">List of Launches</h1>
            <div className="card my-2">
                <div className="card-body">
                    {/* <p>{JSON.stringify(data.launches)}</p> */}
                    <table className="table table-hover table-light">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">mission name</th>
                                <th scope="col">launch date</th>
                                <th scope="col">status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.launches.map((row: ILaunch) => {
                                return renderLaunchRow(row)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default HomePage