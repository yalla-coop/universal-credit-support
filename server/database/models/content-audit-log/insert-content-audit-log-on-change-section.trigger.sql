-- Trigger to insert new row into content_audit_log whenever
-- a section is updated/created

CREATE OR REPLACE FUNCTION insert_content_audit_log_fn()
  RETURNS TRIGGER AS $$
  BEGIN
    INSERT INTO content_audit_log AS cal (
      user_id,
      section_id,
      type,
      updated_content,
      topics
    ) VALUES (
      COALESCE(NEW.updated_by, NEW.created_by),
      NEW.id,
      CASE
        WHEN TG_OP = 'INSERT' THEN 'ADD'
        WHEN TG_OP = 'DELETE' THEN 'DELETE'
        ELSE 'UPDATE'
      END::content_audit_log_operations,
      row_to_json(NEW.*),
      (SELECT jsonb_agg(topics.*) FROM topics WHERE section_id = NEW.id)
    );
  RETURN NEW;
  END;
  $$
  LANGUAGE plpgsql;

CREATE TRIGGER insert_content_audit_log_tr AFTER INSERT OR UPDATE ON sections
  FOR EACH ROW
    EXECUTE PROCEDURE insert_content_audit_log_fn();