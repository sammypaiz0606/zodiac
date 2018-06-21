var zodiac = [
    {
        name:'aquarius',
        info:'this is the text for your horoscope sign',
        image: 'images/aquarius.png'
    },
    {
        name:'aries',
        info:'this is the text for your horoscope',
        image:'images/aries.png'
    },
     {
        name:'cancer',
        info:'this is the text for tyour horoscope',
        image:'images/cancer.png'
    },
    {
        name:'capricorn',
        info:'this is the text for tyour horoscope',
        image:'images/capricorn.png'
    },
    {
        name:'gemini',
        info:'this is the text for tyour horoscope',
        image:'images/gemini.png'
    },
    {
        name:'leo',
        info:'this is the text for tyour horoscope',
        image:'images/leo.png'
    },
    {
        name:'libra',
        info:'this is the text for tyour horoscope',
        image:'images/libra.png'
    },
    {
        name:'pisces',
        info:'this is the text for tyour horoscope',
        image:'images/pisces.png'
    },
    {
        name:'sagittarius',
        info:'this is the text for tyour horoscope',
        image:'images/sagittarius.png'
    }, 
    {
        name:'scorpio',
        info:'this is the text for tyour horoscope',
        image:'images/scorpio.png'
    }
];

function getZodiac() {
   
    var input = document.getElementById('userdata').value;
    console.log(input);
    console.log('Your horoscope is : ' + input);
    
    var i;
    for(i = 0; i < zodiac.length; i++) {
      if(input == zodiac[i].name) {
        document.getElementById('newSign').textContent = input;
        document.getElementById('img').src = zodiac[i].image;
        document.getElementById('yourInfo').textContent = zodiac[i].info;
        
       
        return;
      } else {
        document.getElementById('newSign').textContent = 'Not a match!';
        document.getElementById('img').src = '';
        document.getElementById('yourInfo').textContent = '';
      };

    };
};


