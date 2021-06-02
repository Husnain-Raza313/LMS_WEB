
    	 /*************************JQUERYYY****************************************/


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

            		$.get("/student-info", function(info){


    			var data=JSON.parse(info);
              //  alert("STUDENT ID is : "+data.emailid);

                obj_std={std_id:data.emailid};
                		});


                              //show courses button

                             

            $("#show").click(function(){

             // alert("Overall Courses Button Working");

              
              

               
                    $.get("/show-courses", function(item2){

                    	 $(".tb-remove").remove();

                    	 var t1="<thead class='tb-remove'><tr><th scope='col' class='entry-center'>Course ID</th><th scope='col' class='entry-center'>Course Names</th><th scope='col' class='entry-center'>Lecturer</th><th scope='col' class='entry-center'>Credit Hours</th></tr></thead>";

                    	 var t2=" <tbody id='table-body'></tbody>"  
               
                			$("#show-courses").append(t2);
                			$("#show-courses").append(t1);


                   	


                    course=JSON.parse(item2);
                   // alert("HELLOOOOOOOO"+course.firstName);
                   console.log(course);

                     $.each(course, function(i, field){
                     	var entry="<tr class='tb-remove'><th scope='col' class='entry-center'>"+field.id+"</th><th scope='col' class='entry-center'>"+field.courseName+"</th><th scope='col' class='entry-center'>"+field.lecturer+"</th><th scope='col' class='entry-center'>"+field.credit_hrs+"</th></tr>";
 

                          $("#table-body").append(entry);

                                                         });




                });  
            });



              //****************your courses show button************

            $("#show-my").click(function(){


            	//	alert("Your Courses Button Working");
            		

                    $.get("/personal-courses",obj_std, function(item2){

                    	course=JSON.parse(item2);
                   // alert("HELLOOOOOOOO"+course.firstName);
                   console.log(course);

                                      if(course==null){

                             $("#show-my-courses").append("<div><b>NO COURSES ARE ADDED!!</b></div>");


                   }
                   else{

                    	 $(".yourcourses-remove").remove();

                    	 var t1="<thead class='yourcourses-remove'><tr><th scope='col' class='entry-center'>Course ID</th><th scope='col' class='entry-center'>Course Names</th><th scope='col' class='entry-center'>Lecturer</th><th scope='col' class='entry-center'>Credit Hours</th></tr></thead>";

                    	 var t2=" <tbody id='table-body-your-courses'></tbody>"  
               
                			$("#show-my-courses").append(t2);
                			$("#show-my-courses").append(t1);


                   	


                    



                     $.each(course, function(i, field){
                     	var entry="<tr class='yourcourses-remove'><th scope='col' class='entry-center'>"+field.id+"</th><th scope='col' class='entry-center'>"+field.courseName+"</th><th scope='col' class='entry-center'>"+field.lecturer+"</th><th scope='col' class='entry-center'>"+field.credit_hrs+"</th></tr>";
 

                          $("#table-body-your-courses").append(entry);

                                                         });


                    }

                }); 


                });


            // *****************add search bar****************




       /* $("#add").click(function(){

                        alert("goodd");
                    var add_sub='<input id="search-add" placeholder="Enter Course Name"></input>';
                      var btn_search='<button id="search-add-btn">Search</button>';
                     $("#add").after(add_sub);
                      $('#add').after(btn_search);

                    });
*/
                                  //****************ADD COURSE BUTTON*******************
           $("#search-add-btn").click(function(){


                  //   alert("ADD Courses Button Working");
                    var obj2={id:$('#search-courses').val(),std_id: obj_std.std_id};

                    var check=obj2.id;

                    if("check:contains('CS-')"){

                    	$.get("/search-add-route",obj2, function(item2){


                  alert(item2);


                });

                    		

                }
                else if(check!="CS-"){

                alert("Please enter correct Course ID e.g CS-1**");
                	
                };
            });



 //****************Delete COURSE BUTTON*******************
           $("#search-delete-btn").click(function(){


                 //    alert("Delete Button Working");

                        var obj1={id:$('#search-courses').val(),std_id: obj_std.std_id};
                        var check=obj1.id;

                    if("check:contains('CS-')"){

                    						 $.get("/search-delete-route",obj1, function(item2){


					                  alert(item2);


                									});

               

                }
				else if(check!="CS-"){

				                alert("Please enter correct Course ID e.g CS-1**");
				                	
				                };
            });



 		//***********************LOGOUT PATHWAY*************************

  $("#logout").click(function(){

           //   alert("Logout Button is working");


                         $.get('/logout-route',obj_std, function(item2){


                });
                   
            });



//*/



      })