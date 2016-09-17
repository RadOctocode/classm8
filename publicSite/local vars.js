
function createQuestionnaire(){

var que1=document.getElementById("que1").value;
var que2=document.getElementById("que2").value;


function course(aSubject,aCatalogNum,aTitle,aLevel){
		this.aSubject =aSubject;
		this.aCatalogNum =aCatalogNum;
		this.aTitle =aTitle;
		this.aLevel =aLevel;
		this.aScore;
		this.hasCredit =false;
}



$.ajax({url: "https://classes.cornell.edu/api/2.0/search/classes.json?roster=FA16&subject=MATH", success: function(result){
        var oMath = result;
		var coursesMath =[];
		for(i = 0; i<oMath.data.classes.length; i++){
			if(oMath.data.classes[i].catalogNbr == 1910 || oMath.data.classes[i].catalogNbr == 1920 || oMath.data.classes[i].catalogNbr == 2930 ||  oMath.data.classes[i].catalogNbr == 2940  )
				coursesMath.push(new course(oMath.data.classes[i].subject, oMath.data.classes[i].catalogNbr, oMath.data.classes[i].titleLong, oMath.data.classes[i].catalogNbr/1000.0 ));
		}

$.ajax({url: "https://classes.cornell.edu/api/2.0/search/classes.json?roster=FA16&subject=PHYS", success: function(result){
       var oPhys = result;
       var coursesPhys=[];
	   for(i = 0; i<oPhys.data.classes.length; i++){
	   		if(oPhys.data.classes[i].catalogNbr == 1112 || oPhys.data.classes[i].catalogNbr == 1116 || oPhys.data.classes[i].catalogNbr == 2213 || oPhys.data.classes[i].catalogNbr == 2214)
				coursesPhys.push(new course(oPhys.data.classes[i].subject, oPhys.data.classes[i].catalogNbr, oPhys.data.classes[i].titleLong, oPhys.data.classes[i].catalogNbr/1000.0 ));
	   }
        
$.ajax({url: "https://classes.cornell.edu/api/2.0/search/classes.json?roster=FA16&subject=CHEM", success: function(result){
        var oChem = result;
        var coursesChem=[];        
		for(i = 0; i<oChem.data.classes.length; i++)
			if(oChem.data.classes[i].catalogNbr == 2090 || oChem.data.classes[i].catalogNbr == 2150)
				coursesChem.push(new course(oChem.data.classes[i].subject, oChem.data.classes[i].catalogNbr, oChem.data.classes[i].titleLong, oChem.data.classes[i].catalogNbr/1000.0 ));
			coursesChem[0].aLevel =1;
		

$.ajax({url: "https://classes.cornell.edu/api/2.0/search/classes.json?roster=FA16&subject=CS", success: function(result){
        var oCs = result;
        var coursesCs=[];
		for(i = 0; i<oCs.data.classes.length; i++){
			if(oCs.data.classes[i].catalogNbr == 1110 || oCs.data.classes[i].catalogNbr == 1112 || oCs.data.classes[i].catalogNbr == 2110 || oCs.data.classes[i].catalogNbr == 2112 ||
				oCs.data.classes[i].catalogNbr == 2850 || oCs.data.classes[i].catalogNbr == 3410 || oCs.data.classes[i].catalogNbr == 3310)
				coursesCs.push(new course(oCs.data.classes[i].subject, oCs.data.classes[i].catalogNbr, oCs.data.classes[i].titleLong, oCs.data.classes[i].catalogNbr/1000.0 ));
         }

engriCourse=new course("Engri","1001","EngriCourse","1");

var MathList =[];
var classesToTake =[];
switch(que1){

          case("Mechanical Engineer"):
          case("Electrical and Computer Engineer"):
          case("Applied and Engineering Physics"):
             //All First Year Engineers
              /**for(i = 0; i<coursesMath.length; i++){
                if ((coursesMath[i].aTitle.search("for Engineers") > -1) && (coursesMath[i].aCatalogNum%2000>=1000))
                	MathList.push(coursesMath[i].aSubject+" "+coursesMath[i].aCatalogNum+" "+coursesMath[i].aTitle);   
              }**/

              document.getElementById('printOut').appendChild(makeUL(MathList));
                classesToTake.push(oChem.data.classes[6].subject+" "+oChem.data.classes[6].catalogNbr+" "+oChem.data.classes[6].titleLong)
                break;
      }
        var credit = new Set();
     if(document.getElementById('chk1').checked)
     	credit.add("CHEM2090");
     if(document.getElementById('chk2').checked)
     	credit.add("PHYS1112");
     if(document.getElementById('chk3').checked)
     	credit.add("PHYS2213");
     if(document.getElementById('chk4').checked && document.getElementById('chk5'))
     	credit.add("PHYS1112");
     if(document.getElementById('chk6').checked)
     	credit.add("CS1110");
     if (credit.has(oMath.data.classes[10].aCatalogNum)){ 
         classesToTake.push(oMath.data.classes[11].subject+" "+oMath.data.classes[11].catalogNbr+" "+oMath.data.classes[11].titleLong);     
     }

     else{
          classesToTake.push(oMath.data.classes[10].subject+" "+oMath.data.classes[10].catalogNbr+" "+oMath.data.classes[10].titleLong);
	}
            
        
      if(credit.has(oCs.data.classes[0].catalogNbr) || credit.has(oCs.data.classes[1].catalogNbr)){
         for(i = 0; i<41; i++){
            classesToTake.push(engri.data.classes[i].subject+" "+engri.data.classes[i].catalogNbr+" "+engri.data.classes[i].titleLong); //shows ENGRI options if u have CS credit
       		 }
            }
            
       else{ classesToTake.push(oCs.data.classes[0].subject+" "+oCs.data.classes[0].catalogNbr+" "+oCs.data.classes[0].titleLong); //shows CS 1110,1112 if no CS credit
            classesToTake.push(oCs.data.classes[1].subject+" "+oCs.data.classes[1].catalogNbr+" "+oCs.data.classes[1].titleLong);
     		}

   if(credit.has(oChem.data.classes[6].catalogNbr)){ //chem priority over phys
       if(credit.has(oPhys.data.classes[2].catalogNbr) && credit.has(oPhys.data.classes[8].catalogNbr)) {
			classesToTake.push("Take a fun class")
		}
 	else if(credit.has(oPhys.data.classes[2].catalogNbr)){
			classesToTake.push(oPhys.data.classes[8].subject+" "+oPhys.data.classes[8].catalogNbr+" "+oPhys.data.classes[8].titleLong);
        }
     else if(credit.has(oPhys.data.classes[8].catalogNbr)){
            classesToTake.push(oPhys.data.classes[2].subject+" "+oPhys.data.classes[2].catalogNbr+" "+oPhys.data.classes[2].titleLong);
			classesToTake.push(oPhys.data.classes[3].subject+" "+oPhys.data.classes[3].catalogNbr+" "+oPhys.data.classes[3].titleLong); } 
		}

    else{   classesToTake.push(oChem.data.classes[6].subject+" "+oChem.data.classes[6].catalogNbr+" "+oChem.data.classes[6].titleLong);
            classesToTake.push(oChem.data.classes[7].subject+" "+oChem.data.classes[7].catalogNbr+" "+oChem.data.classes[7].titleLong);
	 }
            
  document.getElementById('printOut').appendChild(makeUL(classesToTake));
    }})
    }})
    }})
    }});//end of questionnaire

/*
	$( "#test" ).css( "border", "3px solid white" );
    
    $.ajax({url: "https://classes.cornell.edu/api/2.0/search/classes.json?roster=FA16&subject=MATH", success: function(result){
        var math = result;
        console.log(result);
        
    $.ajax({url: "https://classes.cornell.edu/api/2.0/search/classes.json?roster=FA16&subject=PHYS", success: function(result){
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
  */   

           
  /**  }})
    }})
    }})
    }})
    }});**/
    


}//end of function

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