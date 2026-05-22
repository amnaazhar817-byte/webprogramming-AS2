const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

document.addEventListener('DOMContentLoaded', () => {
    const scheduleButtons = document.querySelectorAll('.btn-schedule');

    scheduleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const doctorName = this.getAttribute('data-doctor');
            const availableDays = this.getAttribute('data-days');

            alert(`${doctorName} is available ${availableDays}. Please click the appointment block below to secure a consultation slot.`);
        });
    });
});