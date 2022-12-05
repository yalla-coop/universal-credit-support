-- trgger to delete old sections translations if the english title is updated

CREATE OR REPLACE FUNCTION delete_old_sections_i18n_on_update_title_fn()
RETURNS TRIGGER AS $$
BEGIN
  IF (OLD.title != NEW.title) THEN
    DELETE FROM sections_i18n WHERE section_id = OLD.id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER delete_old_sections_i18n_on_update_title_tr
  AFTER UPDATE OF title ON sections
    FOR EACH ROW
      EXECUTE PROCEDURE delete_old_sections_i18n_on_update_title_fn();

