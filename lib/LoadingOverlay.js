import './LoadingOverlay.scss';
import React from 'react';
import Transition from './Transition';
export default class LoadingOverlay extends React.Component
{
	static defaultProps = {
		active: false, 
		text: 'loading...', 
	}
	render()
	{
		const { active, text } = this.props;
		return (
			<div className="loading-overlay">

				<Transition active={active}>

					<div className="loading">
						<div className="loading-display">
							<div className="loading-icon">
								<span className="icon is-large">
									<i className="fas fa-circle-notch fa-2x fa-spin"></i>
								</span>
							</div>
							<div className="loading-text">
								{text}
							</div>
						</div>
					</div>
				
				</Transition>
			
			</div>
		);
	}
};