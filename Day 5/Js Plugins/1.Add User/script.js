$('form').validate();

function createUser() {
  let name = $('input[name=name]').val();
  let username = $('input[name=username]').val();
  let email = $('input[name=email]').val();
  let phone = $('input[name=phone]').val();
  let website = $('input[name=website]').val();
  let addressStreet = $('input[name=addressStreet]').val();
  let addressSuite = $('input[name=addressSuite]').val();
  let addressCity = $('input[name=addressCity]').val();
  let addressZipcode = $('input[name=addressZipcode]').val();
  let addressGeoLat = $('input[name=addressGeoLat]').val();
  let addressGeoLng = $('input[name=addressGeoLng]').val();
  let companyName = $('input[name=companyName]').val();
  let companyCatchPhrase = $('input[name=companyCatchPhrase]').val();
  let companyBs = $('input[name=companyBs]').val();
  let root = 'http://jsonplaceholder.typicode.com';

  $.ajax({
    url: root + '/users',
    method: 'POST',
    body: JSON.stringify({
      name: name,
      username: username,
      email: email,
      phone: phone,
      website: website,
      address: {
        street: addressStreet,
        suite: addressSuite,
        city: addressCity,
        zipcode: addressZipcode,
        geo: {
          lat: addressGeoLat,
          lng: addressGeoLng
        }
      },
      company: {
        name: companyName,
        catchPhrase: companyCatchPhrase,
        bs: companyBs
      }
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(function (data) {
    new PNotify({
      title: 'User created',
      text: 'Id: ' + data.id,
      type: 'success'
    });
  })
  .catch(function (error) {
    new PNotify({
      title: error,
      type: 'error'
    });
  })
}
