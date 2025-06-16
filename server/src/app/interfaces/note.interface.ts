export interface INoteTag {
  label: string;
  color: string;
}

export interface INote {
  title: string;
  content: string;
  category?: string;
  pinned?: boolean;
  tags: INoteTag[];
}
