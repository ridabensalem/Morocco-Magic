const speakersData = [
  {
    name: 'Steve Yamato',
    proffesionalism: 'Full stack analysis of google',
    img: 'images/speaker_01.png',
    description: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
  },
  {
    name: 'Peter Meraid',
    proffesionalism: 'Tourism agent by AFG',
    img: 'images/speaker_02.png',
    description: 'Trying to make poeple who visiti Morocco satisfied',
  },
  {
    name: 'Lila pulse',
    proffesionalism: 'Professor at Rabat Mo',
    img: 'images/speaker_03.png',
    description: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
  },
  {
    name: 'Emma roden',
    proffesionalism: 'Senior software developer',
    img: 'images/speaker_04.png',
    description: 'Testing the platform of eccommerce Moroocco',
  },
  {
    name: 'Amy gorden',
    proffesionalism: 'Professor at Tanger Law School',
    img: 'images/speaker_05.png',
    description: 'Providing the nessecary documents about rules of Tourisme in Morocco.',
  },
  {
    name: 'Ahmed Magma',
    proffesionalism: 'General director',
    img: 'images/speaker_06.png',
    description: 'Organisating the National youth Institute of tourists in Morocco.',
  },
];
function populateSpeakersCards(speakers) {
  const container = document.querySelector('#desktop_speakers');
  const speakerCards = container.querySelectorAll('.col-6');

  for (let i = 0; i < speakers.length; i += 1) {
    const speakerData = speakers[i];
    const speakerCard = speakerCards[i];
    const img = speakerCard.querySelector('img');
    img.src = speakerData.img;
    img.alt = speakerData.name;
    const content = speakerCard.querySelector('p');
    content.innerHTML = `
        <span class="name">${speakerData.name}</span>
        <br>
        <span class="proffesionalism">${speakerData.proffesionalism}</span>
        <br> ${speakerData.description}
      `;
  }
}

populateSpeakersCards(speakersData);

function Mobile(speakers) {
  const container = document.querySelector('#mobile_skpeakers');
  const speakerCards = container.querySelectorAll('.mobile-load');
  for (let i = 0; i < speakers.length; i += 1) {
    const speakerData = speakers[i];
    const speakerCard = speakerCards[i].querySelector('img');
    speakerCard.src = speakerData.img;
    speakerCard.alt = speakerData.name;
    const content = speakerCards[i].querySelector('p');
    content.innerHTML = `
          <span class="name">${speakerData.name}</span>
          <br>
          <span class="proffesionalism">${speakerData.proffesionalism}</span>
          <br> ${speakerData.description}
        `;
  }
}

Mobile(speakersData);
