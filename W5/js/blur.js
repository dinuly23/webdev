const videoElement = document.getElementById('video');
const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

let model;

async function draw(net) {
  const segmentation = await net.segmentPerson(this.video, {
    flipHorizontal: false,
    internalResolution: 'medium',
    segmentationThreshold: 0.7
  });

  const backgroundBlurAmount = 6;
  const edgeBlurAmount = 2;
  const flipHorizontal = true;

  bodyPix.drawBokehEffect(
    canvas, videoElement, segmentation, backgroundBlurAmount,
    edgeBlurAmount, flipHorizontal);
} 


async function populate() {
  const stream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
  videoElement.srcObject = stream;
  await videoElement.play();
  const options = {
    multiplier: 0.75,
    stride: 32,
    quantBytes: 4
  }
  model = await bodyPix.load(options);
}

async function detect() {
  draw(model);
  requestAnimationFrame(detect);
}

populate().then(detect).catch(console.error);