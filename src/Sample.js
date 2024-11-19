import React from "react";
import { useNavigate } from "react-router-dom";

class Sample extends React.Component {
  constructor(props) {
    super(props);
  }
  gotToLogin = () => {
    navigate("/login");
  };

  render() {
    return <>Sample class component</>;
  }
}

export default Sample;
