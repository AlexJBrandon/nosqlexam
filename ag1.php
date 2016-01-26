$match = array('$match' => array('archived' => false));
$group = array('$group' => array('_id' => '$archived', 'avgScore' => array('$avg' => '$score')));
$pipeline = array($match, $group);

$out = $collection -> aggregate($pipeline);