DROP TYPE IF EXISTS user_roles CASCADE;
DROP TYPE IF EXISTS user_statuses CASCADE;
DROP TYPE IF EXISTS content_audit_log_operations CASCADE;
DROP TYPE IF EXISTS media_file_categories CASCADE;

CREATE TYPE user_roles AS ENUM('ADMIN', 'SUPER_ADMIN');
CREATE TYPE user_statuses AS ENUM('ACTIVE', 'DELETED');
CREATE TYPE content_audit_log_operations AS ENUM('ADD', 'UPDATE', 'DELETE');
CREATE TYPE media_file_categories AS ENUM('LOGO'); -- add categories here
