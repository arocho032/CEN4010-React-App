import { SHOW_SIDEBAR } from './constants';

export function sidebarSetVisible(sidebarVisibility) {
	return {
		type: SHOW_SIDEBAR,
		sidebarVisibility: sidebarVisibility,
	};
}