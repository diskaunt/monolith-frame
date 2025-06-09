type LoadType = {
  loaded: boolean;
};

export function setLocalStorageLoaded(loaded: boolean) {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem('loaded', JSON.stringify(loaded));
}

// Получение значения из локального хранилища
export function getLocalStorageLoaded(): boolean {
  if (typeof localStorage === 'undefined') return false;
  const loaded = localStorage.getItem('loaded');
  return loaded ? JSON.parse(loaded) : false; // Если значение отсутствует, возвращаем false
}
