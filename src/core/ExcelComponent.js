import { DomListener } from "@core/DomListener"

export class ExcelComponent extends DomListener {
	constructor($root, options = {}) {
		super($root, options.listeners)
		this.name = options.name || ""
		this.emitter = options.emitter
		this.unsubcribers = []

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

	$on(event, fn) {
		const unsub = this.emitter.subscribe(event, fn)
		this.unsubcribers.push(unsub)
	}

	//init component
	//add DOMListeners
	init() {
		this.initDOMListeners()
	}

	//remove components
	//remove DOMListeners
	destroy() {
		this.resetDOMListeners()
		this.unsubcribers.forEach(unsub => unsub())
	}
}
