import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./GoBackLink.module.css";

const GoBackLink = () => {
  const location = useLocation();
  const locationRef = useRef(location.state ?? "/");
  console.log(location);
  return (
    <Link className={css.link} to={locationRef.current}>
      Go Back
    </Link>
  );
};

export default GoBackLink;
