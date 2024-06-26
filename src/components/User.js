import { useState, useEffect } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Namaste React");
    }, 1000);
    console.log("useEffect");
    return () => {
      //this is like componentWillUnmount (it is used to clean to unfinished tasks)
      clearInterval(timer);
      console.log("return Block");
    };
  }, []);
  console.log("render");
  return (
    <div className="about-card">
      <h2>Count: {count}</h2>
      <h2>Name : {name}</h2>
      <h3>Location: {location}</h3>
      <h4>ID: Nikitakesh@gamil.com</h4>
    </div>
  );
};

export default User;

/**
 * useEffect(()=>{
 *  setInterval(()=>{
 * console.log("Namaste React");
 * },1000);
 *
 * },[])
 *
 *
 */
