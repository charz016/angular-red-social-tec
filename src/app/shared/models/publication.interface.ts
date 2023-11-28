export interface Publication {
  id: string;
  description: string;
  img: string;
  likes: [];
  comments: PubliComment[];
}

export interface PubliComment {
  user: string;
  comment: string;
}
