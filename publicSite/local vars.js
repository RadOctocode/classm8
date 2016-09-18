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
      console.log(coursesChem);
		

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
                classesToTake.push(coursesChem[0].subject+" "+coursesChem[0].catalogNbr+" "+coursesChem[0].titleLong)
               
      }
        var credit = [];
     if(document.getElementById('chk1').checked){
     	credit.push("CHEM2090");
     }
     if(document.getElementById('chk2').checked){
     	credit.push("PHYS1112");
     }
     if(document.getElementById('chk3').checked){
     	credit.push("PHYS2213");
     }
     if(document.getElementById('chk4').checked && document.getElementById('chk5')){
     	credit.push("PHYS1112");
     }
     if(document.getElementById('chk5').checked){
      credit.push("MATH1910")
      console.log(credit);
    }
     if(document.getElementById('chk6').checked) {
        credit.push("CS1110");
     }
     
     if (inArray(credit,coursesMath[0].aSubject+coursesMath[0].aCatalogNum)==true){ 
         classesToTake.push(coursesMath[1].aSubject+" "+coursesMath[1].aCatalogNum+" "+coursesMath[1].aTitle); 
      
     }//fine

     else{
          classesToTake.push(coursesMath[0].aSubject+" "+coursesMath[0].aCatalogNum+" "+coursesMath[0].aTitle);
	   }//fine
            

    if(inArray(credit,coursesChem[0].aSubject+coursesChem[0].aCatalogNum)==true){ //chem priority over phys
       if(inArray(credit,coursesPhys[0].aSubject+coursesPhys[0].aCatalogNum)==true && inArray(credit,coursesPhys[2].aSubject+coursesPhys[2].aCatalogNum)==true) {
			   classesToTake.push("Take a fun class")
		  }
      else if(inArray(credit,coursesPhys[0].aSubject+coursesPhys[0].aCatalogNbum)==true){
			   classesToTake.push(coursesPhys[2].aSubject+" "+coursesPhys[2].aCatalogNum+" "+coursesPhys[2].aTitle);
          console.log(classesToTake);
      }

      else if(inArray(credit,coursesPhys[2].aSubject+coursesPhys[2].aCatalogNum)==true){
            classesToTake.push(coursesPhys[0].aSubject+" "+coursesPhys[0].aCatalogNum+" "+coursesPhys[0].aTitle);
			      classesToTake.push(coursesPhys[1].aSubject+" "+coursesPhys[1].aCatalogNum+" "+coursesPhys[1].aTitle); 
      }
    }
		

    else{   classesToTake.push(coursesChem[0].aSubject+" "+coursesChem[0].aCatalogNum+" "+coursesChem[0].aTitle);
            classesToTake.push(coursesChem[1].aSubject+" "+coursesChem[1].aCatalogNum+" "+coursesChem[1].aTitle);
	   }

    if(inArray(credit,coursesCs[0].aSubject+coursesCs[0].aCatalogNum)==true){
        classesToTake.push(engriCourse.aSubject+" "+engriCourse.aCatalogNum+" "+engriCourse.aTitle);
    }

    else{
        classesToTake.push(coursesCs[0].aSubject+" "+coursesCs[0].aCatalogNum+" "+coursesCs[0].aTitle);
    }
         
    document.getElementById('printOut').appendChild(makeUL(classesToTake));
    }})
    }})
    }})
    }});//end of questionnaire
}
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

function inArray(aRray,phrase){
  console.log(aRray);
  for (var i=0; i<aRray.length; i++){
    if(aRray[i]==phrase){
      return true;
    }
  }

}