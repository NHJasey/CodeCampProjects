var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: 315-337-3000,
        address: ["131 Fake St", "Fakeville", "NY", "10001"]
        },
    steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: 213-292-3838,
        address: ["828 Not Real Rd", "Fake Town", "NY", "10000"]
        }
};

var list = function (friends) {
    for (var firstName in friends) {
        console.log(firstName);
    }
};
 
 var search = function (name) {
    for(var prop in friends) {
        if(friends[prop].firstName === name) {
            console.log(friends[prop]);
            return friends[prop];
        }
    }
};

list(friends);
search("Steve");
