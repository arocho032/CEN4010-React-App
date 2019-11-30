import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

function EventPage(props) {
	return(
		<p>Not Found</p>
    );	
}

const mapStateToProps = createStructuredSelector({})

export function mapDispatchToProps(dispatch) {
	return {};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, memo)(Sidebar)