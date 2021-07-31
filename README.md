# alfafly_server

Alfafly server
### Getting start

- use `typescript` for type-safe
- use `objection.js` with `pg` engine
- use `bullmq` with redis for queue

Using knex to handle migration and seeding
For more information please check [Migrations & Seeding](https://gist.github.com/NigelEarle/70db130cc040cc2868555b29a0278261)

### Setup database

```
createdb alfafly
psql alfafly

create role alfafly superuser;
grant all privileges on database alfafly to alfafly;

alter role alfafly with encrypted password '123456';
alter role alfafly with login;
```
