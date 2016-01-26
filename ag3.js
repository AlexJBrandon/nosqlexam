var match = {$match: { $text: { $search: "riot"}, subreddit: "summonerschool"}};
var group = {$group: {_id: null, total : {$sum: 1}}};

var wynik = db.exam.aggregate(
match,
group
);	