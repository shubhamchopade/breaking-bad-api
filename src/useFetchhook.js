import React, { useEffect, useState } from "react";

export const UseFetch = () => {
  const [state, setState] = useState({ num: 1, roll: "Hey!" });

  const {num, roll} = state

  return (
    <>
      <h1>Hi {num}</h1>
      <button onClick={() => setState(currNum => currNum + 1)}>Increment</button>
    </>
  );
};
