import {StudentType} from "../02-objects/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {
  student = {
    id: 1,
    name: 'Volodymyr',
    age: 30,
    isActive: false,
    address: {
      streetTittle: 'Komkova, 73',
      city: {
        title: 'Kherson',
        country: 'Ukraine',
      }
    },
    technologies: [
      {
        id: 1,
        title: 'HTML'
      },
      {
        id: 2,
        title: 'CSS'
      },
      {
        id: 3,
        title: 'JS'
      },
      {
        id: 4,
        title: 'TS'
      },
      {
        id: 5,
        title: 'React'
      },
    ]
  }
})

test('new tech slill shuld be added to student', () => {
  expect(student.technologies.length).toBe(5);

  addSkill(student, 'NodeJS');

  expect(student.technologies.length).toBe(6);
  expect(student.technologies[5].title).toBe('NodeJS');
  expect(student.technologies[5].id).toBeDefined();
})

test('student should be active', () => {
  expect(student.isActive).toBe(false);

  makeStudentActive(student);

  expect(student.isActive).toBe(true);
})

test('does student live in city', () => {
  const result1 = doesStudentLiveIn(student, 'Kyiv');
  const result2 = doesStudentLiveIn(student, 'Kherson');

  expect(result1).toBe(false);
  expect(result2).toBe(true);
})