import React from "react";
import { ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import data from "./Data.json";

const SideNav = (props) => {
  const updateActives = (e) => {
    if (e.target.innerText.trim() === "Search") {
      props.updateActives(e.target.innerText.trim(), undefined, undefined);
    } else {
      props.updateActives(
        e.target.innerText.trim(),
        getCode(e.target.innerText.trim()).pathway,
        getCode(e.target.innerText.trim()).code
      );
    }
  };

  const getCode = (CareerCluster) => {
    for (var i = 0; i < data.length; i++) {
      if (data[i].CareerCluster === CareerCluster) {
        //RETURNS FIRST OCCOUPATION CODE IN SELECTED CLUSTER
        return {
          code: data[i].CareerPathway[0].Jobs[0].Code,
          pathway: data[i].CareerPathway[0].Pathway,
        };
      }
    }
  };

  const displayClusters = data.map((data) => {
    return (
      <LinkContainer
        key={data.CareerCluster}
        to={"/explore/" + getCode(data.CareerCluster).code}
        style={{
          backgroundColor:
            data.CareerCluster !== props.activeCluster ? "#ff683c" : "#ff8123",
          color:
            data.CareerCluster !== props.activeCluster ? "#ffa185" : "white",
          fontWeight: "bold",
          border: "0px",
          borderRadius: "0px",
        }}
      >
        <ListGroup.Item onClick={updateActives}>
          {data.CareerCluster}
        </ListGroup.Item>
      </LinkContainer>
    );
  });

  return (
    <div className="sidenav">
      <ListGroup>{displayClusters}</ListGroup>
    </div>
  );
};

export default SideNav;
