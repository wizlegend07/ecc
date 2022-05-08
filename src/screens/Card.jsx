import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Card({ children }) {
  return (
    <div className="col-md-3 m-5 card card">
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
