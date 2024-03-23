import React from 'react';
import PropTypes from 'prop-types';
import Info from './assets/info.svg';

import styles from './Tooltip.module.scss';

function Tooltip({
  tooltip = 'add tooltip text',
  width,
  height,
  marginLeft,
  opacity,
  cursor,
  fontSize,
  color,
  icon = Info,
  top,
  translateX,
  backgroundColor,
  textAlign,
  lineHeight,
  hoverOpacity,
}) {
  return (
    <span
      className={styles.tooltip}
      data-tooltip={tooltip}
      style={{
        '--tooltip-width': width,
        '--tooltip-height': height,
        '--tooltip-margin-left': marginLeft,
        '--tooltip-opacity': opacity,
        '--tooltip-cursor': cursor,
        '--tooltip-font-size': fontSize,
        '--tooltip-color': color,
        '--tooltip-top': top,
        '--tooltip-translate-x': translateX,
        '--tooltip-background-color': backgroundColor,
        '--tooltip-text-align': textAlign,
        '--tooltip-line-height': lineHeight,
        '--tooltip-hover-opacity': hoverOpacity,
      }}
    >
      <img src={icon} alt="tooltip icon" width="16" />
    </span>
  );
}

Tooltip.defaultProps = {
  tooltip: 'add tooltip text',
  width: '8rem',
  height: '1rem',
  marginLeft: '0.5rem',
  opacity: '0',
  cursor: 'help',
  fontSize: '1rem',
  color: '#333',
  icon: Info,
  top: '-1.75rem',
  translateX: '0',
  backgroundColor: '#e9e9f1',
  textAlign: 'left',
  lineHeight: '1rem',
  hoverOpacity: '1',
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
  translateX: PropTypes.string,
  backgroundColor: PropTypes.string,
  textAlign: PropTypes.string,
  lineHeight: PropTypes.string,
  hoverOpacity: PropTypes.string,
};

export default Tooltip;
