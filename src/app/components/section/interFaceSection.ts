interface InterFaceSection {
  'label': string;
  'sections': [
    {
      'section_id': number;
      'background': string;
      'slug': string;
      'description': string;
      'section_name': string;
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
