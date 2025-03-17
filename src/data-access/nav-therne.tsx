type NavType = {
  theme: 'dark' | 'light';
};

(global as any).nav = { theme: 'light' } as NavType;

export async function setTheme(theme: 'dark' | 'light') {
  (global.nav as NavType).theme = theme;
}

export async function getNavTheme() {
  return global.nav.theme as 'dark' | 'light';
}
export type { NavType };
