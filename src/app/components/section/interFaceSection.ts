interface InterFaceSection {
  'title': string;
  'sectionSubjects': [
    {
      'section_id': number;
      'background': string;
      'slug': string;
      'description': string;
      'name': string;
      'lessons': [
        {
          'id': number;
          'slug': string;
          'lesson_name': string;
        }
        ]
    }
    ];
}
