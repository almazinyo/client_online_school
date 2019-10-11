interface InterFaceWork {
  title: string;
  id: number;
  description: string;
  work: { 'order': number, type: string, url: string }[];
  allWorks: { id: number, name: string, slug: string, checked: string }[];
  test: { id: number, url: string }[];
}
