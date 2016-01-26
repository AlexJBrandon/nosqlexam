$match = array('$match' => array('archived' => false, 'score' => array('$gt' => 100)));
$group = array('$group' => array('_id' => '$id', 'totalscore' => array('$sum' => '$score')));
$sort = array('$sort' => array('totalscore' => 1));
$limit = array('$limit' => 30);
$pipeline = array($match, $group, $sort, $limit);

$out = $collection -> aggregate($pipeline);		