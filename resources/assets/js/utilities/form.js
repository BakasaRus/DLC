class Form {
	constructor(data) {
		this.isValid = false;
		this.isVisible = false;
		this.originalData = data;
		this.ref = null;
		for (let field in data) {
			this[field] = data[field];
		}
	}

	data() {
		let data = {};
		for (let property in this.originalData) {
			data[property] = this[property];
		}
		return data;
	}

	setData(data) {
		for (let property in this.originalData) {
			this[property] = data[property];
		}
	}

	reset() {
		this.ref.reset();
	}

	validate() {
		return this.ref.validate();
	}

	show() {
		this.isVisible = true;
	}

	hide() {
		this.isVisible = false;
	}
}

export default Form;