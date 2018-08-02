import './Transition.scss';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
export default class Transition extends React.Component
{
	static defaultProps = {
		active: false, 
		timeout: { enter: 500, exit: 500 }, 
		classNames: 'transition', 
		unmountOnExit: true, 
		onExited: () => {}, 
	};
	render()
	{
		const { children } = this.props;
		const { active, timeout, classNames, unmountOnExit, onExited } = this.props;
		return (
			<div className="transition-container">
				<CSSTransition
					in={active}
					classNames={classNames}
					timeout={timeout}
					unmountOnExit={unmountOnExit}
					onExited={onExited}
				>
					{children}
				</CSSTransition>
			</div>
		);
	}
}