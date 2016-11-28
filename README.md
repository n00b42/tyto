tyto - ServerSide ![alt tag](https://raw.github.com/jh3y/tyto/master/src/img/tyto.png)
===

This fork is based on [__tyto__ by jh3y](https://github.com/jh3y/tyto). See the original repo for documentation.

While __tyto__ uses the LocalStorage of your browser to store the boards in your browser, this fork aims at a serverside solution which allows the use of multiple devices/browsers to access the same boards.

### Server-Side?

This means, the boards etc are stored in a database and are accessd by a REST API.
The database engine used in this fork is MySQL and the API is written in PHP.

### Install

Additionally to __tyto__, you have to initiate a database (use the scheme in (serverside/scheme.sql)) and upload the php files alongside the __tyto__ instance.

### License

MIT
