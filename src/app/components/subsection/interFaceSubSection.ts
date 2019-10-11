interface InterFaceSubSection {
  thing: string;
  section: string;
  description: string;
  courses: [{
    background: string;
    name: string;
    slug: string;
    description: string;
    lessons: [{
      name: string;
      price: string;
    }]
  }];
}
