import React from 'react';
import PropTypes from 'prop-types';

export const ToolHeader = ({ headerText }) => <header>
    <h1>{headerText}</h1>
</header>

ToolHeader.defaultProps = {
    headerText: 'Tool Header',
};

ToolHeader.propTypes = {
    headerText: PropTypes.string.isRequired,
};