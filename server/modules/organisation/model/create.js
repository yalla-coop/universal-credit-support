import { query } from '../../../database';

const createOrganisation = async (
  { organisationName, typeOfOrganisation, uniqueSlug },
  client,
) => {
  const sql = `
    INSERT INTO organisations (
      organisation_name,
      type_of_organisation,
      unique_slug
    )
    VALUES(
      $1,
      $2,
      $3
    ) RETURNING *
  `;
  const values = [organisationName, typeOfOrganisation, uniqueSlug];

  const res = await query(sql, values, client);
  return res.rows[0];
};

export { createOrganisation };
