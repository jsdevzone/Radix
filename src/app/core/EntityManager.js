var manager = new breeze.EntityManager('api/customers');

var query = new breeze.EntityQuery()
    .from("Customers");

manager.executeQuery(query).then(function(data){
    ko.applyBindings(data);
    console.log(data);
}).fail(function(e) {
    alert(e);
});
