export type VotesType = {
  count: number;
  value: number;
};

export type PunctuationType = {
  countOpinions: number;
  punctuation: number;
  votes: VotesType[];
};

export type ReviewType = {
  name: string;
  avatar: string;
  description: string;
  punctuation: number;
};

export type ProductType = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  price: number;
  description: string;
  ratings: number;
  category: string;
  stock: number;
  numOfReviews: number;
};

export type ProductTypeList = {
  id: number;
  name: string;
  price: number;
  ratings: number;
};

export type ProductStoreType = {
  id: number;
  name: string;
  price: number;
  count: number;
};

export type GtagEventType = {
  action: string;
  category: string;
  label: string;
  value: string;
};
