interface InterFaceWork {
  background: string;
  created_at: string;
  description: string;
  subject_id: any;
  id: string;
  is_status: string;
  logo: string;
  price: string;
  name: string;
  quizzes: any;
  section: { id: string, subject_id: string, parent_id: number, name: string, slug: string };
  section_id: string;
  seo_description: string;
  seo_keywords: string;
  short_description: string;
  slug: string;
  sort_lessons: string;
  storageLessons: any;
  updated_at: string;
  allLessons: [{
    id: string;
    is_status: string;
    name: string;
    section_id: string;
    slug: string;
  }];
}
