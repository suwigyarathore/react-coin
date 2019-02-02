import React from "react";
import PropTypes from "prop-types";
import "./Loading.css";

const Loading = ({ width, height }) => {
  return <div className="Loading" style={{ width, height }} />;
};

Loading.defaultProps = {
  width: "28px",
  height: "28px"
};

Loading.PropTypes = {
  width: PropTypes.string,
  heighgt: PropTypes.string
};

export default Loading;
