-- trgger to delete old landing_page_content translations if the english content is updated

CREATE OR REPLACE FUNCTION delete_old_landing_page_content_i18n_on_update_content_fn()
RETURNS TRIGGER AS $$
BEGIN
  IF (
    OLD.headline != NEW.headline
    OR OLD.subtitle != NEW.subtitle
    OR OLD.instructions != NEW.instructions
  ) THEN
    DELETE FROM landing_page_content_i18n WHERE landing_page_content_id = OLD.id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER delete_old_landing_page_content_i18n_on_update_content_tr
  AFTER UPDATE ON landing_page_content
    FOR EACH ROW
      EXECUTE PROCEDURE delete_old_landing_page_content_i18n_on_update_content_fn();