window.onload = function () {
  const overlay = document.getElementById('overlay');

  const about = document.getElementById('about');
  const home = document.getElementById('home');
  const services = document.getElementById('services');
  const blog = document.getElementById('blog');
  const contact = document.getElementById('contact');

  //about
  const aboutText = document.getElementById('about-text');
  //services
  const servicesText = document.getElementById('services-text');
  //contact
  const contactText = document.getElementById('contact-text');

  //about click listener
  about.addEventListener('click', function (event) {
    event.preventDefault();

    //hide home top
    hideHomeTopSection();
    hideServices();
    hideContact();
    //show about
    showAbout();
  });

  //services click listener
  services.addEventListener('click', function (event) {
    event.preventDefault();

    //show hide home top
    showHomeTopSection();
    hideAbout();
    hideContact();
    //show about
    showServices();
  });

  //contact click listener
  contact.addEventListener('click', function (event) {
    event.preventDefault();

    //hide home top
    showHomeTopSection();
    hideAbout();
    hideServices();
    //show about
    showContact();
  });

  //hide home top section and change background color function
  function hideHomeTopSection() {
    overlay.style.height = 'auto';
    aboutText.style.padding = '50px 10px';

    document.getElementById('top-btn').style.visibility = 'hidden';
    document.getElementById('big-title').style.visibility = 'hidden';
    document.getElementById('overlay').style.background = 'none';
    document.getElementById('top-section').style.background = 'none';
    document.getElementById('curve').style.border = '0px none';
    document.getElementById('curve').style.boxShadow = '0 0 0';
    document.getElementById('curve').style.borderRadius = '0 0 0';
    // document.getElementById("curve").style.background = "#fff0dd";
    // document.getElementById("body").style.background = "#fff0dd";
  }

  //hide title and show home top section background
  function showHomeTopSection() {
    overlay.style.height = 'auto';
    aboutText.style.padding = '50px 10px';

    document.getElementById('top-btn').style.visibility = 'hidden';
    document.getElementById('big-title').style.visibility = 'hidden';
    document.getElementById('overlay').style.background =
      'rgb(255, 255, 255, 0.4)';
    document.getElementById('top-section').style.background =
      "url('/img/art.svg')";
    document.getElementById('curve').style.borderTop = '0 0';
    document.getElementById('curve').style.boxShadow = '0 0 0';
    document.getElementById('curve').style.borderRadius = '0';
    // document.getElementById("curve").style.background = "#fff0dd";
    // document.getElementById("body").style.background = "#fff0dd";
  }

  /*show about */
  function showAbout() {
    aboutText.style.visibility = 'visible';
    aboutText.style.height = 'auto';

    document.querySelector('#about-text img').style.height = 'auto';
  }

  /*hiding about */
  function hideAbout() {
    aboutText.style.visibility = 'hidden';
    aboutText.style.height = '0';
    document.querySelector('#about-text img').style.height = '0';
  }

  /*show Services */
  function showServices() {
    servicesText.style.visibility = 'visible';
    servicesText.style.height = 'auto';
  }

  /*hide Services */
  function hideServices() {
    servicesText.style.visibility = 'hidden';
    servicesText.style.height = '0';
  }

  /*show Contact */
  function showContact() {
    contactText.style.visibility = 'visible';
    contactText.style.height = 'auto';
  }

  /*hide Contact */
  function hideContact() {
    contactText.style.visibility = 'hidden';
    contactText.style.height = '0';
  }
};
