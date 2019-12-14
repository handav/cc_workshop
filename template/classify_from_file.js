  // Classifier Variable
  let classifier;
  // Model URL
  //let imageModelURL = 'https://teachablemachine.withgoogle.com/models/UqR9i5aV/';
  let imageModelURL = 'tm-my-image-model/'
  
  // Image
  let test_image;
  // To store the classification
  let label = "";

  // Load the model first
  function preload() {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  }

  function setup() {
    createCanvas(320, 260);

    // Create the image
    test_image = loadImage('assets/images/artwork_test.jpg');

    // Start classifying
    classifyImage();
  }

  function draw() {
    background(0);
    // Draw the image
    image(test_image, 0, 0)
    // Draw the label
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(label, width / 2, height - 4);
  }


  function classifyImage(){
    classifier.classify(test_image, gotResult);
  }

  // When we get a result
  function gotResult(error, results) {
    // If there is an error
    if (error) {
      console.error(error);
      return;
    }
    // The results are in an array ordered by confidence.
    console.log(results[0]);
    label = results[0].label;
    // Classifiy again!
    //classifyVideo();
  }