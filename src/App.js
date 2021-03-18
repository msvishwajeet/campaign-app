import React, { useState,useEffect } from 'react';
import { Switch, Route, Redirect, withRouter, Link } from 'react-router-dom';

import './index.scss';
import SideDrawer from './components/shared/side-drawer';
import LanguageSelector from './components/language-selector';
import { campaigns } from './utility/constants';
import { languages } from './utility/languages';
import { useStore } from './store/store';

const Campaigns = React.lazy(() =>
	import(/* webpackChunkName: "Campaigns" */ './components/campaigns')
);

const App = props => {
	const [showDrawer, setShowDrawer] = useState(false);
	const {globalState,dispatch} = useStore();


	function isActive(url) {
		return props.history.location.pathname === url;
	}

	useEffect(() => {
		console.log(globalState);  
	  },[globalState])
	  const { languageType } = globalState;
	  const language = languages[languageType];
	return (
		
			<div className='app'>
				{showDrawer ? (
					<SideDrawer
						toggleDrawer={flag => setShowDrawer(flag)}
						targetClass='nav-link'
					>
						<div className='mob-nav-items'>
							{Object.keys(campaigns).map(key => {
								return (
									<div
										key={key}
										className={
											isActive(key)
												? 'mob-nav-item active'
												: 'mob-nav-item'
										}
									>
										<Link
											to={key}
											className='nav-link'
										>
											{
												language[
													campaigns[key]
												]
											}
										</Link>
									</div>
								);
							})}
						</div>
					</SideDrawer>
				) : null}
				<header className='header'>
					<div className='middle'>
						<div className='logo'>
							<Link to='/campaign'>
								<img
									src='https://cdn-www.bluestacks.com/bs-images/bs-logo-new.png'
									alt='bluestacks'
								/>
							</Link>
						</div>
						<div
							className='menu-btn'
							onClick={() => setShowDrawer(true)}
						>
							<div className='nav-icon first'></div>
							<div className='nav-icon second'></div>
							<div className='nav-icon third'></div>
						</div>
					</div>
				</header>
				<section className='main-container'>
					<div className='campaigns-header desktop'>
						<div className='campaigns-header'>
							{language['Manage Campaigns']}
						</div>
						<LanguageSelector context={globalState} dispatch={dispatch} />
					
					</div>
					<div className='campaigns-header mobile'>
						<div className='campaigns-header-text'>
							{
								campaigns[
									props.history.location.pathname
								]
							}
						</div>
						<LanguageSelector context={globalState} dispatch={dispatch} />
					</div>

	
					<div className='navigation-tabs'>
						{Object.keys(campaigns).map(key => {
							const tabLinkText = campaigns[key];
							return (
								<div
									key={key}
									className={
										isActive(key)
											? 'nav-item active'
											: 'nav-item'
									}
								>
									<Link to={key}>
										{language[tabLinkText]}
									</Link>
								</div>
							);
						})}
					</div>

					<div className='navigations-component'>
						<Switch>
							<Route
								path='/*campaigns'
								exact
								component={() => (
									<React.Suspense
										fallback={
											<React.Fragment />
										}
									>
										<Campaigns {...props} />
									</React.Suspense>
								)}
							/>

							<Redirect
								from='/'
								to='/upcoming-campaigns'
							/>
						</Switch>
					</div>
				</section>
			</div>
		);
};

export default withRouter(React.memo(App));
