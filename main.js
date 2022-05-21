function startClassification()
{
    navigator.mediaDevvices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yc-rJWKVvX/model.json', modelReady);
}

function modelReady(){
classifier.classify(gotResults);
}