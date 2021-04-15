//Börja att klippa ut här

   var webringSites = [
        'http://www.empty-frames.com',
        'http://www.1outof3.se',
        'http://www.microscopictrance.com',
        'http://www.amidonenow.com',
        'http://www.diplomaprinter.biz',
        'http://www.findivanshobby.com',
        'http://www.online-ikebana.garden',
        'http://www.qwertyuiopasdfghjklzxcvbnm.life',
        'http://www.findtherightdocument.com',
        'http://www.connectome.nu',
        'http://www.destiny.exposed',
        'http://www.wordsdrifting.space',
        'http://www.cyrillicintersections.com',
        'http://www.rockyis.training',
        'http://www.learnaboutmodernart.com',
        'http://www.persiancarpetstakestime.digital'
    ];

  function randomWebringSite() {
        var i = parseInt(Math.random() * webringSites.length);
        location.href = webringSites[i];
    }

  function natureWebringInfo() {
      document.getElementById("natureLogo").src = "https://www.worldwidewebring.club/2021/embed/art-webring-hover.svg";
    }

  function natureWebringLogo() {
      document.getElementById("natureLogo").src = "https://www.worldwidewebring.club/2021/embed/art-webring.svg";
    }

// Sluta att klippa ut här