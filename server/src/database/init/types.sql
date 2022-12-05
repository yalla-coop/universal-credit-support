DROP TYPE IF EXISTS user_roles CASCADE;
DROP TYPE IF EXISTS user_statuses CASCADE;
DROP TYPE IF EXISTS organisation_statuses CASCADE;
DROP TYPE IF EXISTS content_audit_log_operations CASCADE;
DROP TYPE IF EXISTS media_file_categories CASCADE;
DROP TYPE IF EXISTS language_codes CASCADE;
DROP TYPE IF EXISTS section_approval_statuses CASCADE;

CREATE TYPE user_roles AS ENUM('ADMIN', 'SUPER_ADMIN');
CREATE TYPE user_statuses AS ENUM('ACTIVE', 'DELETED');
CREATE TYPE organisation_statuses AS ENUM('AWAITING_APPROVAL', 'APPROVED', 'REJECTED', 'DELETED');
CREATE TYPE content_audit_log_operations AS ENUM('ADD', 'UPDATE', 'DELETE');
CREATE TYPE media_file_categories AS ENUM('LOGO'); -- add categories here
CREATE TYPE language_codes AS ENUM('en','fr','de','es','ur','it','pl','hi','ru','ar','pt','cy'); 
CREATE TYPE section_approval_statuses AS ENUM('AWAITING_APPROVAL', 'APPROVED', 'REJECTED'); 
