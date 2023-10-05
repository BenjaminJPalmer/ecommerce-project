# Benjamin Palmer - Ecommerce Project SOFDEV03

## Database Information

The database is a mySQL database on an Apache web server. The connection details can be found in config/database.php. You can find a database dump in the same directory to restore, or you can run the seeder in the seeders/populate.php to add the relevant test data.

The PHP version being used is `8.2.0`.

## Styling

Styling has been done with SCSS to make use of nesting and additional functionality such as `@extend`. All `.scss` files are imported into `main.scss`. If a new stylesheet is added, the relevant import statement will need to be added to this main file. You can generate the `.css` stylesheet used in the project by running `sass public/css/sass/main.scss public/css/styles.css` in the root of the project.

TODO: Add seeder
TODO: Build checkout view
