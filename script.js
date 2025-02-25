AOS.init({
    duration: 1200, // Animation duration in milliseconds
    once: true // Animation should happen only once
  });


  $(document).ready(function(){
    // Smooth scrolling for links
    $('a.nav-link').on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });


  function initMap() {
    var location = { lat: -17.8906861, lng: 31.1927182 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: location
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }

  
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://example.com/send-email', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
      } else {
        alert('Failed to send message. Please try again.');
      }
    };
    
    xhr.send(JSON.stringify({
      name: name,
      email: email,
      subject: subject,
      message: message
    }));
  });
  