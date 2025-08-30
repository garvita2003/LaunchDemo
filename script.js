// document.addEventListener('DOMContentLoaded', () => {
//     const eventDate = new Date(2025, 8, 1, 10, 0, 0);

//     const countdownInterval = setInterval(() => {
//         const currentTime = new Date().getTime();
//         const distance = eventDate.getTime() - currentTime;

//         // If the countdown is finished
//         if (distance < 0) {
//             clearInterval(countdownInterval);
//             document.querySelector('.container').style.display = 'none';
//             document.getElementById('liveMessage').classList.remove('hidden');
//             createConfetti();
//         } else {

//             // Calculate and display countdown if it's not finished
//             const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//             const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//             const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//             document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
//             document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
//             document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
//             document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
//         }
//     }, 1000);
// });

// function getRandomColor() {
//     const colors = [
//         '#FF6347', // Tomato
//         '#FFD700', // Gold
//         '#32CD32', // LimeGreen
//         '#1E90FF', // DodgerBlue
//         '#FF69B4', // HotPink
//         '#BA55D3', // MediumPurple
//         '#00CED1', // DarkTurquoise
//         '#FFA500'  // Orange
//     ];
//     return colors[Math.floor(Math.random() * colors.length)];
// }

// function createConfetti() {
//     const confettiContainer = document.createElement('div');
//     confettiContainer.id = 'confetti-container';
//     document.body.appendChild(confettiContainer);

//     const numberOfConfettiPieces = 150; 

//     for (let i = 0; i < numberOfConfettiPieces; i++) {
//         const confetti = document.createElement('div');
//         confetti.classList.add('confetti-piece');
        
//         // Set random background color
//         confetti.style.backgroundColor = getRandomColor();

//         // Set random initial position from the top center
//         const startX = Math.random() * window.innerWidth;
//         const startY = Math.random() * window.innerHeight;
//         confetti.style.left = `${startX}px`;
//         confetti.style.top = `${startY}px`;

//         // Random rotation and size for variety
//         const rotation = Math.random() * 360;
//         const size = Math.random() * (12 - 6) + 6;
//         confetti.style.width = `${size}px`;
//         confetti.style.height = `${size}px`;
//         confetti.style.transform = `rotate(${rotation}deg)`;

//         // Random animation duration and delay for a natural fall
//         const duration = Math.random() * (6 - 3) + 3;
//         const delay = Math.random() * 3;
//         confetti.style.animationDuration = `${duration}s`;
//         confetti.style.animationDelay = `${delay}s`;

//         confettiContainer.appendChild(confetti);
//     }

//     setTimeout(() => {
//         const container = document.getElementById('confetti-container');
//         if (container) {
//             document.body.removeChild(container);
//         }
//     }, 300000);
// }





document.addEventListener('DOMContentLoaded', () => {
    // Set the event date to be 5 seconds from the current time
    const eventDate = new Date(new Date().getTime() + 10000);

    const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const distance = eventDate.getTime() - currentTime;

        // If the countdown is finished
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.container').style.display = 'none';
            document.getElementById('liveMessage').classList.remove('hidden');
            createConfetti();
        } else {
            // Calculate and display countdown
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
            document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
            document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
        }
    }, 1000);
});

function getRandomColor() {
    const colors = [
        '#FF6347', // Tomato
        '#FFD700', // Gold
        '#32CD32', // LimeGreen
        '#1E90FF', // DodgerBlue
        '#FF69B4', // HotPink
        '#BA55D3', // MediumPurple
        '#00CED1', // DarkTurquoise
        '#FFA500'  // Orange
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.id = 'confetti-container';
    document.body.appendChild(confettiContainer);

    const numberOfConfettiPieces = 150; 

    for (let i = 0; i < numberOfConfettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        
        // Set random background color
        confetti.style.backgroundColor = getRandomColor();

        // Set random initial position from the top center
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        confetti.style.left = `${startX}px`;
        confetti.style.top = `${startY}px`;

        // Random rotation and size for variety
        const rotation = Math.random() * 360;
        const size = Math.random() * (12 - 6) + 6;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.transform = `rotate(${rotation}deg)`;

        // Random animation duration and delay for a natural fall
        const duration = Math.random() * (6 - 3) + 3;
        const delay = Math.random() * 3;
        confetti.style.animationDuration = `${duration}s`;
        confetti.style.animationDelay = `${delay}s`;

        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
        const container = document.getElementById('confetti-container');
        if (container) {
            document.body.removeChild(container);
        }
    }, 300000);
}