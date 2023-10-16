const cars = document.querySelectorAll('.car');

cars.forEach(car => {
    const sound = car.querySelector('.car-sound');
    car.addEventListener('mouseenter', () => {
        sound.currentTime = 0;
        sound.play();
    });
});
