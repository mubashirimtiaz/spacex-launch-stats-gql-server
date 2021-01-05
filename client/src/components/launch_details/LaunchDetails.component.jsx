import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const GET_LAUNCH = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;
const LaunchDetails = () => {
  let { flight_number } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", { replace: true });
  };
  flight_number = parseInt(flight_number);
  const { loading, error, data } = useQuery(GET_LAUNCH, {
    variables: { flight_number },
  });
  if (loading)
    return (
      <div className="container">
        <div className="row">
          <div className="col md-12 text-center">
            <p className="lead">loading...</p>
          </div>
        </div>
      </div>
    );
  if (error) return `Error! ${error}`;

  const {
    mission_name,
    flight_number: flight_num,
    launch_year,
    launch_success,
    rocket: { rocket_id, rocket_name, rocket_type },
  } = data.launch;

  return (
    <div className="container">
      <h1 className="display-4 my-3">
        <span className="text-dark">Mission:</span> {mission_name}
      </h1>
      <h4 className="mb-3">Launch Details</h4>
      <ul className="list-group">
        <li className="list-group-item">Flight Number: {flight_num}</li>
        <li className="list-group-item">Launch Year: {launch_year}</li>
        <li className="list-group-item">
          Launch Successful:{" "}
          <span className={launch_success ? "text-success" : "text-danger"}>
            {launch_success ? "Yes" : "No"}
          </span>
        </li>
      </ul>

      <h4 className="my-3">Rocket Details</h4>
      <ul className="list-group">
        <li className="list-group-item">Rocket ID: {rocket_id}</li>
        <li className="list-group-item">Rocket Name: {rocket_name}</li>
        <li className="list-group-item">Rocket Type: {rocket_type}</li>
      </ul>
      <hr />
      <button className="btn btn-secondary" onClick={handleClick}>
        Back
      </button>
    </div>
  );
};

export default LaunchDetails;
