import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import axios from "axios";

const Connectonet = () => {
  const [wifiscan, setWifiScan] = useState([]);
  let history = useHistory();
  const [selector, setSelector] = useState("");
  const [selclass, setSelClass] = useState("");
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://192.168.1.107:3000/api/wifi/scan",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.token}`
      }
    })
      .then(response => {
        console.log(response);
        setWifiScan(response.data.networks);
      })
      .catch(error => console.log(error));
  }, []);
  console.log("selector is", selector);
  return (
    <div>
      <div className="networkshead">Networks list</div>
      {wifiscan.map((i, id) => {
        return (
          <div key={id} onClick={() => setSelector(i)}>
            <p value={id} className="netlabel">
              {i}
            </p>

            <hr />
          </div>
        );
      })}
      <div className="netconnectbtndiv">
        <button className="netconnectbtn">Connect</button>
        <button
          className="netconnectbackbtn"
          onClick={() => history.push("/sess")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Connectonet;
