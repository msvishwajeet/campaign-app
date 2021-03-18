import React from 'react';

import './pricing.scss';

const Pricing = props => {
	const { name, region, price = {}, image_url, language } = props;
	return (
		<div className='pricing'>
			<div className='pricing-content'>
				<div className='pricing-header'>
					<div className='game-image'>
						<img src={image_url} alt='pubg' />
					</div>
					<div className='game-info'>
						<div className='game-name'>{name}</div>
						<div className='country'>{region}</div>
					</div>
				</div>
				<div className='pricing-body'>
					<div className='pricing-text'>{language['Pricing']}</div>
					<div className='packages'>
						{price.packages.map((p, idx) => {
							return (
								<div className='package' key={idx}>
									<div className='duration'>
										{language[p.duration]}
									</div>
									<div className='price'>{p.amount}</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className='pricing-footer'>
					<div className='pricing-footer-btn close'>
						<span className='pricing-footer-text close'>
							{language['Close']}
						</span>
					</div>
				</div>

				<div className='pricing-mob-btn close'>
					<span className='pricing-mob-icon close'>&times;</span>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Pricing);
