export interface User {
  id: string;
  name: string;
  lastname: string;
  phone: string;
  email: string;
  identification: string;
  position: string;
  recoveryToken: string | null;
  activationDate: string | null;
  role: string;
  status: string;
}

export interface Image {
  id: string;
  secure_url: string;
}

export interface Coworking {
  id: string;
  name: string;
  phone: string;
  email: string;
  open: string;
  close: string;
  address: string;
  country: string | null;
  state: string | null;
  city: string | null;
  lat: number | null;
  long: number | null;
  capacity: number;
  message: string;
  status: string;
  thumbnail: string | null;
  user: User[];
  images: Image[];
}
