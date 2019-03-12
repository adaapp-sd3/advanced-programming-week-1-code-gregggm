class Student {
	constructor(name, tutorGroup) {
		const yearGroup = tutorGroup.slice(tutorGroup.length);
		const form = tutorGroup.slice(0, tutorGroup.length -1);

		this._name = name;
		this._yearGroup = yearGroup;
		this._form = form;
	}

	getName() {
		return this._name;
	}

	getYearGroup() {
		return this._yearGroup;
	}

	getForm() {
		return this._form;
	}
}
