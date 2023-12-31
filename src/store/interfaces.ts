export interface IAuthState {
  access_token: string | null;
  isAuthenticated: boolean | null;
  currentUser: object | any;
  newUser: object | any;
  error: any | null;
  loading: boolean;
  isEditing: boolean;
  uploading: boolean;
}

export interface IDestinationState {
  destinations: any[];
  next_page: number | null;
  current_page: number;
  randomDestination: any[];
  destination: object | any;
  error: any | null;
  loading: boolean;
  isSubmitting: boolean;
}

export interface IPostState {
  blogIds: string[];
  blogs: any;
  soleBlog: object | any;
  next_page: number | null;
  current_page: number;
  featured_blog: object | any;
  postsList: any[];
  error: any | null;
  loading: boolean;
  isCreating: boolean;
  isEditing: boolean;
  isDeleting: boolean;
  uploading: boolean;
}

export interface IExperienceState {
  experiences: any[];
  soleExperience: object | any;
  error: any | null;
  loading: boolean;
  isCreating: boolean;
  isEditing: boolean;
  isDeleting: boolean;
  uploading: boolean;
}

export interface IDinningState {
  dining: any[];
  error: any | null;
  slider_image: any[];
  loading: boolean;
}
export interface ICharterState {
  why_charter: any[];
  why_charter_images: object;
  error: any | null;
  general: object;
  loading: boolean;
}
export interface IHomeState {
  home: any[];
  error: any | null;
  loading: boolean;
}

export interface IOfferState {
  offers: any[];
  genericOffers: any[];
  error: any | null;
  loading: boolean;
  isCreating: boolean;
  isDeleting: boolean;
  isFetching: boolean;
  isEditing: boolean;
  soleOffer: object;
}

export interface IYachtState {
  yachtsList: any[];
  adminYachtsList: any[];
  flagList: any[];
  yachtFeaturesList: any[];
  homePortList: any[];
  extrasList: any[];
  inclusiveTermList: any[];
  waterToysList: any[];
  countryList: any[];
  soleYacht: object | any;
  error: any | null;
  loading: boolean;
  isCreating: boolean;
  isEditing: boolean;
  isFetching: boolean;
  code: any;
}
