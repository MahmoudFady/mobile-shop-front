import { CommentI } from './comment.model';

export interface ProductI {
  _id: string;
  category: string;
  brand: string;
  model: string;
  images: string[];
  describtion: string;
  properties: {
    color: string;
    size: string;
    storage: string;
    ram: string;
    processor: string;
    battery: string;
  };
  price: number;
  discount: number;
  count: number;
  comments?: CommentI[];
}
