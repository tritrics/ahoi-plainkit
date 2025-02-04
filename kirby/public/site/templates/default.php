<?php

$index = dirname(dirname(__DIR__)) . '/frontend/index.html';
if (is_file(($index))) {
  include($index);
  return;
}
?>

<h1>Page not found</h1>
<h3>Error 404</h3>