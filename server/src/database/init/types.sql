DROP TYPE IF EXISTS user_roles CASCADE;
DROP TYPE IF EXISTS user_statuses CASCADE;
DROP TYPE IF EXISTS organisation_statuses CASCADE;
DROP TYPE IF EXISTS stage_types CASCADE;
DROP TYPE IF EXISTS content_audit_log_types CASCADE;
DROP TYPE IF EXISTS media_file_categories CASCADE;
DROP TYPE IF EXISTS language_codes CASCADE;

CREATE TYPE user_roles AS ENUM('ADMIN', 'SUPER_ADMIN');
CREATE TYPE user_statuses AS ENUM('ACTIVE', 'DELETED');
CREATE TYPE organisation_statuses AS ENUM('AWAITING_APPROVAL', 'APPROVED', 'REJECTED', 'DELETED');
CREATE TYPE stage_types AS ENUM('BEFORE_CLAIMING', 'CLAIMING', 'AFTER_CLAIMING');
CREATE TYPE content_audit_log_types AS ENUM('ADD', 'UPDATE', 'DELETE');
CREATE TYPE media_file_categories AS ENUM('LOGO'); -- add categories here
CREATE TYPE language_codes AS ENUM('af','sq','am','ar','hy','az','bn','bs','bg','zh','hr','cs','da','nl','en','et','fa','tl','fi','fr','ka','de','el','gu','ht','he','hi','hu','is','id','ga','it','ja','kk','ko','lv','lt','mk','ms','ml','mt','mr','mn','no','ps','pl','pt','pa','ro','ru','sr','si','sk','sl','so','es','sw','sv','ta','te','th','tr','uk','ur','uz','vi','cy');


