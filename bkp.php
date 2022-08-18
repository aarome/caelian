<?php

/**
 * @file
 * Functions to support theming in the aventine theme.
 */

use Drupal\Component\Utility\Html;
use Drupal\Core\Url;

/**
 * Implements template_preprocess_html().
 *
 * @param array $variables
 */
function aventine_preprocess_html(&$variables) {

  $current_path = \Drupal::service('path.current')->getPath();
  $path_alias = \Drupal::service('path_alias.manager')->getAliasByPath($current_path);
  $path_alias = ltrim($path_alias, '/');
  $variables['attributes']['class'][] = 'path-' . Html::cleanCssIdentifier($path_alias);
  if ($current_path == '/node/53' || $current_path == '/it/node/53' && $path_alias == 'home') {
    $variables['attributes']['class'][] = 'home';
  }
}

/**
 * Implements template_preprocess_page.
 *
 * @param array $variables
 */
function aventine_preprocess_page(&$variables) {
  $site_name = \Drupal::configFactory()->get('system.site')->get('name');
  $variables['linked_site_name'] = ['#type' => 'link', '#title' => $site_name, '#url' => Url::fromRoute('<front>')];
}

/**
 * Implements template_preprocess_node.
 *
 * @param array $variables
 */
// Function aventine_preprocess_node(&$variables) {
//
// }.

/**
 * Change the link title of the language block.
 */
function aventine_preprocess_links__language_block(&$variables) {
  $variables['links']['en']['link']['#title'] = 'EN';
  $variables['links']['it']['link']['#title'] = 'IT';
}

/**
 *
 */
function aventine_preprocess_region(&$variables) {
  $variables['url'] = $_SERVER['REQUEST_URI'];
  $variables['#cache']['contexts'][] = 'url.path';
}
