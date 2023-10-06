# Benjamin Palmer - Ecommerce Project SOFDEV03

### Prerequisites

- PHP 8.2.0
- [Node](https://nodejs.org/en/download) - easy way to install SASS globally via npm
- [SASS](https://sass-lang.com/install/)
- Local setup with mySQL and an Apache server, such as MAMP or XAMPP

## Local setup

If using a local server environment such as MAMP or XAMPP, simply put the unzipped project directory `ecommerce-project` into the `htdocs` directory within the relevant application directory and you will be able to access it at `localhost/ecommerce-project`. You may have to apend localhost with a specific port number, for instance for me using MAMP, my homepage is located at `localhost:8888/ecommerce-project`.

```
Applications/MAMP/htdocs/ecommerce-project
```

## Database Information

The database is a mySQL database on an Apache web server. The connection details can be found in `config/database.php`. You may have to adjust the username and password details here depending on your environment. I have mainly been working with MAMP for my local setup where the `root` user's password is 'root', however when testing on a Windows machine with XAMPP I noticed the `root` user's password is ''.

You can create and seed the database using the `seeders/populate.php` file. Simply run the below command in the root of the project and it should seed the database with all the relevant product and product category data.

```
php seeders/populate.php
```

## Styling

Styling has been done with SCSS to make use of nesting and additional functionality, although a lot of this is now possible with default CSS. All `.scss` files are imported into `main.scss`. If a new stylesheet is added, the relevant import statement will need to be added to this main file.

You can generate the `styles.css` stylesheet used in the project by running the command below in the root of the project (which must be done if any changes are made to the `.scss` files).

```
sass public/css/sass/main.scss public/css/styles.css
```

If you would like sass to automatically update styles as you go, you can add the `--watch` flag to the command before making any changes.

```
sass --watch public/css/sass/main.scss public/css/styles.css
```

# Testing

Check links are working properly via XAMPP on Windows.
