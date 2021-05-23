import { defaultStyles, defaultTitle } from "@/constants"
import { storage, clone } from "@core/utils"

const defaultState = {
	title: defaultTitle,
	rowState: {},
	colState: {},
	dataState: {},
	stylesState: {},
	currentText: "",
	currentStyles: defaultStyles,
	openedDate: new Date().toJSON()
}

const normalize = state => ({
	...state,
	currentStyles: defaultStyles,
	currentText: "",
})

export function normalizeInitialState (state) {
	return state ? normalize(state) : clone(defaultState)
}