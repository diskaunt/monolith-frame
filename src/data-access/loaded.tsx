type LoadType = {
  loaded: boolean;
};

(global as any).load = { loaded: false } as LoadType;

export async function setLoaded(loaded: boolean) {
	(global.load as LoadType).loaded = loaded;
}

export async function getLoaded() {
	return global.load.loaded as boolean;
}

