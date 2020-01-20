export class Destination {
  id: number;
  region: string;
  description: string;
  deleted: boolean;
  images: string[];

  constructor(id: number, region: string, description: string, deleted: boolean, images: string[]) {
    this.id = id;
    this.region = region;
    this.description = description;
    this.deleted = deleted;
    this.images = images;
  }
}
