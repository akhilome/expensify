import moment from 'moment';

const expenses = [{
  id: '1',
  description: 'No',
  note: '',
  amount: 1930,
  createdAt: 0
}, {
  id: '2',
  description: 'Pain',
  note: '',
  amount: 950,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'No',
  note: '',
  amount: 550,
  createdAt: moment(0).add(4, 'days').valueOf()
}, {
  id: '4',
  description: 'Gain',
  note: '',
  amount: 13000,
  createdAt: moment(0).add(15, 'days').valueOf()
}];

export default expenses;
