$match = array('$match' => array('$text' => array('$search' => 'think'), 'score' => array($lt => 10)));
$group = array('$group' => array('_id' => '0', 'total' => array('$sum' => '1')));
$pipeline = array($match, $group);

$out = $collection -> aggregate($pipeline);