test('should take only adults', () => {
  const ages = [14, 16, 20, 25, 39, 68, 70, 15, 18];

  const adults = ages.filter(age => age >= 18);

  expect(adults.length).toBe(6);
  expect(adults[0]).toBe(20);
})

test('should take courses cheaper 160', () => {
  type CourseType = {
    title: string;
    price: number;
  }

  const courses = [
    {
      title: 'HTML',
      price: 110,
    },
    {
      title: 'JS',
      price: 200,
    },
    {
      title: 'CSS',
      price: 150,
    },
  ]

  const cheapCourses = courses.filter(course => course.price < 160);

  expect(cheapCourses.length).toBe(2);
  expect(cheapCourses[0].title).toBe('HTML');
  expect(cheapCourses[1].title).toBe('CSS');
})