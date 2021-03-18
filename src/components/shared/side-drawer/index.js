import React, { useEffect, useRef } from 'react';
import { languages } from '../../../utility/languages';
import './side-drawer.scss';
import { useStore } from '../../../store/store';
const SideDrawer = props => {
	useEffect(() => {
		setTimeout(() => {
			openNav();
		}, 0);
	}, []);
	const {globalState} = useStore();

	const drawerRef = useRef(null);
	const overlayRef = useRef(null);

	function openNav() {
		drawerRef.current.style.width = '70%';
		overlayRef.current.style.width = '100%';
	}

	function closeNav() {
		drawerRef.current.style.width = '0';
		overlayRef.current.style.width = '0';
		setTimeout(() => {
			typeof props.toggleDrawer === 'function' &&
				props.toggleDrawer(false);
		}, 500);
	}

	function clickHandler(e) {
		const classList = [...e.target.classList];

		if (
			classList.includes('drawer-overlay') ||
			classList.includes('closebtn')
		) {
			closeNav();
		} else if (classList.includes(props.targetClass)) {
			closeNav();
		}
	}
	const { languageType } = globalState;
	const language = languages[languageType];

	return (
		<React.Fragment>
			<div onClick={clickHandler}>
				<div className='drawer-overlay' ref={overlayRef} />

				<div id='drawer' className='side-drawer' ref={drawerRef}>
					<div className='closebtn'>&times;</div>
					<div className='drawer-content'>
						<div className='nav-header'>{language['MANAGE_CAMPAIGN']}</div>
						<div className='nav-content'>{props.children}</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default React.memo(SideDrawer);
