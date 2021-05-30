function addpro(){

//create node
let newNode = document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('mt-2');
newNode.classList.add('profield');
newNode.setAttribute("placeholder","Enter details of more projects")

let pro_btn = document.getElementById('pro_out') //iske phle add
let pro = document.getElementById('pro');  //iske ander
pro.insertBefore(newNode,pro_btn);
}
function addco(){

    //create node
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('cofield');
    newNode.setAttribute("placeholder","Enter details of more activities")
    
    let co_btn = document.getElementById('co_out') //iske phle add
    let co = document.getElementById('co');  //iske ander
    co.insertBefore(newNode,co_btn);
    }

    function printcv(){
        document.getElementById("btn-print").style.display="none";
        window.print();
    }
    function generatecv(){

        //personal
       document.getElementById("nameFieldT").innerHTML= document.getElementById("nameField").value;
       document.getElementById("AddressFieldT").innerHTML= document.getElementById("AddressField").value;
       document.getElementById("PhoneFieldT").innerHTML= document.getElementById("PhoneField").value;
       document.getElementById("EmailFieldT").innerHTML= document.getElementById("EmailField").value;
       document.getElementById("DobFieldT").innerHTML= document.getElementById("DObField").value;
       document.getElementById("NationFieldT").innerHTML= document.getElementById("NationField").value;
       document.getElementById("InterestFieldT").innerHTML= document.getElementById("InterestField").value;
       document.getElementById("StrengthFieldT").innerHTML= document.getElementById("StrengthField").value;
       document.getElementById("LangFieldT").innerHTML= document.getElementById("LangField").value;
       document.getElementById("PlaceFieldT").innerHTML= document.getElementById("PlaceField").value;
       document.getElementById("dateFieldT").innerHTML= document.getElementById("dateField").value;

       //set image

       let file = document.getElementById("ImgField").files[0];
       console.log(file);
       
       let Reader = new FileReader();
       Reader.readAsDataURL(file);

       console.log(Reader.result);

       Reader.onloadend = function(){

        document.getElementById("ImgFieldT").src = Reader.result;

       };

       
       



       // professional

       document.getElementById("ObjFieldT").innerHTML= document.getElementById("ObjField").value;

       //college
       document.getElementById("DegreeField1T").innerHTML= document.getElementById("DegreeField1").value;
       document.getElementById("InsField1T").innerHTML= document.getElementById("InsField1").value;
       document.getElementById("BoardField1T").innerHTML= document.getElementById("BoardField1").value;
       document.getElementById("MarksField1T").innerHTML= document.getElementById("MarksField1").value;
       document.getElementById("YopField1T").innerHTML= document.getElementById("YopField1").value;


       //XII


       document.getElementById("DegreeField2T").innerHTML= document.getElementById("DegreeField2").value;
       document.getElementById("InsField2T").innerHTML= document.getElementById("InsField2").value;
       document.getElementById("BoardField2T").innerHTML= document.getElementById("BoardField2").value;
       document.getElementById("MarksField2T").innerHTML= document.getElementById("MarksField2").value;
       document.getElementById("YopField2T").innerHTML= document.getElementById("YopField2").value;


       //X

       document.getElementById("DegreeField3T").innerHTML= document.getElementById("DegreeField3").value;
       document.getElementById("InsField3T").innerHTML= document.getElementById("InsField3").value;
       document.getElementById("BoardField3T").innerHTML= document.getElementById("BoardField3").value;
       document.getElementById("MarksField3T").innerHTML= document.getElementById("MarksField3").value;
       document.getElementById("YopField3T").innerHTML= document.getElementById("YopField3").value;

       //technical details
       document.getElementById("ToolFieldT").innerHTML= document.getElementById("ToolField").value;
       document.getElementById("SubFieldT").innerHTML= document.getElementById("SubField").value;

       //projects

       let projects = document.getElementsByClassName("profield");
       let str1 = "";
       
       for(let project of projects){
           str1 = str1 + `<li> ${project.value}</li>`;
       }

       document.getElementById("ProFieldT").innerHTML = str1;


       //Co

       let cos = document.getElementsByClassName("cofield");
       let str2 = "";
       
       for(let co of cos){
           str2 = str2 + `<li> ${co.value}</li>`;
       }

       document.getElementById("CoFieldT").innerHTML = str2;





        document.getElementById("cv-form").style.display="none";
        document.getElementById("cv-template").style.display="block";
    }
