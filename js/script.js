
$(function() {
    $('.multiple-items').slick({
        infinite: true,
        // რამდენი სურათი უნდა გამოჩნდეს
        slidesToShow: 3,
        // სლაიდის დროს რადმენი ელემნტით უნდა აგდავიდეს
        slidesToScroll: 1,
        // რომ გამოჩნდეს ღილაკები _ next and previuos
        arrows: true,
        dots: true,
        //responsive styles
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
  
      });
  });
  
  
  
  
  
  // burger bar
  let navBlock = document.getElementById('navBlock');
  let togglebutton = document.getElementById('toggle-button');
  
  
  togglebutton.addEventListener('click',function(){
      navBlock.classList.toggle('active');
  
  })
  
  
  
      fetch('https://reqres.in/api/users?page=2', {
          method: 'GET'
      })
      .then(function(response) {
          if (response.status !== 200)
          throw response.status;
          return response.json();
      })
      .then(function(responseData) {
          console.log(responseData);
          let ul = document.createElement('ul');
          let fragment = document.createDocumentFragment();
  
          responseData.data.forEach(item => {
              let li = document.createElement('li');
              li.textContent = item.first_name + ' ' + item.last_name + ' ' + '-' +  ' ' +  '(' +  item.email + ')'
              fragment.appendChild(li)
          });
  
          ul.appendChild(fragment);
          document.getElementById('api').appendChild(ul);
      })
      .catch(function(error) {
          if (error == 404) {
              let p = document.createElement('p');
              p.textContent = 'Page Not Found';
              p.classList.add('error');
  
              document.getElementById('api').appendChild(p)
          } else {
              let p = document.createElement('p');
              p.textContent = 'Server Error';
              p.classList.add('error');
  
              document.getElementById('api').appendChild(p)
          }
  })
  
  
  
  
document.getElementById('send').addEventListener('click',function(){
    alert('Form was successfully sent!');

})

