export type OrderT = "asc" | "desc";
export type SortFieldT = "name" | "rating" | "";

export interface SpousesI {
   id: number | null;
   name: string | null;
   divorced: boolean | null;
   divorcedReason: string | null;
   sex: string | null;
   children: number | null;
   relation: string | null;
}
export interface FactsI {
   value: string;
}
export interface BirthdayI {
   value: string;
}
export interface DeathPlaceI {
   value: string;
}
export interface ProfessionI {
   value: string;
}

export interface MoviesT {
   id: number | null;
   name: string | null;
   alternativeName: string | null;
   enName?: null | string;
   rating: RatingT | null | number;
   general?: boolean | null;
   description?: string | null;
   enProfession?: string | null;
   type?: movieCategoriesEnT;
   poster?: PosterT;
   year?: number;
}

export type PersonsT = {
   id: number;
   name: string | null;
   enName: string | null;
   photo: string | null;
   sex?: string | null;
   growth?: number | null;
   birthday?: Date | string;
   death?: string | null;
   age?: number;
   enProfession?: string | null;
   birthPlace?: BirthdayI[];
   deathPlace?: DeathPlaceI[];
   spouses?: SpousesI[];
   countAwards?: number;
   description?: string | null;
   profession: ProfessionI[];
   // profession: ProfessionT;
   facts?: FactsI[];
   movies?: MoviesT[] | null;
   updatedAt?: Date | string | null;
   createdAt?: Date | string | null;
};

export type movieCategoriesEnT =
   | "anime"
   | "movie"
   | "cartoon"
   | "tv-series"
   | "animated-series";

export const movieCategoriesRu = [
   "Онлайн-кинотеатр",
   "Премии",
   "Сборы",
   "Сериалы",
   "Фильмы",
];

type PremierT = {
   world: Date | string | null;
   russia: Date | string | null;
   bluray: Date | string | null;
   dvd: Date | string | null;
   cinema: Date | string | null;
   digital: Date | string | null;
};

export type BudgetT = {
   value?: number;
   currency?: string;
};

export type FactsT = {
   value: string;
   type: string;
   spoiler: boolean;
};

export type CountiesT = {
   name: string;
};

export type EnProfessionT =
   | "director"
   | "writer"
   | "designer"
   | "composer"
   | "Person"
   | "editor"
   | "operator"
   | "producer"
   | "voice_Person"
   | "writer";
export type ProfessionT =
   | "режиссеры"
   | "художники"
   | "композиторы"
   | "актеры"
   | "монтажеры"
   | "операторы"
   | "продюсеры"
   | "актеры дубляжа"
   | "сценаристы";

export type PersonsTT = {
   id?: number | null;
   photo?: string | null;
   name?: string | null;
   enName?: string | null;
   description?: string | null;
   profession?: ProfessionT | null;
   enProfession?: EnProfessionT | null;
};

export type NamesT = {
   name: string;
   language?: string;
   type?: null | string[];
};

export type PosterT = {
   url: string | null;
   previewUrl: string | null;
};

export type RatingT = {
   kp?: number | null;
   imdb?: number | null;
   await?: number | null;
   filmCritics?: number | null;
   russianFilmCritics?: number | null;
};

export type AudienceT = {
   count: number;
   country: string;
};

export type VideosT = {
   url: string | null;
   name: string | null;
   site: string | null;
   type: string | null;
};

export type ExternalIdT = {
   imdb?: string | null;
   tmdb?: number | null;
   kpHD?: string | null;
};

export type ProductionCompaniesT = {
   name: string;
   url: string | null;
   previewUrl: string | null;
};

export type SpokenLanguagesT = {
   name: string;
   nameEn: string;
};

export type DistributorsT = {
   distributor: string | null;
   distributorRelease: string | null;
};

export type TechnologyT = {
   hasImax: boolean;
   has3D: boolean;
};

export type ReleaseYearsT = {
   start: number | null;
   end: number | null;
};
export type SeasonsInfoT = {
   number: 0;
   episodesCount: 0;
};

type FilmT = {
   deletedAt?: Date | string | null;
   seriesLength: number | null;
   total?: number | null;
   totalSeriesLength: number | null;
   isSeries?: boolean;
   internalVotes?: number | null;
   internalRating?: number | null;
   releaseYears?: ReleaseYearsT[] | null;
   internalNames?: string[] | null;
   fees?: Record<string, BudgetT>;
   // fees?: Record<string, BudgetT | {}>;
   status: string | null;
   externalId?: ExternalIdT | null;
   rating: RatingT;
   votes: Record<string, number | null>;
   backdrop?: PosterT | null;
   movieLength: number | null;
   images?: {
      framesCount: number;
   };
   names?: NamesT[] | unknown[];
   productionCompanies?: ProductionCompaniesT[] | null;
   spokenLanguages?: SpokenLanguagesT[] | null;
   id?: number;
   type: string;
   name: string | null;
   description: string | null;
   distributors?: DistributorsT;
   premiere?: PremierT | null;
   slogan?: string | null;
   year: number;
   collections?: [];
   budget?: BudgetT;
   poster: PosterT | null;
   facts?: FactsT[] | null;
   genres: CountiesT[];
   countries: CountiesT[];
   seasonsInfo?: SeasonsInfoT[] | null;
   persons?: PersonsTT[] | null;
   lists?: string[] | null;
   typeNumber: number;
   alternativeName: string | null;
   enName?: null | string;
   ageRating: number | null;
   ratingMpaa: string | null;
   sequelsAndPrequels?: MoviesT[] | null;
   shortDescription: string | null;
   similarMovies?: MoviesT[] | null;
   technology?: TechnologyT | null;
   ticketsOnSale: boolean | null;
   createdAt?: Date | string | null;
   updatedAt?: Date | string | null;
   imagesInfo?: {
      framesCount: number;
   } | null;
   logo?: {
      url: string | null;
   } | null;
   watchability?: {
      items: unknown[];
   } | null;
   top10: number | null;
   top250: number | null;
   audience?: AudienceT[] | null;
   videos?: {
      trailers?: VideosT[];
   } | null;
   network?: unknown;
   networks?: unknown;
};

export type MovieTypesT =
   | "anime"
   | "movie"
   | "cartoon"
   | "tv-series"
   | "animated-series";
// getRandom
// https://api.kinopoisk.dev/v1.4/movie/random?type=movie
// https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&type=movie

// getByName page limit
// https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=name

export interface FilmByNameT1 {
   total: number;
   limit: number;
   page: number;
   pages: number;
}
export interface FilmByNameT2 {
   docs: FilmT[];
}

export type MockTenFilmDoc = {
   category: string;
   name: string;
   slug: string;
   moviesCount: number;
   cover: {
      url: string;
      previewUrl: string;
   };
   createdAt?: Date | string | null;
   updatedAt?: Date | string | null;
   id: string;
};

export type MockTenFilmsT = {
   // docs: MockTenFilmDoc[];
   docs: FilmT[];
} & FilmByNameT1;

export default FilmT;
