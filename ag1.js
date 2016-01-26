var match = { $match : { archived : false } };
var group = { $group : { _id : "$archived", avgScore : {$avg : "$score"}}};

var wynik = db.exam.aggregate(
match,
group
);