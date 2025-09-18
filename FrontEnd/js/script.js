new Vue({
  el: '.lineup-container',
  data: {
    dancers: [
      { name: 'DJ Nail', photo: 'FrontEnd/images/nail.jpg', bio: 'Underground DJ with shadow skills' },
      { name: 'MC Flipper', photo: 'FrontEnd/images/flipp.jpg', bio: 'Expert in rolling the crowd' },
      { name: 'Bboy Max-T', photo: 'FrontEnd/images/maxt.jpg', bio: 'BBoy, who is dancing fro over 25 years' }
    ],
    currentIndex: 0
  },
  methods: {
    nextCard() {
      if(this.currentIndex < this.dancers.length - 1) this.currentIndex++;
    },
    prevCard() {
      if(this.currentIndex > 0) this.currentIndex--;
    }
  }
});


document.querySelector('.preview .primary').addEventListener('click', () => {
  const tickets = document.getElementById('tickets');
  window.scrollTo({
    top: tickets.offsetTop - 50, 
    behavior: 'smooth'
  });
});