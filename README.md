# UFOs

## Overview of the Project

The project used javascript and html features to create a website listing UFO citings.  The code dynamically created a table as well as search capability for data in the table, and also statically created html elements for user input.  The project files were: 1) an index.html file, 2) a data.js file, and 3) an app.js file.  The purpose of the html file is to publish to a browser. The purpose of the data.js file is to provide the input in the form of objects (which are called dictionaries in the Python language). The purpose of the app.js file is to create and populate the UFO table, to listen for user-input changes in the input boxes, and to perform a filter of the original UFO table data based on values that the user inputs.  The project also used css bootstapping and d3 javascript content delivery network libraries to make use of features which are ready for use.  

Concepts exercied in the app.js program include:  using functions, using global versus local variables, knowing the difference between objects and arrays, and using conditonal logic. The project uses funtions within a function which calls another function.  It this therefore important to know that global variables can be declared outside a function and changed within a function (eg the object filters in the app.js file).  One of the key features to working with the data was to re-cast the data object into another data object for which an html element id and an html element value could easily be accessed.  Another key feature for the project is to recognize the difference between an array and an object and what javascript can and cannot do with each.  For example, an object can be pushed into an array but and object cannot be pushed into an object; further, in order to access an object value via a key, it is necessary to ensure that the object has a name first.  Finally, it is useful to recogize that the "this" feature in javascript can coordinate with the "change" event listener to be used in setting up the user-defined search data.

## Results



It is easy to search.  There are five input boxes:  datetime, city, state, country, and shape.  All the data is automatically loaded on page load, and once the user types search criteria, the program automatically searches and displays a result.  Each input box has an example data input filled in to provide the user with the data format to be used in the search.  See below for an example.

