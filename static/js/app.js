// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
};

// 1. Create a variable to keep track of all the filters as an object.
var  filters = {};
var selValue;
var selId;


// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.

  selInput = d3.select(this);
  console.log(selInput);

    // 4b. Save the value that was changed as a variable.

  selValue = selInput.property("value");
  console.log(selInput);

    // 4c. Save the id of the filter that was changed as a variable.

  selId = selInput.attr("id");
  console.log(selInput);

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.


  if (selValue)  {

    filters[selId] = selValue;

  } else {

    delete filters[selId];

  }

  filters = {"header" : selId, "value" : selValue};

  console.log(filters);

    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  };
  

  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.

    let filterData = tableData;
    let arr_filters = [];
    let arr_length;

    arr_filters.push(filters);

    arr_length = arr_filters.length;

    // 9. Loop through all of the filters and keep any data that
    // matches the filter values

    for (i=0; i < arr_length; i++) {

    arr_filters.forEach( function(item) {

    let h = item["header"];
    let v = item["value"];

    if ( h === "datetime") {

    filterData = filterData.filter(item => item.datetime === v ); 
  
    }

    if ( h === "city") {

    filterData = filterData.filter(item => item.city === v ); 
  
    }

    else if ( h === "state") {

    filterData = filterData.filter(item => item.state === v ); 
  
    }

    else if ( h === "country") {

    filterData = filterData.filter(item => item.country === v ); 
  
    }

    else if ( h === "shape") {

    filterData = filterData.filter(item => item.shape ===  v ); 
  
    }

    else {

    console.log("none of the conditions executed");

    }

    }

    )

    };  // this is the closing bracket for the if statement
  
    // 10. Finally, rebuild the table using the filtered data

    buildTable(filterData);
    
  };
  
  // 2. Attach an event to listen for changes to each filter

  d3.selectAll("input").on("change", updateFilters);

  // d3.selectAll("#filter-btn").on("click", filterTable);
  
  
  // Build the table when the page loads
  buildTable(tableData);
