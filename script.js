

const panels = document.querySelectorAll('.panel');

const urlAudio = {
    panel1: 'audio/Luke.mp3',

    panel3: 'audio/DarthVader.mp3',

    panel5: 'audio/Obi-Wan.mp3'

};

let activePanel = null;

let audio;

panels.forEach(panel => {

    panel.addEventListener('click', () => {

        if (activePanel !== panel.id) {
            removeActive();
            panel.classList.add('active');
            activePanel = panel.id;
            playAudio(panel.id);
        }

    });

    panel.addEventListener('mouseleave', () => {
        panel.classList.remove('active');
        pauseAudio();

    });

});

const removeActive = () => {
    panels.forEach(panel => panel.classList.remove('active'));
};

const playAudio = (panelId) => {

    if (!audio || audio.pause) {
        audio = new Audio(urlAudio[panelId]);

        audio.play();

    }
};

const pauseAudio = () => {
    if (audio || !audio.pause) {
        audio.pause();
    }
}


