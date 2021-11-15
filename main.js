

function startrecognizing() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8aseuLblL/model.json', modelReady);
    }
    function modelReady(){
    classifier.classify( gotResults);
    }
    function gotResults(error,results){
        if(error){
            console.error(error);
        }
        else{
            console.log(results);
            randomnumber_r=Math.floor(Math.random()*255)+1;
            randomnumber_g=Math.floor(Math.random()*255)+1;
            randomnumber_b=Math.floor(Math.random()*255)+1;
            document.getElementById("result_label").innerHTML='I can hear you'+results[0].label;
            document.getElementById("result_confidence").innerHTML='accuracy'+(results[0].confidence*100).toFixed(2)+"%";
            document.getElementById("result_label").style.color = "rgb("+randomnumber_r+","+randomnumber_g+","+randomnumber_r+")";
            document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
           img1=document.getElementById('cat');
           img2=document.getElementById('dog');
           img3=document.getElementById('lion');
           img4=document.getElementById('cow');
          if(results[0].label=="meow"){
              img1.src='cat.png';
              img1.src='dog.png';
              img1.src='lion.png';
              img1.src='cow.png';
          }
          else if(results[0].label=="bark"){
           img1.src='dog.png';
           img1.src='cow.png';
           img1.src='cat.png';
           img1.src='lion.png';
       }
       else if(results[0].label=="roar"){
           img1.src='cow.png';
           img1.src='lion.png';
           img1.src='dog.png';
           img1.src='cat.png';
       }
       else if(results[0].label=="background"){
           img1.src='cow.png';
           img1.src='dog.png';
           img1.src='cat.png';
           img1.src='lion.png';
       }
        }
    }