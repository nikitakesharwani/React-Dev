import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("Error Status: ", err.statusText);
  return (
    <div>
      <h1>Oops!!! Something went wrong</h1>
      <h3>{err.statusText}</h3>
    </div>
  );
};

export default Error;
