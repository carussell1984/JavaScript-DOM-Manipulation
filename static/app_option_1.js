var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach((ufosighting) => {
    var row = tbody.append("tr");
    Object.entries(ufosighting).forEach(([key, value]) => {
        var cell = row.append("td")
        cell.text(value)
    }); 
});

//select the button 
var button = d3.select("#filter-btn");

//establish function when the button is clicked
button.on("click", function() {
    var inputUFO = d3.select("#datetime");

    var inputValue = inputUFO.property("value");

    console.log(inputValue);
    console.log(tableData);
    
    
    
    var filteredData = tableData.filter(Data  => Data.datetime === inputValue)

    
    console.log(filteredData);
    

    tbody.text("")
    filteredData.forEach((filtered) => {
        var row = tbody.append("tr");
        Object.entries(filtered).forEach(([key, value]) => {
            var cell = row.append("td")
            cell.text(value)
        }); 
    });
});
