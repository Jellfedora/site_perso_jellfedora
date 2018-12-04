# Jellfedora

## My personal website

* Launch composer update via the terminal in the root of the project.

* Import the BDD

* Duplicate "wp-config-sample" and rename it to "wp-config"

* Import database and enter data in "wp-config":

* Edit define('WP_CONTENT_URL', 'http://_URLDEWORDPRESS_/content' );  (Put the url of the home / content)

* sudo chown -R <user>:www-data .
* sudo find . -type f -exec chmod 664 {} +
* sudo find . -type d -exec chmod 775 {} +
* sudo chmod 644 .htaccess

