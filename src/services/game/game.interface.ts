export interface IGame {
  id: number;
  description: string;
  title: string;
  tag: TagEnum;
  image: string;
}

export enum TagEnum {
  HOT = "HOT",
  NEW = "NEW",
}
