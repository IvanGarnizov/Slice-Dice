function renderTable() {
  let root = 'http://jsonplaceholder.typicode.com';

  $.ajax({
    url: root + '/users',
    method: 'GET'
  }).then(function(data) {
    let tbody = $('<tbody>');

    for (user of data) {
      let tr = $('<tr>');
      let tdId = $('<td>').text(user.id);
      let tdName = $('<td>').text(user.name);
      let tdUsername = $('<td>').text(user.username);
      let tdEmail = $('<td>').text(user.email);
      let tdPhone = $('<td>').text(user.phone);
      let tdWebsite = $('<td>').text(user.website);
      let tdAddressStreet = $('<td>').text(user.address.street);
      let tdAddressSuite = $('<td>').text(user.address.suite);
      let tdAddressCity = $('<td>').text(user.address.city);
      let tdAddressZipcode = $('<td>').text(user.address.zipcode);
      let tdAddressGeoLat = $('<td>').text(user.address.geo.lat);
      let tdAddressGeoLng = $('<td>').text(user.address.geo.lng);
      let tdCompanyName = $('<td>').text(user.company.name);
      let tdCompanyCatchPhrase = $('<td>').text(user.company.catchPhrase);
      let tdCompanyBs = $('<td>').text(user.company.bs);

      tr
        .append(tdId)
        .append(tdName)
        .append(tdUsername)
        .append(tdEmail)
        .append(tdPhone)
        .append(tdWebsite)
        .append(tdAddressStreet)
        .append(tdAddressSuite)
        .append(tdAddressCity)
        .append(tdAddressZipcode)
        .append(tdAddressGeoLat)
        .append(tdAddressGeoLng)
        .append(tdCompanyName)
        .append(tdCompanyCatchPhrase)
        .append(tdCompanyBs);
      tbody.append(tr);
    }

    $('table').append(tbody);
    $('table').DataTable({
      'lengthMenu': [[2, 5, 8, -1], [2, 5, 3, 'All']]
    });
  });
}
