export interface IMusic {
  title: string;
  subtitle: string;
  type: string;
  releaseDate: Date;
  cover: string;
  link?: {
    youtube?: string;
    spotify?: string;
  };
}
