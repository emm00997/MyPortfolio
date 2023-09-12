window.addEventListener('scroll', () => {
    const vP= window.scrollY || window.pageYOffset;
  
    if (vP < 500) {
      document.body.style.backgroundColor = '#403328';
    } else if (vP > 500 && vP < 700) {
      document.body.style.backgroundColor = '#736355';
    } else if(vP > 700 && vP < 1000) {
        document.body.style.backgroundColor = "#736355"
    }
else {
      document.body.style.backgroundColor = '#736055';
    }
  });
