-- trgger to delete old common translations if the english content is updated

CREATE OR REPLACE FUNCTION delete_old_common_i18n_on_update_content_fn()
RETURNS TRIGGER AS $$
BEGIN
  IF (trim(OLD.content::text, '"') != trim(NEW.content::text, '"')) THEN
    DELETE FROM common_i18n WHERE common_id = OLD.id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER delete_old_common_i18n_on_update_content_tr
  AFTER UPDATE OF content ON common
    FOR EACH ROW
      EXECUTE PROCEDURE delete_old_common_i18n_on_update_content_fn();

