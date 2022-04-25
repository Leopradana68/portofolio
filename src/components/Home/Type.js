import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Mahasiswa ",
          "Politeknik Negeri lampung",
          " Tempat tinggal di ",
          " Bukit Kemuning",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
