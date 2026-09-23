// data/images.ts

export interface ImageData {
  src: string;
  name?: string;
  placeholder?: string;
}

export type ImagesSource =
  | {
      type: "local";
      folder: string;
    }
  | {
      type: "supabase";
      bucket: string;
      folder?: string;
    };
