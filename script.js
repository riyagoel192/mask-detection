Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach('#camera');

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log(ml5.version);  //0.4.3

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mYzGkDyw7/model.json',model)

function model()
{
    console.log("Model loaded successfully");
}

function check()
{
    img = document.getElementById("captured_image")
    classifier.classify(img,getresult)
}
function getresult(error,results)
{
        if(error)
        {
            console.log("Sorry! can't identify image");
        }
        else
        {
            //console.log(results);
            document.getElementById("results").innerHTML = results[0].label;
            document.getElementById("confidence").innerHTML = (results[0].confidence*100);
        }
}