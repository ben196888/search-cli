'use strict';

const ORGANIZATION_FIELD = [
  { name: '_id', ref: true },
  'url',
  'external_id',
  'name',
  'domain_names',
  'created_at',
  'details',
  'shared_tickets', // Boolean
  'tags',
];

const USER_FIELD = [
  { name: '_id', ref: true },
  'url',
  'external_id',
  'name',
  'alias',
  'created_at',
  'active', // Boolean
  'verified', // Boolean
  'shared', // Boolean
  'locale',
  'timezone',
  'last_login_at',
  'email',
  'phone',
  'signature',
  'organization_id',
  'tags',
  'suspended', // Boolean
  'role',
];

const TICKET_FIELD = [
  { name: '_id', ref: true },
  'url',
  'external_id',
  'created_at',
  'type',
  'subject',
  'description',
  'priority',
  'status',
  'submitter_id',
  'assignee_id',
  'organization_id',
  'tags',
  'has_incidents', // Boolean
  'due_at',
  'via',
];

module.exports = {
  ORGANIZATIONS: () => ORGANIZATION_FIELD,
  USERS: () => USER_FIELD,
  TICKETS: () => TICKET_FIELD,
};
