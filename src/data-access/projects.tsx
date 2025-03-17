interface ProjectType {
  id: string;
  name: string;
  src: string;
  descr?: string;
  nav: boolean;
  card?: {
    adress: string;
    price: string;
    DueDate: string;
    information: string;
  };
}

global.projects = [
  {
    id: 'KMTimiryazevsky',
    name: 'КМ Тимирязевский',
    src: '/images/KMTimiryazevsky.jpg',
    nav: true,
  },
  {
    id: 'KMAnkudievskyPark',
    name: 'КМ Анкудиновский Парк',
    src: '/images/KMAnkudievskyPark.jpg',
    nav: true,
  },
  {
    id: 'KMMolodezhny',
    name: 'КМ Молодежный',
    src: '/images/KMMolodezhny.jpg',
    nav: true,
  },
  {
    id: 'KMPrime',
    name: 'КМ Прайм',
    src: '/images/KMPrime.jpg',
    nav: true,
  },
  {
    id: 'KMFlagman',
    name: 'КМ Флагман',
    src: '/images/KMFlagman".jpg',
    nav: false,
  },
  {
    id: 'KMRiverPark',
    name: 'КМ Ривер Парк',
    src: '/images/KMRiverPark.jpg',
    descr: 'живите по-новому в знакомом месте',
    nav: true,

    card: {
      adress: 'Магаданская, 6А',
      price: '8 млн ₽',
      DueDate: '1 квартал, 24г',
      information:
        'Единственный жилой комплекс в Заречной части города с уникальной архитектурой и в максимальной близости к реке.',
    },
  },
  {
    id: 'KMResidencePrime',
    name: 'КМ Residence Prime',
    src: '/images/KMResidencePrime.jpg',
    descr: 'клубный дом уровня делюкс',
    nav: true,

    card: {
      adress: 'Барминская, 1А',
      price: '10 млн ₽',
      DueDate: '2 квартал, 23г',
      information:
        'Награда за достижения сильных людей Нижнего Новгорода. Уверенность, статус, признание и харизма это основа резиденции.',
    },
  },
  {
    id: 'KMTowerPlaza',
    name: 'КМ Tower Plaza',
    src: '/images/KMTowerPlaza.jpg',
    nav: true,
  },
] as Array<ProjectType>;

export async function getProject(projectId: string) {
  return global.projects.find((project) => project.id === projectId);
}

export async function getProjects() {
  return global.projects as Array<ProjectType>;
}

export type { ProjectType };
