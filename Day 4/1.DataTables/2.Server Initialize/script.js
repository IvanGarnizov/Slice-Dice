function renderTable() {
  let root = 'http://jsonplaceholder.typicode.com';

  $('table').DataTable({
    'processing': true,
    'serverSide': true,
    'ajax': {
      url: root + '/users',
      dataSrc: ''
    },
    'columns': [
      { 'data': 'id' },
      { 'data': 'name' },
      { 'data': 'username' },
      { 'data': 'email' },
      { 'data': 'phone' },
      { 'data': 'website' },
      { 'data': 'address.street' },
      { 'data': 'address.suite' },
      { 'data': 'address.city' },
      { 'data': 'address.zipcode' },
      { 'data': 'address.geo.lat' },
      { 'data': 'address.geo.lng' },
      { 'data': 'company.name' },
      { 'data': 'company.catchPhrase' },
      { 'data': 'company.bs' }
    ]
  });
}
