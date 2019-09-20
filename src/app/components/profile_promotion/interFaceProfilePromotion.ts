interface InterFaceProfilePromotion {
  id: number;
  name: string;
  section: {
    id: number;
    name: string;
    background: string;
    lessons: {
      id: number;
      name: string;
      img: string;
    }[];
  }[];
}
