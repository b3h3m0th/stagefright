export interface IShow {
  description?: string;
  location: {
    title: string;
    address: string;
    url?: URL;
  };
  doors?: Date;
  start: Date;
  ticket: {
    label?: string;
    url?: URL;
  };
}
