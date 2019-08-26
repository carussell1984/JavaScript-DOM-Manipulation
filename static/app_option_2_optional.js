var tableData = data;

var tbody = d3.select("tbody");

var datetime = d3.select("#datetime").property("value");
var city = d3.select("#city").property("value");
var state = d3.select("#state").property("value");
var country = d3.select("#country").property("value");
var shape = d3.select("#shape").property("value");

tableData.forEach((ufosighting) => {
    var row = tbody.append("tr");
    Object.entries(ufosighting).forEach(([key, value]) => {
        var cell = row.append("td")
        cell.text(value)
    }); 
});




//isolate button
var button = d3.select("#filter-btn");
//isolate userinputs


button.on("click", function() {
    console.log("clicked filter");
    var filtered = data;
    tbody.text("")

    var datetime = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    var shape = d3.select("#shape").property("value");

    console.log(datetime)
    console.log(city)
    console.log(state)
    console.log(country)
    console.log(shape)

    
    var inputs = [];
    var inputname = []
    if (datetime === "") {
        console.log("datetime was not selected")
    } else {
        inputs.push(datetime)
        inputname.push("datetime")
    }; 
    if (city === "") {
        console.log("city was not selected")
    } else {
        inputs.push(city)
        inputname.push("city")
    }; 
    if (state === "") {
        console.log("state was not selected")
    } else {
        inputs.push(state)
        inputname.push("state")
    }; 
    if (country === "") {
        console.log("country was not selected")
    } else {
        inputs.push(country)
        inputname.push("country")
    }; 
    if (shape === "") {
        console.log("shape was not selected")
        
    } else {
        inputs.push(shape)
        inputname.push("shape")
    }; 
    console.log(inputs)
    console.log(inputname)
    if (inputs.length != 0) {    
        for(i=0; i < inputs.length; i++) {
            name = inputname[i]
            input = inputs[i]
            console.log(name);
            console.log(input);
            filtered = filtered.filter(d => {
                if (d[name] === input) {
                    return (d[name] === input);
            }
            return (d[name] === input);
          });
        };
     };
    
    console.log(filtered)
    
    if (filtered.length != 0) {
    
        tbody.text("")
        filtered.forEach((filter) => {
            var row = tbody.append("tr");
            Object.entries(filter).forEach(([key, value]) => {
                var cell = row.append("td")
                cell.text(value)
            }); 
    
        });
    }
});
