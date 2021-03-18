class localStorage {
	get(key) {
		let data = window.localStorage.getItem('bluestack-campaigns') || '{}';

		data = JSON.parse(data);

		return data[key];
	}

	set(key, val) {
		let data = window.localStorage.getItem(key) || '{}';

		data = JSON.parse(data);

		data = {
			...data,
			[key]: val,
		};

		window.localStorage.setItem(
			'bluestack-campaigns',
			JSON.stringify(data)
		);
	}

	remove(key) {
		let data = window.localStorage.getItem(key) || '{}';

		data = JSON.stringify(data);

		delete data[key];

		window.localStorage.setItem(
			'bluestack-campaigns',
			JSON.stringify(data)
		);
	}

	clear() {
		window.localStorage.clear('bluestack-campaigns');
	}
}

export default new localStorage();
