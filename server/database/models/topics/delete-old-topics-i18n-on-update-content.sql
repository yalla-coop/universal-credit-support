-- trgger to delete old topics translations if the english content is updated

CREATE OR REPLACE FUNCTION delete_old_topics_i18n_on_update_content_fn()
RETURNS TRIGGER AS $$
BEGIN
  IF (trim(OLD.content::text, '"') != trim(NEW.content::text, '"')) THEN
    DELETE FROM topics_i18n WHERE topic_id = OLD.id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER delete_old_topics_i18n_on_update_content_tr
  AFTER UPDATE OF content ON topics
    FOR EACH ROW
      EXECUTE PROCEDURE delete_old_topics_i18n_on_update_content_fn();

