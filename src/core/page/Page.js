export class Page {
	constructor(params) {
		this.params = params || Date.now().toString()
	}

	getRoot() {
		throw new Error('Method "get root shouldnt be implemented"')
	}

	afterRender() {}

	destroy() {}
}
