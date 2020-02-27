interface InterFaceSubSection {
  thing: string;
  section: string;
  name: string;
  slug: string,
  img_path: string;
  description: string;
  short_description: string;
  subject: { title: string, price: string, stock: string };
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
