import './App.scss';
import React from 'react';
import { connect } from 'react-redux';
import LoadingOverlay from '../lib/LoadingOverlay';
@connect(state => state)
export default class App extends React.Component
{
	action(type, payload) 
	{
		return this.props.dispatch({ type, payload });
	}
	render()
	{
		const { overlayActive } = this.props;
		return (
			<div className="app content is-small">
				
				<div className="field">
					<div className="field-title">ろおでぃんぐおおばあれい : </div>
					<div className="field-body">
						<LoadingOverlay
							active={overlayActive}
						/>
					</div>
				</div>
			</div>
		);
	}
};