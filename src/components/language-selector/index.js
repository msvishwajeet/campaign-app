import React from 'react';
import './language-selector.scss';
import { languages } from '../../utility/languages';
import multiLanguageImg from '../../assets/images/mul-language.jpg';

const LanguageSelector = props => {
	const { dispatch, globalState } = props;
	const { languageType } = globalState;
	const language = languages[languageType];

	const selectHandler = (lang) => {
		dispatch({type:'SET_LANGUAGE', payload:lang});
		dispatch({type:'SET_MODAL',payload:{
			show: false,
			children: null,
		}})
	}
	const showLangSelect = () => {
		dispatch({type:'SET_MODAL',
		payload:{
			show: true,
			children: <React.Fragment>
			<h3 className='modal-header'>{language['SELECT_LANG']}</h3>
			<div className='language-dropdown'>
				
				<ul className='language-list'>
					<li className='language-list-item' onClick={()=>selectHandler('english')}>
						{language['LANG_ENG']}
					</li>
					<li className='language-list-item'  onClick={()=>selectHandler('german')}>
						{language['LANG_GER']}
					</li>
				</ul>
			</div>
			</React.Fragment>
			}})
	}
	

	return (
		<div className='language-selector' onClick={showLangSelect}>
			<span className='selector'>
				<span className='text desktop'>{language['SELECT_LANG']}</span>
				<img
					src={multiLanguageImg}
					alt={language['SELECT_LANG']}
					className='image mobile'
				/>
			</span>
		</div>
	);
};

export default LanguageSelector;
