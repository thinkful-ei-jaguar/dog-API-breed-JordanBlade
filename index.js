console.log('hello world');

$(document).ready(function(){

  $('body').on('submit', 'form', function(event) {
    event.preventDefault();
    let breedType = $('input').val().toLowerCase();
    console.log(breedType);
    getDogImage(breedType);
  });

});

let getDogImage = function(breedType) {
  fetch(`https://dog.ceo/api/breed/${breedType}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
      displayResults(responseJson.message);
      if (responseJson.status === 'error') {
        alert("That's not a real breed!");
      }
      console.log(responseJson);
    })
    .catch(error => alert('nope, something went wrong'));
};

function displayResults(responseJson){
  
  //$('.results').empty();
  $('.results').html(
    `<img src="${responseJson}" class="img-result"/>`
  );
}