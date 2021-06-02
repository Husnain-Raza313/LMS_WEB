/************************************JQUERY****************************************/


       /* $(document).ready(function(){

                alert("PAge World!");
            $("#show").click(function(){
                   // var obj1={emailid:$('#email').val() ,
                     //         password: $('#password').val() };
                    //var obj1=JSON.stringify(obj);

                    alert("Hello World!");
                   //$("#disp").append('<p>Course id is : </p>'+obj.firstName);
                $.get("/show-courses", function(item2){

                   // console.log(item2);

                    // alert("Hello World!");

                    course=JSON.parse(item2);
                    alert("HELLOOOOOOOO"+course.[0]);
                     $.each(course, function(i, field){
                          $(".show-courses").append(i+" "+field.[i] + " ");
                                                         });


                    //course=JSON.stringify(item1);
                  //  $("#disp").append('<p>Course id is : </p>'+course.id);
                   // $("#disp").append('<p>Course name is : </p>'+course.firstName);
                //    alert("<p>Course id is : </p>"+course.firstName);
                 // $("#disp").append('<p>Email is: </p>'+course.emailid);
                  //$("#disp").append('<p>Password is: </p>'+course.password);


                });
            });
      });   */

      $(document).ready(function(){


      	var obj_std=null;

      		/**************************************Faculty Slideshow********************************/

						$("#slideshow > div:gt(0)").hide();

						setInterval(function() { 
						  $('#slideshow > div:first')
						  .fadeOut(0)
						  .next()
						  .fadeIn(1000)
						  .end()
						  .appendTo('#slideshow');
						}, 4000);

                             
                      //*********************STUDENT PROFILE WORKING******************

    $.get("/student-info", function(info){


    var data=JSON.parse(info);
                alert("STUDENT ID is : "+data.emailid);

                obj_std={std_id:data.emailid};
       // $("#name").append('<p></p>'+data.uname);

    

       		      $( "#std-list0").text(data.name);
       		      $( "#std-list1").text(data.Course);
       		      $( "#std-list2").text(data.Regno);
       		      $( "#std-list3").text(data.Semester);
       		      $( "#std-list4").text(data.CGPA);

      



});
    
                          //*************************Faculty Profile********************

                   $.get("/faculty-info", function(info){


    var data=JSON.parse(info);


             //   alert("Faculty name is : "+data.object.name[0]);



                	$( ".fac-list" ).each(function( index ) {
  							  $(this).text(data.object.name[index]);


													});
                	$( ".fac-list1" ).each(function( index ) {
  							  $(this).text(data.object.ed[index]);


													});
                	$( ".fac-list2" ).each(function( index ) {
  							  $(this).text(data.object.yrs[index]);


													});

					$( ".fac-list3" ).each(function( index ) {
  							  $(this).text(data.object.nat[index]);


													});

					



                  /*	for (var i = 0; i >= 20; i++) {
                		
                		$("#fac-list").text(data.object.name[i]);
                		$("#fac-list").text(data.object.name[0]);
                		$("#fac-list").text(data.object.name[0]);
                		$("#fac-list").text(data.object.name[0]);
                	
                		
              $("#fac-list1").text(data.object.name[0]);
                $("#fac-list2").text(data.object.ed[0]);
                $("#fac-list3").text(data.object.yrs[0]);
                $("#fac-list4").text(data.object.nat[0]);
                $("#fac-list5").text(data.object.name[1]);
                $("#fac-list6").text(data.object.ed[1]);
                $("#fac-list7").text(data.object.yrs[1]);
                $("#fac-list8").text(data.object.nat[1]);
                $("#fac-list9").text(data.object.name[2]);
                $("#fac-list10").text(data.object.ed[]);
                $("#fac-list11").text(data.object.yrs);
                $("#fac-list12").text(data.object.nat);
                $("#fac-list13").text(data.object.name);
                $("#fac-list14").text(data.object.ed);
                $("#fac-list15").text(data.object.yrs);
                $("#fac-list16").text(data.object.nat);
                $("#fac-list17").text(data.object.name);
                $("#fac-list18").text(data.object.ed);
                $("#fac-list19").text(data.object.yrs);
                $("#fac-list20").text(data.object.nat);                                               
            		*/
                



                   
});
 	
 		//***********************LOGOUT PATHWAY*************************

  $("#logout").click(function(){

            //  alert("Logout Button is working");


                         $.get('/logout-route',obj_std, function(item2){

                });
                   
            });



//*/



      })
       /**********************************************************************************/
