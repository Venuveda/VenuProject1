let tool = {
    version:4,
    languages : ["java", "phython", "ruby", "c++"],
    name: "selenium", 

    start {function(){console.log ( this. name+ " started" );

    stop {function(){console.log ( this. name+ " stopped" );
        
    }}
}

console.log (tool["name"]);
console.log (tool["version"]);