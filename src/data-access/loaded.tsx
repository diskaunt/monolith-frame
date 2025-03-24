type LoadType = {
  loaded: boolean;
};

export function setLocalStorageLoaded(loaded: boolean) {
  localStorage.setItem("loaded", JSON.stringify(loaded));
}

// Получение значения из локального хранилища
export function getLocalStorageLoaded(): boolean {
  const loaded = localStorage.getItem("loaded");
  return loaded ? JSON.parse(loaded) : false; // Если значение отсутствует, возвращаем false
}

