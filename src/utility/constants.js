import { random, randomDate } from './helpers';

export const campaigns = {
	'/upcoming-campaigns': 'UC_CAMP',
	'/live-campaigns': 'LIVE_CAMP',
	'/past-campaigns': 'PAST_CAMP',
};

export const campaignsData = [
	{
		id: random(),
		name: 'PUBG MOBILE',
		region: 'US',
		createdOn: 1559807755098,
		startAt: randomDate(2),
		endAt: randomDate(2),
		price: {
			packages: [
				{
					duration: 'ONE_WEEK_ONE_MONTH',
					amount: '$ 100.00',
				},
				{
					duration: 'SIX_MONTH',
					amount: '$ 500.00',
				},
				{
					duration: 'ONE_YEAR',
					amount: '$ 900.00',
				},
			],
		},
		csv: 'Some CSV link for Whatsapp',
		report: 'Some report link for Whatsapp',
		image_url:
			'https://cdn-www.bluestacks.com/bs-images/VpoWDgQ2I_RlTNM1Srlo5Q0VQglr-gdbzJ48TwYRXM2U4iF75PMrv76rBiu5c3l1UJs.png',
	},
	{
		id: random(),
		name: 'Free Fire',
		region: 'US',
		createdOn: 1559807714999,
		startAt: randomDate(5),
		endAt: randomDate(5),
		price: {
			packages: [
				{
					duration: 'ONE_WEEK_ONE_MONTH',
					amount: '$ 50.00',
				},
				{
					duration: 'SIX_MONTH',
					amount: '$ 100.00',
				},
				{
					duration: 'ONE_YEAR',
					amount: '$ 500.00',
				},
			],
		},
		csv: 'Some CSV link for Whatsapp',
		report: 'Some report link for Whatsapp',
		image_url:
			'https://cdn-www.bluestacks.com/bs-images/YRT3BaR3BNhNv-ZVGQ7EFP-hXvp8Z7KXZdPtR-OlBzOfvsBgcT_XS9JSkddIceI1DMc.png',
	},
	{
		id: random(),
		name: 'Super Jewels Quest',
		region: 'CA, FR',
		createdOn: 1559806715124,
		startAt: randomDate(-5),
		endAt: randomDate(-4),
		price: {
			packages: [
				{
					duration: 'ONE_WEEK_ONE_MONTH',
					amount: '$ 100.00',
				},
				{
					duration: 'SIX_MONTH',
					amount: '$ 500.00',
				},
				{
					duration: 'ONE_YEAR',
					amount: '$ 900.00',
				},
			],
		},
		csv: 'Some CSV link for Super Jewels Quest',
		report: 'Some report link for Super Jewels Ques',
		image_url:
			'https://cdn-www.bluestacks.com/bs-images/7dd3fff2509cc96a4a4a2f96ad24a38c.png',
	},
	{
		id: random(),
		name: 'Mole Slayer',
		region: 'FR',
		createdOn: 1559806711124,
		startAt: randomDate(-20),
		endAt: randomDate(-25),
		price: {
			packages: [
				{
					duration: 'ONE_WEEK_ONE_MONTH',
					amount: '$ 100.00',
				},
				{
					duration: 'SIX_MONTH',
					amount: '$ 500.00',
				},
				{
					duration: 'ONE_YEAR',
					amount: '$ 900.00',
				},
			],
		},
		csv: 'Some CSV link for Mole Slayer',
		report: 'Some report link for Mole Slayer',
		image_url:
			'https://cdn-www.bluestacks.com/bs-images/1cb9dc86e0698365709446a9ad3ebf8f.png',
	},
	{
		id: random(),
		name: 'Mancala Mix',
		region: 'JP',
		createdOn: 1559806680124,
		startAt: randomDate(-1),
		endAt: randomDate(1),
		price: {
			packages: [
				{
					duration: 'ONE_WEEK_ONE_MONTH',
					amount: '$ 100.00',
				},
				{
					duration: 'SIX_MONTH',
					amount: '$ 500.00',
				},
				{
					duration: 'ONE_YEAR',
					amount: '$ 900.00',
				},
			],
		},
		csv: 'Some CSV link for Mancala Mix',
		report: 'Some report link for Mancala Mix',
		image_url:
			'https://cdn-www.bluestacks.com/bs-images/d92eba592b70acb618c85848157324f8.png',
	},
	{
		id: random(),
		name: 'Mancala Mix',
		region: 'JP',
		createdOn: 1559806680124,
		startAt: randomDate(-2),
		endAt: randomDate(2),
		price: {
			packages: [
				{
					duration: 'ONE_WEEK_ONE_MONTH',
					amount: '$ 100.00',
				},
				{
					duration: 'SIX_MONTH',
					amount: '$ 500.00',
				},
				{
					duration: 'ONE_YEAR',
					amount: '$ 900.00',
				},
			],
		},
		csv: 'Some CSV link for Mancala Mix',
		report: 'Some report link for Mancala Mix',
		image_url:
			'https://cdn-www.bluestacks.com/bs-images/d92eba592b70acb618c85848157324f8.png',
	},
	{
		id: random(),
		name: 'Call Of Duty',
		region: 'JP',
		createdOn: 1559806680124,
		startAt: randomDate(-3),
		endAt: randomDate(-2),
		price: {
			packages: [
				{
					duration: 'ONE_WEEK_ONE_MONTH',
					amount: '$ 100.00',
				},
				{
					duration: 'SIX_MONTH',
					amount: '$ 500.00',
				},
				{
					duration: 'ONE_YEAR',
					amount: '$ 900.00',
				},
			],
		},
		csv: 'Some CSV link for Mancala Mix',
		report: 'Some report link for Mancala Mix',
		image_url:
			'https://cdn-www.bluestacks.com/bs-images/Call-Of-Duty_EN11.jpg',
	},
	{
		id: random(),
		name: 'Days of Empire',
		region: 'JP',
		createdOn: 1559806680124,
		startAt: randomDate(-5),
		endAt: randomDate(10),
		price: {
			packages: [
				{
					duration: 'ONE_WEEK_ONE_MONTH',
					amount: '$ 100.00',
				},
				{
					duration: 'SIX_MONTH',
					amount: '$ 500.00',
				},
				{
					duration: 'ONE_YEAR',
					amount: '$ 900.00',
				},
			],
		},
		csv: 'Some CSV link for Mancala Mix',
		report: 'Some report link for Mancala Mix',
		image_url:
			'https://cdn-www.bluestacks.com/bs-images/and.onemt_.boe_.tr_.jpg',
	},
	{
		id: random(),
		name: 'Raid Shadow Legends',
		region: 'JP',
		createdOn: 1559806680124,
		startAt: randomDate(-40),
		endAt: randomDate(-35),
		price: {
			packages: [
				{
					duration: 'ONE_WEEK_ONE_MONTH',
					amount: '$ 100.00',
				},
				{
					duration: 'SIX_MONTH',
					amount: '$ 500.00',
				},
				{
					duration: 'ONE_YEAR',
					amount: '$ 900.00',
				},
			],
		},
		csv: 'Some CSV link for Mancala Mix',
		report: 'Some report link for Mancala Mix',
		image_url: 'https://cdn-www.bluestacks.com/bs-images/Raid31.jpg',
	},
	{
		id: random(),
		name: 'Marvel DUEL',
		region: 'US',
		createdOn: 1559806680124,
		startAt: randomDate(40),
		endAt: randomDate(45),
		price: {
			packages: [
				{
					duration: 'ONE_WEEK_ONE_MONTH',
					amount: '$ 100.00',
				},
				{
					duration: 'SIX_MONTH',
					amount: '$ 500.00',
				},
				{
					duration: 'ONE_YEAR',
					amount: '$ 900.00',
				},
			],
		},
		csv: 'Some CSV link for Mancala Mix',
		report: 'Some report link for Mancala Mix',
		image_url:
			'https://cdn-www.bluestacks.com/bs-images/com.netease.mduelna.jpg',
	},
	{
		id: random(),
		name: 'Kung Fu Attack',
		region: 'Canada',
		createdOn: 1559806680124,
		startAt: randomDate(60),
		endAt: randomDate(62),
		price: {
			packages: [
				{
					duration: 'ONE_WEEK_ONE_MONTH',
					amount: '$ 20.00',
				},
				{
					duration: 'SIX_MONTH',
					amount: '$ 50.00',
				},
				{
					duration: 'ONE_YEAR',
					amount: '$ 100.00',
				},
			],
		},
		csv: 'Some CSV link for Mancala Mix',
		report: 'Some report link for Mancala Mix',
		image_url:
			'https://d2u1q3j7uk6p0t.cloudfront.net/pZh-cbVLf7iT-ELv65ORroxVFDkzCmhEJvUtx_HfBUQkrQnntE-7D58ziTzvrVrzLJs=w184',
	},
	{
		id: random(),
		name: 'Jewel Jungle',
		region: 'Australia',
		createdOn: 1559806680124,
		startAt: randomDate(20),
		endAt: randomDate(25),
		price: {
			packages: [
				{
					duration: 'ONE_WEEK_ONE_MONTH',
					amount: '$ 10.00',
				},
				{
					duration: 'SIX_MONTH',
					amount: '$ 30.00',
				},
				{
					duration: 'ONE_YEAR',
					amount: '$ 50.00',
				},
			],
		},
		csv: 'Some CSV link for Mancala Mix',
		report: 'Some report link for Mancala Mix',
		image_url:
			'https://d2u1q3j7uk6p0t.cloudfront.net/Ew6iaQFej38RopqxWBoJy5FtK7enrB07x9wN7R3mHST7KGbWF2ri4tHrfvFh28E4n0M=w184',
	},
	{
		id: random(),
		name: 'Battle Royal',
		region: 'US',
		createdOn: 1559806680124,
		startAt: randomDate(40),
		endAt: randomDate(45),
		price: {
			packages: [
				{
					duration: 'ONE_WEEK_ONE_MONTH',
					amount: '$ 100.00',
				},
				{
					duration: 'SIX_MONTH',
					amount: '$ 500.00',
				},
				{
					duration: 'ONE_YEAR',
					amount: '$ 900.00',
				},
			],
		},
		csv: 'Some CSV link for Mancala Mix',
		report: 'Some report link for Mancala Mix',
		image_url:
			'https://bluestacks-www.s3.amazonaws.com/gp-images/LB46kTZsusJ9nOEdVaKVF567H4TKcowpnjBs9tq2ZlsaoldkJYXx-ZTiZK5z5ONULgI',
	},
	{
		id: random(),
		name: 'Bigo Live',
		region: 'US',
		createdOn: 1559806680124,
		startAt: randomDate(-1),
		endAt: randomDate(1),
		price: {
			packages: [
				{
					duration: 'ONE_WEEK_ONE_MONTH',
					amount: '$ 100.00',
				},
				{
					duration: 'SIX_MONTH',
					amount: '$ 500.00',
				},
				{
					duration: 'ONE_YEAR',
					amount: '$ 900.00',
				},
			],
		},
		csv: 'Some CSV link for Mancala Mix',
		report: 'Some report link for Mancala Mix',
		image_url:
			'https://cdn-www.bluestacks.com/bs-images/0f15caf4f45d9bf718175ca818ecd604.png',
	},
	{
		id: random(),
		name: 'Fortnite Mobile',
		region: 'US',
		createdOn: 1559806680124,
		startAt: randomDate(-4),
		endAt: randomDate(3),
		price: {
			packages: [
				{
					duration: 'ONE_WEEK_ONE_MONTH',
					amount: '$ 100.00',
				},
				{
					duration: 'SIX_MONTH',
					amount: '$ 500.00',
				},
				{
					duration: 'ONE_YEAR',
					amount: '$ 900.00',
				},
			],
		},
		csv: 'Some CSV link for Mancala Mix',
		report: 'Some report link for Mancala Mix',
		image_url: 'https://cdn-www.bluestacks.com/bs-images/300x300bb.png',
	},
	{
		id: random(),
		name: 'Sniper 3D',
		region: 'US',
		createdOn: 1559806680124,
		startAt: randomDate(-1),
		endAt: randomDate(5),
		price: {
			packages: [
				{
					duration: 'ONE_WEEK_ONE_MONTH',
					amount: '$ 100.00',
				},
				{
					duration: 'SIX_MONTH',
					amount: '$ 500.00',
				},
				{
					duration: 'ONE_YEAR',
					amount: '$ 900.00',
				},
			],
		},
		csv: 'Some CSV link for Mancala Mix',
		report: 'Some report link for Mancala Mix',
		image_url:
			'https://d2u1q3j7uk6p0t.cloudfront.net/mVlPRwyYHxpe54fO7U4FXmil9AMLcbayV4McRC7r6tW0iWiICD4-qKAPVW46lpAWBnU4=w184',
	},
];
