import {Knex} from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('primelist', table => {
    table.increments('id').primary();
    table.string('fromNumber').notNullable();
    table.string('toNumber').notNullable();
    table.string('primes').notNullable();
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('primelist');
}