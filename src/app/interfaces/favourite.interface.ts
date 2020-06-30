export interface Favourite {
  created_at: string;
  id: number;
  image: Image;
  image_id: string;
  sub_id: string;
  user_id: string;
}

export interface Image {
  id: string;
  url: string;
}