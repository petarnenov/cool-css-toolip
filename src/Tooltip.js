import React from "react";
import PropTypes from "prop-types";
import Info from "./assets/info.svg";

import styles from "./Tooltip.module.scss";

const Tooltip = ({
  tooltip = "add tooltip text",
  width,
  height,
  marginLeft,
  opacity,
  cursor,
  fontSize,
  color,
  icon = Info,
  top
}) => {
  return (
    <span
      className={styles.tooltip}
      data-tooltip={tooltip}
      style={{
        "--tooltip-width": width,
        "--tooltip-height": height,
        "--tooltip-margin-left": marginLeft,
        "--tooltip-opacity": opacity,
        "--tooltip-cursor": cursor,
        "--tooltip-font-size": fontSize,
        "--tooltip-color": color,
        "--tooltip-top": top
      }}
    >
      <img src={icon} alt="tooltip icon" width="16" />
    </span>
  );
};

Tooltip.propTypes = {
  tooltip: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  marginLeft: PropTypes.string,
  opacity: PropTypes.string,
  cursor: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  top: PropTypes.string,
};

export default Tooltip;
