import {ManType} from "./07";

let props: ManType;

beforeEach(() => {
  props = {
    name: "Anastsiia",
    age: 29,
    lessons: [{title: '1'}, {title: "2"}],
    address: {
      street: {
        title: 'Karbysheva'
      }
    }
  }
})

test("", () => {
  const {age, lessons, address: {street: {title}}} = props

  expect(age).toBe(29);
  expect(lessons.length).toBe(2);
  expect(title).toBe('Karbysheva');
})

test('', () => {
  const l1 = props.lessons[0];
  const l2 = props.lessons[1];

  const [ls1, ls2] = props.lessons;

  expect(l1.title).toBe('1');
  expect(l2.title).toBe('2');

  expect(ls1.title).toBe('1');
  expect(ls2.title).toBe('2');
})