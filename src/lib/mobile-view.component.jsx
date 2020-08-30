import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import StyledMobileView from './mobile-view.styles';

const propTypes = {
  children: PropTypes.node.isRequired,
  colors: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
    cam: PropTypes.string,
    screen: PropTypes.string,
  }),
  width: PropTypes.number,
  height: PropTypes.number,
}

const defaultProps = {
  colors: {
    primary: '#000',
    secondary: '#aaa',
    cam: '#aaa',
    screen: '#fff',
  },
  width: 100,
  height: 230,
}

const MobileViewComponent = ({
  children,
  height = 230,
  width = 100,
  colors = {},
  ...props
}) => {
  const [headerRef, setHeaderRef] = useState(null);

  const getHeaderRef = useCallback(
    (node) => {
      setHeaderRef(node);
    },
    []
  )

  const colorsSchema = useMemo(
    () => {
      return {
        primary: '#000',
        secondary: '#aaa',
        cam: '#aaa',
        screen: '#fff',
        ...colors,
      }
    },
    [colors]
  )

  return (
    <StyledMobileView
      height={height}
      width={width}
      headerWidth={headerRef ? headerRef.offsetWidth : 0}
      colors={colorsSchema}
      {...props}>
      <div className="top-border">
        <div className="top-border--opts" ref={getHeaderRef}>
          <div className="top-border--cam" />
          <div className="top-border--mic" />
        </div>
      </div>
      <div className="screen">
        <div className="screen--left-border"></div>
        <div className="screen--center">
          {children}
        </div>
        <div className="screen--right-border"></div>
      </div>
      <div className="remote" />
    </StyledMobileView>
  )
}

MobileViewComponent.propTypes = propTypes;
MobileViewComponent.defaultProps = defaultProps;

export default MobileViewComponent;
