export interface UserI {
  _id: string;
  name: string;
  image: string;
  email: string;
  phone: number;
  address: {
    country: string;
    state: string;
    city: string;
  };
  password?: string;
}
