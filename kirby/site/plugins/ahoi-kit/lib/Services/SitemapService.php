<?php

namespace Tritrics\AhoiKit\Services;

use SimpleXMLElement;
use Kirby\Cms\Pages;
use Kirby\Cms\Languages;
use Kirby\Toolkit\V;

/**
 */
class SitemapService
{
  /**
   * Getting the xml sitemap
   */
  public static function get(Pages $pages, Languages $languages, array $exclude_ids, array $exclude_templates): String
  {
    $xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><urlset />');
    $xml->addAttribute('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance');
    $xml->addAttribute('xsi:schemaLocation', 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.w3.org/TR/xhtml11/xhtml11_schema.html http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd');
    $xml->addAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
    $xml->addAttribute('xmlns:xhtml', 'http://www.w3.org/TR/xhtml11/xhtml11_schema.html');
    foreach($pages as $page) {
      if (V::in($page->uri(), $exclude_ids) || V::in($page->intendedTemplate(), $exclude_templates)) {
        continue;
      }
      $url = $xml->addChild('url');
      $url->addChild('loc', html($page->url()));
      foreach($languages as $language) {
         if ($page->content($language->code())->exists()) {
          $link = $url->addChild('xhtml:link');
          $link->addAttribute('rel', 'alternate');
          $link->addAttribute('hreflang', $language->code());
          $link->addAttribute('href', $page->url($language->code()));
         }
      }
      $url->addChild('lastmod', option('date.handler') === 'strftime' ? $page->modified('%FT%X%z') : $page->modified('c'));
      $url->addChild('priority', $page->isHomePage() ? 1 : number_format(0.7 / $page->depth(), 1));
    }
    return $xml->asXML();
  }
}
