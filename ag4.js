var match = {$match: { $text: { $search: "think"}, score: {$lt: 10}}};
var group = {$group: {_id: null, total : {$sum: 1}}};
		
var wynik = db.exam.aggregate(
match,
group
);		