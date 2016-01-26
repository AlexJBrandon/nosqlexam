var match = {$match : { edited : false , score : { $gt: 100}}};
var group = {$group : { _id : "$id", totalscore : {$sum: "$score"}}};
var sort = {$sort : { totalscore : 1 }};
var limit = {$limit : 30};
		
var wynik = db.exam.aggregate(
match,
group,
sort,
limit
);		
