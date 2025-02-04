<?php

use Kirby\Toolkit\Str;
use Tritrics\AhoiKit\Controllers\SitemapController;

/**
 * Collection of Helper-Hooks and -methods
 */

kirby()::plugin('tritrics/ahoi-kit', [
  'options' => [
    'enabled' => [
      'sitemap' => true,
    ],
    'sitemap-ignore-ids' => [],
    'sitemap-ignore-templates' => [],
  ],
  'hooks' => [
    
    // compute title from filename
    // assign image-template for direct upload in files section
    // @todo: put in a separate file model class
    'file.create:after' => function ($file) {
      $words = array_filter(preg_split('/( |\-|_|\.)/', (string) $file->name()));
      $title = substr(Str::ucwords(implode(' ', $words)), 0, 64);
      $data = [
        'title' => $title ?? 'empty titel'
      ];
      if ($file->type() == 'image' and $file->template() == '') {
        $data['template'] = 'image';
      }
      return $file->update($data);
    }
  ],
  'routes' => function ($kirby) {
    $routes = array();
    if ($kirby->option('tritrics.ahoi-kit.enabled.sitemap', false)) {
      $routes[] = [
        'pattern' => 'sitemap.xml',
        'action' => function () {
          $controller = new SitemapController();
          return $controller->get();
        },
      ];
      $routes[] = [
        'pattern' => '([a-z]{2}/)?sitemap(.xml)?',
        'action' => function () {
          return go('sitemap.xml', 301);
        },
      ];
    }
    return $routes;
  }
]);