let canvas
let player

function start() {
    // create hidden canvas for rendering
    EmotePlayer.createRenderCanvas(640, 640);

    // create new player
    canvas = document.getElementById('canvas');
    player = new EmotePlayer(canvas);
    // load emote data from URL

    player.loadDataFromURL("../data/emote_logo_d2.emtbytes");

    player.loadDataFromURL("../data/パイレーツにこにこ.emtbytes");
    player.diffTimelineSlot1 = '差分用_waiting_loop2';

    // set chara scale
    player.scale = 0.5;
}

function face(btnNo) {
    if (btnNo == 1) {
        player.mainTimelineLabel = 'sample_喜03';
    } else if (btnNo == 2) {
        player.mainTimelineLabel = 'sample_怒00';
    } else if (btnNo == 3) {
        player.mainTimelineLabel = 'sample_哀00';
    } else if (btnNo == 4) {
        player.mainTimelineLabel = 'sample_楽00';
    } else if (btnNo == 5) {
        player.mainTimelineLabel = 'sample_驚00';
    }
}