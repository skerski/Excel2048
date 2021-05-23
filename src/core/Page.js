export class Page {
	constructor(params) {
		this.params = params
	}

	getRoot() {
		throw new Error('Method "get root shouldnt be implemented"')
	}

	afterRender() {}

	destroy() {}
}
