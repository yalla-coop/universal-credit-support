-- trgger to delete old steps translations if the english content is updated

CREATE OR REPLACE FUNCTION delete_old_steps_i18n_on_update_content_fn()
RETURNS TRIGGER AS $$
BEGIN
  IF (
    OLD.title != NEW.title
    OR OLD.description != NEW.description
    OR OLD.page_title != NEW.page_title
    OR OLD.page_description != NEW.page_description
    OR TRIM(OLD.how_long_does_it_take::text, '"') != TRIM(NEW.how_long_does_it_take::text, '"')
    OR TRIM(OLD.where_do_you_need_to_go::text, '"') != TRIM(NEW.where_do_you_need_to_go::text, '"')
    OR TRIM(OLD.things_you_will_need::text, '"') != TRIM(NEW.things_you_will_need::text, '"')
    OR TRIM(OLD.what_you_will_need_to_know::text, '"') != TRIM(NEW.what_you_will_need_to_know::text, '"')
    OR OLD.top_tip != NEW.top_tip
    OR TRIM(OLD.other_tips::text, '"') != TRIM(NEW.other_tips::text, '"')
  ) THEN
    DELETE FROM steps_i18n WHERE step_id = OLD.id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER delete_old_steps_i18n_on_update_content_tr
  AFTER UPDATE ON steps
    FOR EACH ROW
      EXECUTE PROCEDURE delete_old_steps_i18n_on_update_content_fn();