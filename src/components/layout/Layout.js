import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby'

import css from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Wrap = css.div`
  width: 100%;
`;

const Layout = ({ children, light = false }) => (
  <>
    <Header light={light} />
    <Wrap>
      {children}
    </Wrap>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
