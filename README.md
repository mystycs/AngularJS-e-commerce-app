# AngularJS-e-commerce-app

AngularJS-e-commerce-app is a AngularJS based app with a Rails backend. Some of the libraries and frameworks used are Devise/Rails/AnguluarJS/ngCart/angularModalService/simple_token_authentication and more.

The app features an administration system (The first user created is the administrator). In the administration system you can list all users whom are not admin, add products, and submit a JSON file of a list of products. Once logged in as first user admin portal link will appear on top right of nav or can be accessed by visiting http://localhost:3000/#/admin.

The cart system uses ngCart and has the ability to change quantities/remove in checkout. Buy button posts and saves order to db.

The API uses simple_token_authentication provided the email and auth_token are passed in header. The only thing does not require tokens are to load all the given products on the main page.

The entire app is built on a RESTful API scheme.

The app uses Devise for its authentication system and angular communicates with it.

The app uses PostgreSQL for its database. Please change database.yml to your specifications and run rake db:setup followed by rake db:migrate

## Running Locally

```  
git clone git@github.com:mystycs/AngularJS-e-commerce-app.git # or clone your own fork or download the given app
cd AngularJS-e-commerce-app
bundle install
rake db:setup
rake db:migrate
rails s
```

## Contribute

All and any kinds of contributions are always welcome!

## License

MIT. See [LICENSE](https://github.com/mystycs/AngularJS-e-commerce-app/blob/master/LICENSE) for details.
