import React from 'react';
import ReactDOM from 'react-dom';
import { useStore } from '../../store/store';
import 'react-datepicker/dist/react-datepicker.css';
import './campaigns.scss';
import ErrorBoundary from '../shared/error-boundary';
import Pricing from '../pricing';
import Modal from '../shared/modal';
import { formatDate, formatDays } from '../../utility/helpers';
import { languages } from '../../utility/languages';
import fileImage from '../../assets/images/file.png';
import reportImage from '../../assets/images/report.png';
import calendarImage from '../../assets/images/calendar.png';
import sample from '../../assets/sample/sample.csv';
import DatePicker from 'react-datepicker';

const Campaigns = props => {
	const { globalState, dispatch } = useStore();
	const { modal, campaignsData = {}, languageType } = globalState;
	const data =
		campaignsData[props.location.pathname.replace('/', '')];

	const language = languages[languageType];
	const onClose = () =>{
		dispatch({type:'SET_MODAL',payload:{
			show: false,
			children: null,
		}
	})
	}

	const updateCampaign = (val) => {
		dispatch({type:'SET_CAMPAIGN_DATA',payload:val})
	}
	return (
		<ErrorBoundary>

			<React.Fragment>
				<div className='campaigns-container'>
					<div className='campaigns-list-header'>
						<div className='campaigns-list-item'>
							<div className='item flex1'>
								{language['DATE']}
							</div>
							<div className='item flex2'>
								{language['CAMPAIGN']}
							</div>
							<div className='item flex3'>
								{language['VIEW']}
							</div>
							<div className='item flex4'>
								{language['ACTIONS']}
							</div>
						</div>
					</div>
					<div className='campaigns-list'>
						{data.map(campaign => {
							const {
								id,
								name,
								region,
								image_url,
								startAt,
								endAt,
							} = campaign;

							return (
								<div
									className='campaigns-list-item'
									key={id}
								>
									<div className='item flex1'>
										<div className='campaign-date'>
											<div className='camp-date'>
												{formatDate(
													startAt,
													language
												)}
											</div>
											<div className='camp-days'>
												{formatDays(
													startAt,
													endAt,
													language
												)}
											</div>
										</div>
									</div>
									<div className='item flex2'>
										<div className='campaign-info'>
											<div className='campaign-img'>
												<img
													src={image_url}
													alt='campaign'
												/>
											</div>
											<div className='campaign-name-countary'>
												<div className='campaign-name'>
													{name}
												</div>

												<div className='campaign-countary'>
													{region}
												</div>
											</div>
										</div>
									</div>
									<div className='item flex3'>
										<div
											className='campaign-view'
											onClick={() =>
													dispatch({type:'SET_MODAL',
													payload:{
														show: true,
														children: (
															<Pricing
																{...campaign}
																language={
																	language
																}
															/>
														)
													}
												})
											}
										>
											<div className='currency'>
												$
											</div>
											<div className='price'>
												<span>
													{language['VIEW_PRICE']}
												</span>
											</div>
										</div>
									</div>
									<div className='item flex4'>
										<div className='campaign-actions'>
										<a className='csv-link' href={sample} target="_blank" rel="noopener noreferrer" download='sample.csv'>
											<div className='campaign-csv'>
												<img
													src={fileImage}
													alt='file'
												/>
												<span className='text'>
													{
														language[
															'CSV'
														]
													}
												</span>
											</div>
											</a>
											<div className='campaign-report'>
												<img
													src={
														reportImage
													}
													alt='file'
												/>
												<span className='text'>
													{language['REPORT']}
												</span>
											</div>
											<div className='campaign-schedule'
											onClick={() =>
												dispatch({type:'SET_MODAL',
												payload:{
													show: true,
													children: (
														<React.Fragment>
														<h3 className='modal-header'>Schedule {name}</h3>
														<DatePicker
															selected={campaign.startAt}
															open={true}
															onChange={(date, e) => {
																updateCampaign({
																	...campaign,
																	startAt: new Date(date).valueOf(),
																});
																onClose();
															}}
															onClickOutside={() =>
																onClose()
															}
														/>
														</React.Fragment>
													)
												}
											})
										}
											>
												<img
													src={calendarImage}
													alt='file'
												/>
												<span className='text'>
													{language['SCH_AGAIN']}
												</span>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				{(() => {
					return ReactDOM.createPortal(
						modal.show ? <Modal {...modal} onClose={onClose} /> : null,
						document.body
					);
					})()
				}
			</React.Fragment>

		</ErrorBoundary>
	);
};

export default React.memo(Campaigns);
