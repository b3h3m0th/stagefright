export interface IShow {
  description?: string;
  location: {
    title: string;
    address: string;
    url?: string;
  };
  doors?: Date;
  start: Date;
  ticket: {
    label?: string;
    url?: string;
  };
}
