import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import LaunchesList from "../../components/launches_list/LaunchesList.component";
import MissionKey from "../../components/mission_key/MissionKey.component";

const GET_LAUNCHES = gql`
  query LaunchesQuery {
    launches {
      flight_number
      launch_date_local
      mission_name
      launch_success
    }
  }
`;

const Launches = () => {
  useEffect(() => {
    document.title = "SpaceX Launches";
  }, []);
  const { loading, error, data } = useQuery(GET_LAUNCHES);
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
  if (error) return <p>Error :(</p>;
  return (
    <div className="container">
      <MissionKey />
      <LaunchesList launches={data.launches} />
    </div>
  );
};

export default Launches;
