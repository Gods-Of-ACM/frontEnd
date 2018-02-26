/**
*
* PageHeader
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class PageHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Header = styled.h1`
      border-radius:10px;
      padding: 0.15em 1em;
      margin: 0 1em;
      text-align: center;
      background-color: #FFFFFF;
      color: #222222;
      border: 2px solid #000000;
      /*text-shadow: -1px 0 #696969, 0 1px #696969, 1px 0 #696969, 0 -1px #696969;*//
    `;
    return (
      <div className="header">
        <Header>{this.props.title}</Header>
      </div>
    );
  }
}

PageHeader.propTypes = {
  title: PropTypes.string,
};

export default PageHeader;