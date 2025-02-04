<?php

namespace Tritrics\AhoiKit\Controllers;

use Kirby\Cms\Response;
use Tritrics\AhoiKit\Services\SitemapService;

class SitemapController
{
  function get()
  {
    if (!kirby()->option('tritrics.ahoi-kit.enabled.sitemap', false)) {
      return false;
    }

    $pages = site()->pages()->published()->index();
    $languages = kirby()->languages();

    // ignore special pages
    $exclude_ids = kirby()->option('tritrics.ahoi-kit.sitemap-exclude-ids');
    if (is_string($exclude_ids)) {
      $exclude_ids = [$exclude_ids ];
    }
    if (!is_array($exclude_ids)) {
      $exclude_ids = [];
    }

    // ignore special templates
    $exclude_templates = kirby()->option('tritrics.ahoi-kit.sitemap-exclude-templates');
    if (is_string($exclude_templates)) {
      $exclude_templates = [$exclude_templates ];
    }
    if (!is_array($exclude_templates)) {
      $exclude_templates = [];
    }
    $xml = SitemapService::get($pages, $languages, $exclude_ids, $exclude_templates);
    return new Response($xml, 'application/xml');
  }
}