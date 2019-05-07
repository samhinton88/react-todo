export const seedTodos = [
  {
    location: 'The Park',
    title: 'Walk the dog',
    people: [],
    urgency: 1,
    color: 'rgba(120, 40, 20, 0.7)',
    scheduledDate: new Date(),
    id: 0
  },
  {
    location: 'Work',
    title: 'File the report',
    people: [],
    urgency: 5,
    color: 'rgba(240, 40, 20, 0.7)',
    scheduledDate: new Date(),
    id: 1
  },
  {
    location: 'Work',
    title: 'Meet with John',
    people: ['John'],
    urgency: 1,
    color: 'rgba(240, 240, 20, 0.7)',
    scheduledDate: new Date(),
    id: 2
  },
  {
    location: 'Garage',
    title: 'Clean the car',
    people: [],
    urgency: 1,
    color: 'rgba(40, 40, 220, 0.7)',
    scheduledDate: new Date(),
    complete: true,
    id: 3
  }
]