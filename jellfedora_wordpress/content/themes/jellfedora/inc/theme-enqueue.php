<?php

function jellfedora_script_stylelink()
{
    wp_enqueue_style(
        'app_css',
        get_theme_file_uri('/public/css/app.css'),
        ['vendors_css'],
        '1.0.0'
    );

    wp_enqueue_style(
        'vendors_css',
        get_theme_file_uri('/public/css/vendors.css'),
        '1.0.0'
    );

    wp_enqueue_script(
        'app_js',
        get_theme_file_uri('/public/js/app.js'),
        ['vendors_js'],
        '1.0.0',
        true
    );
    wp_enqueue_script(
        'vendors_js',
        get_theme_file_uri('/public/js/vendors.js'),
        [],
        '1.0.0',
        true
    );
}

//  Je la met a un hook

add_action('wp_enqueue_scripts', 'jellfedora_script_stylelink');
