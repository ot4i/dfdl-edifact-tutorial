   function importArtifacts() {

      var result = null;
      var tut = null;
      try {
            
           result = javaGetSelectedTutorialFunction();
           
           var tutInfoString = result[0];
           tut           = JSON.parse( tutInfoString );

      }//try
      catch(e){
          alert( 'a java error occurred: ' + e.message );
      }//catch

      if (tut !== undefined){

        try {
           result = javaImportPIFileFunction(tut.name,tut.zipURL);
        }//try
        catch(e){
          alert( 'a java error occurred: ' + e.message );
        }//catch

      }//if
   };


   function cleanUp() {

      var result = null;
      var tut = null;
      try {
            
           result = javaGetSelectedTutorialFunction();
           
           var tutInfoString = result[0];
           tut           = JSON.parse( tutInfoString );

      }//try
      catch(e){
          alert( 'a java error occurred: ' + e.message );
      }//catch

      if (tut !== undefined){

        try {
           result = javaUnDeployResourcesFunction( 'TESTNODE_demond','default', tut.appName);
        }//try
        catch(e){
          alert( 'a java error occurred: ' + e.message );

        }//catch


        try {
           result = javaDeleteProjectsFromWorkspaceFunction( [ tut.appName ,'BARfiles' ] );
        }//try
        catch(e){
          alert( 'a java error occurred: ' + e.message );
        }//catch


      }//if


      


   };

   function deployArtifacts() {

      var result = null;
      var tut = null;
      try {
            
           result = javaGetSelectedTutorialFunction();
           
           var tutInfoString = result[0];
           tut           = JSON.parse( tutInfoString );

      }//try
      catch(e){
          alert( 'a java error occurred: ' + e.message );
      }//catch

      if (tut !== undefined){

        try {
           result = javaDeployBARFunction( 'TESTNODE_demond','default', tut.barFile );
        }//try
        catch(e){
          alert( 'a java error occurred: ' + e.message );
        }//catch


      }//if


   };

   function backToGallery() {

      var result=null;

        try {
           result = javaBackToGalleryFunction();
        }//try
        catch(e){
          alert( 'a java error occurred: ' + e.message );
      }//catch




   };


   function openExternalBrowser(externalURL) {


      var result = null;

      try {
           result = javaOpenURLInExternalBrowserFunction( externalURL );
      }//try
      catch(e){
          alert( 'a java error occurred: ' + e.message );
      }//catch


   };

   function openHelpSystem(helpURL) {

      var result = null;

      try {
           result = javaOpenURLInHelpSystemFunction( helpURL);
      }//try
      catch(e){
          alert( 'a java error occurred: ' + e.message );
      }//catch
   };


   function viewDetails() {
      var result = null;
      var tut = null;
      try {
            
           result = javaGetSelectedTutorialFunction();
           
           var tutInfoString = result[0];
           tut           = JSON.parse( tutInfoString );

      }//try
      catch(e){
          alert( 'a java error occurred: ' + e.message );
      }//catch

      if (tut !== undefined){

        try {
           result = javaBackToDetailsFunction(tut.detailsURL);
        }//try
        catch(e){
          alert( 'a java error occurred: ' + e.message );
        }//catch

      }//if

   };
