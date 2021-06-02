const MongoClient = require('mongodb').MongoClient;


var student4;
var item1;
var collection1;
var logininfo;
var collection_login;
var collection_course;
var collection_personal;
var hraza_student;
var hkhan_student;
var ukhan_student;
var fac={ name: ["Naima Altaf","Zaki Murtaza","Bilal Rauf","Nikola Tesla","Ayesha Naseer","Saeed Murtaza"],
 ed: ["PhD in Data Science","PhD in Data Structures","PhD in Networking","Father of Electricity","PhD in Database","PhD in Linear Algebra"],
  yrs:["10 years","14 years","6 years","8 years","18 years","20 years"],
   nat:["Pakistan","America","England","Serbia","Russia","Australia"]};


var overall_courses= null;

var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname+ '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/public/html/form.html');
});
          //enter the email and password to join with your mongodb account online
MongoClient.connect("mongodb+srv://<youremail>:<yourpassword>@freecluster.xrggm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
   useNewUrlParser: true,
   useUnifiedTopology: true
 }, function (err, client) {
    let db = client.db("freecluster")
    console.log('Connected');


/*
         db.collection('course2', function (err, collection) {
        collection.insertOne({ id: 'CS-123', firstName: 'Software Engineering'  });
        collection.insertOne({ id: 'CS-124', firstName: 'Human Resource Management' });
        collection.insertOne({ id: 'CS-125', firstName: 'Professional Ethics' });
      }); */
     
     /*  db.collection('login_check1', function (err, collection) {
        collection.insertOne({ emailid: 'hraza', password: 'hraza', name: 'Husnain Raza', Course: 'XYZ24', Regno:'123456', Semester:'7th', CGPA: 3.56});
        collection.insertOne({ emailid: 'hkhan', password: 'hkhan', name: 'Haider Khan', Course: 'XYZ24', Regno:'654321', Semester:'7th', CGPA: 3.67});
        collection.insertOne({ emailid: 'ukhan', password: 'ukhan', name: 'Usman Ali Khan', Course: 'XYZ24', Regno:'789071', Semester:'7th', CGPA: 4.00 });

          //collection1=collection;
        });

      */
     /* db.collection('faculty', function (err, collection) {
        collection.insertOne({ name: 'Naima Altaf', position: 'Lecturer', yrs_working:'10 years', education:'PhD in Networking', campus:'MCS'});
        collection.insertOne({ name: 'Mobeena Shahzad', position: 'Lecturer', yrs_working:'9 years', education:'PhD in OS', campus:'MCS'});
        collection.insertOne({ name: 'Zaki Murtaza', position: 'Lecturer', yrs_working:'12 years', education:'PhD in Information Security', campus:'MCS'});


        });
*/

/*    db.collection('student', function (err, collection) {
        collection.insertOne({ name: 'Husnain Raza', Course: 'XYZ24', Reg-no:'123456', Semester:'7th', CGPA: 3.56});
        collection.insertOne({ name: 'Haider Khan', Course: 'XYZ24', Reg-no:'654321', Semester:'7th', CGPA: 3.67});
        collection.insertOne({ name: 'Usman Ali Khan', Course: 'XYZ24', Reg-no:'789071', Semester:'7th', CGPA: 4.00 });

        */
      /*  db.collection('faculty6', function (err, collection) {
        collection.insertOne({'obj1':'{ "name": "Naima Altaf", "ed": "PhD in Networking", "yrs":"10 years", "nat":"Pakistan"}'});

       
        

        });
*/
  
  
        db.collection('faculty-staff1', function (err, collection) {

         collection.insertOne({ object:fac});
         });

         

         //SHOW COURSES TABLE
      /*   db.collection('course5', function (err, collection) {
        collection.insertOne({ id: 'CS-123', courseName: 'Software Engineering', lecturer: 'Zaki Murtaza', credit_hrs: 3});
        collection.insertOne({ id: 'CS-124', courseName: 'Database Engineering', lecturer: 'Ayesha Naseer', credit_hrs: 4});
        collection.insertOne({ id: 'CS-125', courseName: 'Linear Algebra', lecturer: 'Saeed Murtaza', credit_hrs: 3});
        collection.insertOne({ id: 'CS-126', courseName: 'Data Mining', lecturer: 'Naima Altaf', credit_hrs: 4});
        collection.insertOne({ id: 'CS-127', courseName: 'Fundamentals of Cryptography', lecturer: 'Waleed Bin Shahid', credit_hrs: 4});
      });
*/

/*
              //SHOW hraza Personal COURSES TABLE
         db.collection('hraza_courses', function (err, collection) {
        collection.insertOne({ id: 'CS-123', courseName: 'Software Engineering', lecturer: 'Zaki Murtaza', credit_hrs: 3});
        collection.insertOne({ id: 'CS-126', courseName: 'Data Mining', lecturer: 'Naima Altaf', credit_hrs: 4});
        collection.insertOne({ id: 'CS-127', courseName: 'Fundamentals of Cryptography', lecturer: 'Waleed Bin Shahid', credit_hrs: 4});
      });

//SHOW hkhan Personal COURSES TABLE
         db.collection('hkhan_courses', function (err, collection) {
        collection.insertOne({ id: 'CS-125', courseName: 'Linear Algebra', lecturer: 'Saeed Murtaza', credit_hrs: 3});
        collection.insertOne({ id: 'CS-124', courseName: 'Database Engineering', lecturer: 'Ayesha Naseer', credit_hrs: 4});
        collection.insertOne({ id: 'CS-127', courseName: 'Fundamentals of Cryptography', lecturer: 'Waleed Bin Shahid', credit_hrs: 4});
      });

//SHOW ukhan Personal COURSES TABLE
         db.collection('ukhan_courses', function (err, collection) {
        collection.insertOne({ id: 'CS-123', courseName: 'Software Engineering', lecturer: 'Zaki Murtaza', credit_hrs: 3});
        collection.insertOne({ id: 'CS-125', courseName: 'Linear Algebra', lecturer: 'Saeed Murtaza', credit_hrs: 3});
        collection.insertOne({ id: 'CS-126', courseName: 'Data Mining', lecturer: 'Naima Altaf', credit_hrs: 4});
      });

*/
           myFunction = function(){ 
      
      collection_login=db.collection('login_check1');
          collection_course=db.collection('course5');
          hraza_student=db.collection('hraza_courses');
         hkhan_student=db.collection('hkhan_courses');
          ukhan_student=db.collection('ukhan_courses');
          faculty_info=db.collection('faculty-staff1');

        }

    });

    // db.close();

//  ********************LOGIN ROUTE****************


app.post('/login-route', function (req, res) {

  myFunction();
collection_login.findOne({emailid:req.body.emailid}, (err,item) =>{

            console.log(item);
           // item1=JSON.stringify(item);

           logininfo=item;

           if(logininfo.password === req.body.password ){    

       // res.send(JSON.stringify(logininfo));
       res.sendFile(__dirname+'/public/html/index.html');
      }
      else if(logininfo.password !== req.body.password ){

        console.log("Wrong Input Given");
        res.send("Wrong Input");
      }
      else{
        console.log("ERROR!!! NULL");
      }
});



});

//  ********************LOGOUT ROUTE****************


app.get('/logout-route', function (req, res) {


  

    if(req.query.std_id=='hraza'){

      
      console.log(" User hraza has been logged out");
      res.redirect('/');
    }
    else if(req.query.std_id=='hkhan'){

     
      console.log(" User hkhan has been logged out");
      res.redirect('/');
    }
    else if(req.query.std_id=='ukhan'){

     
      console.log(" User ukhan has been logged out");
      res.redirect('/');
    }
      
    
    
  
    



});


/*
app.post('/submit-student-data', function (req, res) {




collection1.findOne({id:req.body.firstName}, (err,item) =>{

            console.log(item);
           // item1=JSON.stringify(item);



   // var name = req.body.firstName + ' ' + req.body.lastName;

    //res.send(course + '  Found!');     
    res.send(JSON.stringify(item));
});

});

*/

    //**********************STUDENT PROFILE  ROUTE*********************************
app.get('/student-info', function (req, res) {

      res.send(JSON.stringify(logininfo));


    });

           //*************************Faculty Profile Info****************
  app.get('/faculty-info', function (req, res) {

     
    faculty_info.findOne({object:fac}, (err,item) =>{

            
           // item1=JSON.stringify(item);
           console.log(item);


      res.send(JSON.stringify(item));




        
      });

      
});
                      


                  //  ************show courses****************

 app.get("/show-courses", function(req,res){

            collection_course.find().toArray((err,items) =>{

              console.log(items);

                res.send(JSON.stringify(items));
            });

 });




//  ************show personal student courses****************

 app.get("/personal-courses", function(req,res){


      if(req.query.std_id=='hraza')
           { hraza_student.find().toArray((err,items) =>{

              console.log(items);

                res.send(JSON.stringify(items));
            });

       }
      else if(req.query.std_id=='hkhan')
           { hkhan_student.find().toArray((err,items) =>{

              console.log(items);

                res.send(JSON.stringify(items));
            });

       }

       else if(req.query.std_id=='ukhan')
           { ukhan_student.find().toArray((err,items) =>{

              console.log(items);

                res.send(JSON.stringify(items));
            });

       }

       else{

        res.send("No Database Found!");
       }

 });





                        // *********************ADD COURSES*******************

 app.get('/search-add-route', function (req, res) {


              console.log(req.query.id);

collection_course.findOne({id:req.query.id}, (err,item) =>{


            course_item=item;
            console.log(item);

            if(item==null){

              res.send("NO SUCH COURSE ID EXISTS, Please Enter a correct one");
            }

            else{

            if(req.query.std_id=='hraza'){

             hraza_student.findOne({id:req.query.id}, (err,item) =>{


           if(item==null){



          hraza_student.insertOne(course_item, (err,item) =>{

          });

             hraza_student.find().toArray((err,items) =>{

              console.log(items);


   // var name = req.body.firstName + ' ' + req.body.lastName;

    //res.send(course + '  Found!');    
});

          res.send("Course has been added, Please Refresh Your Courses List");
}
else{

      res.send("COURSE ALREADY EXISTS");
}

});
}


            else if(req.query.std_id=='hkhan'){

             hkhan_student.findOne({id:req.query.id}, (err,item) =>{


           if(item==null){



          hkhan_student.insertOne(course_item, (err,item) =>{

          });

             hkhan_student.find().toArray((err,items) =>{

              console.log(items);


   // var name = req.body.firstName + ' ' + req.body.lastName;

    //res.send(course + '  Found!');     
});

          res.send("Course has been added, Please Refresh Your Courses List");
}
else{

      res.send("COURSE ALREADY EXISTS");
}

});
}

 else if(req.query.std_id=='ukhan'){

             ukhan_student.findOne({id:req.query.id}, (err,item) =>{


           if(item==null){



          ukhan_student.insertOne(course_item, (err,item) =>{

          });

             ukhan_student.find().toArray((err,items) =>{

              console.log(items);


   // var name = req.body.firstName + ' ' + req.body.lastName;

    //res.send(course + '  Found!');     
});

          res.send("Course has been added, Please Refresh Your Courses List");
}
else{

      res.send("COURSE ALREADY EXISTS");
}

});
}


  



}

});

}); // Add courses end brackets




                        //**************Delete Courses*******************


  app.get('/search-delete-route', function (req, res) {


              console.log(req.query.id);


      collection_course.findOne({id:req.query.id}, (err,item) =>{


            
            console.log(item);

            if(item==null){

              res.send("NO SUCH COURSE ID EXISTS, Please Enter a CORRECT ID");
            }

            else{

                if(req.query.std_id=='hraza'){

            hraza_student.findOne({id:req.query.id}, (err,item) =>{


           if(item!=null){



          hraza_student.deleteOne(item, (err,item) =>{

          });

             hraza_student.find().toArray((err,items) =>{

              console.log(items);


   // var name = req.body.firstName + ' ' + req.body.lastName;

    //res.send(course + '  Found!');     
    
});

          res.send("Course has been Deleted, Please Refresh Your Courses List");
}
else{

      res.send("COURSE DOES NOT EXIST IN YOUR COURSES");
}

});
}


     else if(req.query.std_id=='ukhan'){

        ukhan_student.findOne({id:req.query.id}, (err,item) =>{


               if(item!=null){



              ukhan_student.deleteOne(item, (err,item) =>{

              });

                 ukhan_student.find().toArray((err,items) =>{

                  console.log(items);


       // var name = req.body.firstName + ' ' + req.body.lastName;

        //res.send(course + '  Found!');     
        
    });

              res.send("Course has been Deleted, Please Refresh Your Courses List");
    }
    else{

          res.send("COURSE DOES NOT EXIST IN YOUR COURSES");
    }

    });

    }


else if(req.query.std_id=='hkhan'){
        hkhan_student.findOne({id:req.query.id}, (err,item) =>{


               if(item!=null){



              hkhan_student.deleteOne(item, (err,item) =>{

              });

                 hkhan_student.find().toArray((err,items) =>{

                  console.log(items);


       // var name = req.body.firstName + ' ' + req.body.lastName;

        //res.send(course + '  Found!');     
    });

              res.send("Course has been Deleted, Please Refresh Your Courses List");
    }
    else{

          res.send("COURSE DOES NOT EXIST IN YOUR COURSES");
    }

    });


}

   

}

});

});


var server = app.listen(5000, function () {
    console.log('Node server is running..');
});

/*         collection.insertOne({ id: 'CS-123', firstName: 'SE', lastName: 'Jobs' });
        collection.insertOne({ id: 'CS-124', firstName: 'HRM', lastName: 'Gates' });
        collection.insertOne({ id: 'CS-125', firstName: 'PE', lastName: 'Bond' });
*/
