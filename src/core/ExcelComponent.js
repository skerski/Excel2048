import { DomListener } from "@core/DomListener"

export class ExcelComponent extends DomListener {
	constructor($root, options = {}) {
		super($root, options.listeners)
		this.name = options.name || ""
		this.emitter = options.emitter
		this.subscribe = options.subscribe || []
		this.store = options.store
		this.unsubscribers = []

		this.prepare()
	}

	//returns component
	prepare() {}

	//returns pattern
	toHTML() {
		return ""
	}
	
	//notificate listener about event
	$emit(event, ...args) {
		this.emitter.emit(event, ...args)
	}

	//subscribing on event
	$on(event, fn) {
		const unsub = this.emitter.subscribe(event, fn)
		this.unsubscribers.push(unsub)
	}

	$dispatch(action) {
		this.store.dispatch(action)
	}

	storeChanged(){}

	isWatching(key) {
		return this.subscribe.includes(key)
	}

	//init component
	//add DOMListeners
	init() {
		this.initDOMListeners()
	}

	//remove components
	//remove DOMListeners
	destroy() {
		this.removeDOMListeners()
		this.unsubscribers.forEach(unsub => unsub())
	}
}
