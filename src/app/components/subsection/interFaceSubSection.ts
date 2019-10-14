interface InterFaceSubSection {
  thing: string;
  section: string;
  description: string;
  short_description: string;
  subject: { title: string };
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
