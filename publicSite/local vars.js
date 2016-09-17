
function createQuestionnaire(){
var studentName=document.getElementById("studentName").value;
var que1=document.getElementById("que1").value;
var que2=document.getElementById("que2").value;
var que3=document.getElementById("que3").value;

document.getElementById("studentName").value = "";
document.getElementById("que1").value = "";
document.getElementById("que2").value = "";
document.getElementById("que3").value = "";

 $.ajax({url: "https://classes.cornell.edu/api/2.0/search/classes.json?roster=FA16&subject=MATH", success: function(result){
        var oMath = result;
        var arrayMathClass=[];

         console.log("result:");
        console.log(oMath);

        console.log("result.length:")
        console.log(oMath.data.classes.length);

        for (var i = 0; i < oMath.data.classes.length; i++) {
        	var nameOfMathClass=oMath.data.classes[i].titleLong;
        	arrayMathClass.push(nameOfMathClass);
   
        }
  function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}


// Add the contents of options[0] to #foo:
document.getElementById('printOut').appendChild(makeUL(arrayMathClass));
console.log(que1);
switch(que1){

          case("Mechanical Enginneer"):
          case("Electrical and Computer Engineer"):
          case("Applied and Engineering Physics"):
             //All First Year Engineers
              for(i = 0; i<41; i++){
                if (math.data.classes[i].titleLong.search("for Engineers") > -1){ 
                console.log(math.data.classes[i].subject)
                console.log(math.data.classes[i].catalogNbr)
                  }
              }

                console.log(chem.data.classes[6].subject)
                console.log(chem.data.classes[6].catalogNbr)
                break;
      }
    
   /** $.ajax({url: "https://classes.cornell.edu/api/2.0/search/classes.json?roster=FA16&subject=PHYS", success: function(result){
        var phys = result;
        console.log(result);
        
    $.ajax({url: "https://classes.cornell.edu/api/2.0/search/classes.json?roster=FA16&subject=CHEM", success: function(result){
        var chem = result;
        console.log(result);
        
    $.ajax({url: "https://classes.cornell.edu/api/2.0/search/classes.json?roster=FA16&subject=CS", success: function(result){
        var cs = result;
        console.log(result);
       
    $.ajax({url: "https://classes.cornell.edu/api/2.0/search/classes.json?roster=FA16&subject=ENGRI", success: function(result){
        var engri = result;
        console.log(result);
      switch(que1){

          case("Mechanical Enginneer"):
          case("Electrical and Computer Engineer"):
          case("Applied and Engineering Physics"):
             //All First Year Engineers
              for(i = 0; i<41; i++){
                if (math.data.classes[i].titleLong.search("for Engineers") > -1){ 
                console.log(math.data.classes[i].subject)
                console.log(math.data.classes[i].catalogNbr)
                  }
              }

                console.log(chem.data.classes[6].subject)
                console.log(chem.data.classes[6].catalogNbr)
                break;
      }
    }})
    }})
    }})
    }})
    **/}});	

}