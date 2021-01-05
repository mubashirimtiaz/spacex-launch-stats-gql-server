import React from "react";
import Launch from "../launch/Launch.component";

const LaunchesList = React.memo(({ launches }) => {
  return (
    <>
      {launches
        .filter((launch) => launch.flight_number < 110)
        .map((launch) => (
          <Launch key={launch.flight_number} {...launch} />
        ))}
    </>
  );
});

export default LaunchesList;
