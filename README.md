# UFOs

## Overview of the Project

The project used javascript and html features to create a website listing UFO citings.  The code dynamically created a table as well as search capability for data in the table, and also statically created html elements for user input.  The project files were: 1) an index.html file, 2) a data.js file, and 3) an app.js file.  The purpose of the html file is to publish to a browser. The purpose of the data.js file is to provide the input in the form of objects (which are called dictionaries in the Python language). The purpose of the app.js file is to create and populate the UFO table, to listen for user-input changes in the input boxes, and to perform a filter of the original UFO table data based on values that the user inputs.  The project also used css bootstapping and d3 javascript content delivery network libraries to make use of features which are ready for use.  

Concepts exercied in the app.js program include:  using functions, using global versus local variables, knowing the difference between objects and arrays, and using conditonal logic. The project uses functions within a function which calls another function.  It is therefore important to know that global variables can be declared outside a function and changed within a function (eg the object filters in the app.js file).  One of the key features to working with the data was to re-cast the filters data object into another filters data object format for which an html element id and an html element value could easily be accessed and used for conditional logic modeling.  Another key feature for the project was to recognize the difference between an array and an object and what javascript can and cannot do with each.  For example, an object can be pushed into an array but and object cannot be pushed into an object; further, in order to access an object value via a key, it is necessary to ensure that the object has a name first.  Finally, it is useful to recogize that the "this" feature in javascript can coordinate with the "change" event listener to be used in setting up the user-defined search data.

## Results

<img width="417" alt="Title" src="https://user-images.githubusercontent.com/85037467/132136800-79db518a-0738-452f-8fce-6291e5571345.png">

It is easy to search.  There are five input boxes:  datetime, city, state, country, and shape.  All the data is automatically loaded on page load, and once the user types search criteria, the program automatically searches and displays a result.  Each input box has an example data input filled in to provide the user with the data format to be used in the search.  See below for an example.


<img width="1398" alt="Searching" src="https://user-images.githubusercontent.com/85037467/132136819-c7e8e12d-c229-488a-8540-6090a89a8e91.png">

## Summary

One drawback to the design is that all of the data is loaded on page load.  This can be overwhelming to the user for large amounts of data plus there is no reason to display all of the information.  One useful change would be to display a small sample of results on the webpage (say about five rows) and keep the full database undisplayed (but able to be searched).  Additionally, the user-friendliness of the UI could be improved by adding "info boxes" on hovering over the input boxes.  For example,it is not clear that the datetime input should be entered as dd/mm/yyyy or dd/m/yyyy.  In addition to the "info boxes" the program could be improved to enforce a specfied datetime format.

