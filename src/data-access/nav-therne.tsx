type NavType = {
  theme: 'dark' | 'light';
};

declare global {
		var nav: NavType;
	}

global.nav = { theme: 'light' } as NavType;

export async function setTheme(theme: 'dark' | 'light') {
  global.nav.theme = theme;
}

export async function getNavTheme() {
  return global.nav.theme;
}
export type { NavType };
