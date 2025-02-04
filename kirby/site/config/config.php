<?php

use Kirby\Toolkit\A;
use Kirby\Toolkit\Str;

date_default_timezone_set('Europe/Berlin');

return [
  'install' => true,
  'debug' => true,
  'languages' => false,
  'panel' => [
    'menu' => [
      'site' => [
        'label' => 'Webseite',
        'current' => function (): bool {
          $exclude = [
            'panel/pages/veranstaltung',
            'panel/pages/bookingrequest-list',
            'panel/pages/registration-list',
            'panel/system',
            'panel/users'
          ];
          $path  = Kirby\Cms\App::instance()->path();
          return A::every($exclude, fn($link) => !Str::startsWith($path, $link));
        }
      ],
      '-',
      'users',
      'system'
    ]
  ],
  'tritrics.ahoi-kit' => [
    'enabled' => [
      'sitemap' => true
    ],
    'sitemap-exclude-templates' => [],
  ],
  'tritrics.ahoi-v1' => [
    'enabled' => true,
    'blueprints' => true,
    'routes' => true,
    'form_security' => [
      'secret' => 'hui8h&gfkdiII9dh§2',
    ],
    'actions' => [],
  ]
];
