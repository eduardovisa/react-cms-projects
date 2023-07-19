export interface ProjectsInterface {
  title: string;
  urlCode: string;
  urlDemo: string;
  image: DataImage;
  level: string;
}

export interface DataImage {
  metadata: Metadata;
  sys: ImageSys;
  fields: Fields;
}

export interface Fields {
  title: string;
  description: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Details {
  size: number;
  image: DetailsImage;
}

export interface DetailsImage {
  width: number;
  height: number;
}

export interface Metadata {
  tags: unknown[];
}

export interface ImageSys {
  space: Environment;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Environment;
  revision: number;
  locale: string;
}

export interface Environment {
  sys: EnvironmentSys;
}

export interface EnvironmentSys {
  id: string;
  type: string;
  linkType: string;
}
