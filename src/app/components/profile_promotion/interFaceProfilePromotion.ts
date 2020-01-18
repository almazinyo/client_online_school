interface InterFaceProfilePromotion {
  id: number;
  name: string;
  color: string;
  sectionSubjects: {
    id: number;
    name: string;
    background: string;
    img: string;
    lessons: {
      id: number;
      name: string;
      img: string;
    }[];
  }[];
}
