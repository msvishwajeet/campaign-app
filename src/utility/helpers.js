import localStorage from './localStorage';
import { campaignsData } from './constants';

/**
 * This function produces a random number between max and min value
 *
 * @param {number} min [holds minimum value]
 * @param {number} max [holds maximum value]
 * @returns {number}
 */
export function random(min = 100, max = 10000) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * returns a dynamic timestamp to generate dynamic date.
 *
 * @param {number} diff [hold number of days which is to be added or subtracted from current date]
 * @returns {number}
 */
export function randomDate(diff) {
	const d = new Date();
	return d.setDate(d.getDate() + diff);
}

/**
 * This function is used to sort all the campaigns according to timestamp and
 * to divide into three categories (upcoming, live and past campaings)
 *
 * @param {Array} data [holds list of campaigns]
 * @returns {object}
 */
export const formatData = data => {
	data = data.sort((c1, c2) => {
		return c1.startAt - c2.startAt;
	});

	const upcoming = [];
	const live = [];
	const past = [];

	const today = new Date().valueOf();

	data.forEach(campaign => {
		if (campaign.startAt <= today && today <= campaign.endAt) {
			live.push(campaign);
		} else if (campaign.startAt > today) {
			upcoming.push(campaign);
		} else {
			past.push(campaign);
		}
	});

	return {
		'upcoming-campaigns': upcoming,
		'live-campaigns': live,
		'past-campaigns': past.reverse(),
	};
};

/**
 * This function is used to get data.
 *
 * If data is not available in the localStorage then
 * 	store hard coded data in the cache then return
 */
export const getData = () => {
	let data = localStorage.get('campaigns-list');

	if (data) {
		return formatData(data);
	}

	localStorage.set('campaigns-list', campaignsData);
	return formatData(campaignsData);
};

/**
 * This function is used to update campaigns
 *
 * @param {object} campaign [holds campaign data which is to be updated]
 */
export const updateData = campaign => {
	let data = localStorage.get('campaigns-list');

	if (!data) {
		return getData();
	}

	data = data.map(item => {
		if (item.id === campaign.id) {
			return campaign;
		}

		return item;
	});

	localStorage.set('campaigns-list', data);

	return formatData(data);
};

const MONTHS = [
	'Jan',
	'Feb',
	'March',
	'April',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

/**
 * This function is used to return a formatted date for the UI.
 *
 * @param {timestamp} date [holds timestamp of the date]
 */
export const formatDate = (date, language) => {
	const d = new Date(date);

	const year = d.getFullYear();
	const month = MONTHS[d.getMonth()];

	const day = d.getDate();

	return `${language[month]} ${[year]}, ${day}`;
};

export const formatDays = (startAt, endAt, language) => {
	const d = new Date().valueOf();

	const diff = Math.abs(startAt - d);
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));

	if (startAt <= d && d <= endAt) {
		return `${language['END_ON']} ${formatDate(endAt, language)}`;
	}

	return d < startAt
		? `${days} ${language['DAY_AHEAD']}`
		: `${days} ${language['DAY_AGO']}`;
};
