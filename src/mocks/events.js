const data = [
  {
    date: '10-01-2018',
    hour: '10:00 - 10:40',
    event: 'Manicure',
    professional: 'Lucineia  (Suzano) 6°Andar',
    customer: '',
    phone: '',
    status: 'pending',
    price: 20,
    location: 'Suzano  6°Andar'
  },
  {
    date: '27-09-2019',
    hour: '11:20 - 12:00',
    event: 'Manicure',
    professional: 'Lucineia  (Suzano) 6°Andar',
    customer: '',
    phone: '',
    status: 'Atendido PAGO DINHEIRO',
    price: 22,
    location: 'Suzano  6°Andar'
  },
  {
    date: '30-11-2017',
    hour: '10:40 - 11:20',
    event: 'Manicure',
    professional: 'Regiane (Continental Sq.)',
    customer: '',
    phone: '',
    status: 'pending',
    price: 20.9,
    location: ''
  },
  {
    date: '13-06-2018',
    hour: '12:00 - 12:40',
    event: 'Manicure',
    professional: 'Regiane (Continental Sq.)',
    customer: '',
    phone: '',
    status: 'pending',
    price: 20,
    location: ''
  },
  {
    date: '24-10-2019',
    hour: '16:20 - 16:40',
    event: 'Design de Sobrancelhas',
    professional: 'Danielle (Nubank) HQ1',
    customer: '',
    phone: '',
    status: 'Atendido PAGO CARTÃO',
    price: 38,
    location: 'Nubank HQ1'
  },
  {
    date: '08-08-2017',
    hour: '11:00 - 11:40',
    event: 'Barba',
    professional: 'Leandro (99)',
    customer: '',
    phone: '',
    status: 'pending',
    price: 35,
    location: 'Nubank HQ1'
  },
  {
    date: '10-10-2019',
    hour: '15:20 - 15:40',
    event: 'Design de Sobrancelhas',
    professional: 'Débora (99)',
    customer: '',
    phone: '',
    status: 'Atendido PAGO CARTÃO',
    price: 35,
    location: 99
  },
  {
    date: '10-01-2018',
    hour: '12:40 - 13:20',
    event: 'Manicure',
    professional: 'Cristiane (Gradual)',
    customer: '',
    phone: '',
    status: 'pending',
    price: 20,
    location: 'Nubank HQ1'
  },
  {
    date: '07-07-2017',
    hour: '10:20 - 10:40',
    event: 'Quick Massage (15 min)',
    professional: 'Claudia (Gradual)',
    customer: '',
    phone: '',
    status: 'pending',
    price: 22,
    location: ''
  },
  {
    date: '07-07-2017',
    hour: '11:00 - 11:20',
    event: 'Quick Massage (15 min)',
    professional: 'Claudia (Gradual)',
    customer: '',
    phone: '',
    status: 'pending',
    price: 22,
    location: ''
  },
  {
    date: '14-07-2017',
    hour: '10:00 - 10:20',
    event: 'Quick Massage (15 min)',
    professional: 'Claudia (Gradual)',
    customer: '',
    phone: '',
    status: 'pending',
    price: 22,
    location: ''
  },
  {
    date: '14-07-2017',
    hour: '10:20 - 10:40',
    event: 'Quick Massage (15 min)',
    professional: 'Claudia (Gradual)',
    customer: '',
    phone: '',
    status: 'pending',
    price: 22,
    location: ''
  },
  {
    date: '18-08-2017',
    hour: '11:20 - 11:40',
    event: 'Quick Massage (15 min)',
    professional: 'Claudia (Gradual)',
    customer: '',
    phone: '',
    status: 'pending',
    price: 22,
    location: ''
  },
  {
    date: '18-08-2017',
    hour: '12:00 - 12:40',
    event: 'Quick Massage  (15min)',
    professional: 'Claudia (Gradual)',
    customer: '',
    phone: '',
    status: 'pending',
    price: 27,
    location: ''
  },
  {
    date: '25-08-2017',
    hour: '10:00 - 10:20',
    event: 'Quick Massage (15 min)',
    professional: 'Claudia (Gradual)',
    customer: '',
    phone: '',
    status: 'pending',
    price: 22,
    location: ''
  },
  {
    date: '25-08-2017',
    hour: '11:20 - 11:40',
    event: 'Quick Massage (15 min)',
    professional: 'Claudia (Gradual)',
    customer: '',
    phone: '',
    status: 'pending',
    price: 22,
    location: ''
  },
  {
    date: '22-09-2017',
    hour: '09:40 - 10:00',
    event: 'Quick Massage (15 min)',
    professional: 'Claudia (Gradual)',
    customer: '',
    phone: '',
    status: 'pending',
    price: 22,
    location: ''
  },
  {
    date: '29-09-2017',
    hour: '09:00 - 09:20',
    event: 'Quick Massage (15 min)',
    professional: 'Claudia (Gradual)',
    customer: '',
    phone: '',
    status: 'pending',
    price: 22,
    location: ''
  },
  {
    date: '29-09-2017',
    hour: '12:00 - 12:20',
    event: 'Quick Massage (15 min)',
    professional: 'Claudia (Gradual)',
    customer: '',
    phone: '',
    status: 'pending',
    price: 22,
    location: ''
  },
  {
    date: '29-09-2017',
    hour: '11:20 - 11:40',
    event: 'Quick Massage (15 min)',
    professional: 'Claudia (Gradual)',
    customer: '',
    phone: '',
    status: 'pending',
    price: 22,
    location: ''
  },
  {
    date: '12-01-2018',
    hour: '11:00 - 11:20',
    event: 'Quick Massage (15 min)',
    professional: 'Claudia (Gradual)',
    customer: '',
    phone: '',
    status: 'pending',
    price: 22,
    location: ''
  },
  {
    date: '12-01-2018',
    hour: '12:40 - 13:00',
    event: 'Quick Massage (15 min)',
    professional: 'Claudia (Gradual)',
    customer: '',
    phone: '',
    status: 'pending',
    price: 22,
    location: ''
  }
];

export { data };
