/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable camelcase */
let Promise;

exports.setup = (options) => {
  Promise = options.Promise;
};

exports.up = async (db) => {
  await db.runSql('begin;');

  // earn_groups_profiles
  await db.runSql(
    `
    ALTER TABLE steps
      ADD COLUMN how_long_does_it_take_new JSONB,
      ADD COLUMN where_do_you_need_to_go_new JSONB,
      ADD COLUMN things_you_will_need_new JSONB[],
      ADD COLUMN what_you_will_need_to_know_new JSONB[];
    `,
  );

  const steps = await db.runSql(
    `
    SELECT
      id,
      how_long_does_it_take,
      where_do_you_need_to_go,
      things_you_will_need,
      what_you_will_need_to_know
    FROM steps
    `,
  );

  const ids = steps.rows.map(({ id }) => id);
  // eslint-disable-next-line camelcase
  const convertedSteps = steps.rows.map(
    ({
      how_long_does_it_take,
      where_do_you_need_to_go,
      things_you_will_need,
      what_you_will_need_to_know,
    }) => {
      return {
        how_long_does_it_take_new: how_long_does_it_take,
        where_do_you_need_to_go_new: where_do_you_need_to_go,
        things_you_will_need_new: things_you_will_need,
        what_you_will_need_to_know_new: what_you_will_need_to_know,
      };
    },
  );

  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    const convertedStep = convertedSteps[i];
    await db.runSql(
      `
      UPDATE steps
        SET
          how_long_does_it_take_new = $1,
          where_do_you_need_to_go_new = $2,
          things_you_will_need_new = $3,
          what_you_will_need_to_know_new = $4
      WHERE id = $5
      `,
      [
        convertedStep.how_long_does_it_take_new,
        convertedStep.where_do_you_need_to_go_new,
        convertedStep.things_you_will_need_new,
        convertedStep.what_you_will_need_to_know_new,
        id,
      ],
    );
  }

  await db.runSql(
    `
    ALTER TABLE steps
      DROP COLUMN "how_long_does_it_take",
      DROP COLUMN "where_do_you_need_to_go",
      DROP COLUMN "things_you_will_need",
      DROP COLUMN "what_you_will_need_to_know";
  `,
  );

  await db.runSql(
    `
    ALTER TABLE steps
      RENAME COLUMN how_long_does_it_take_new TO how_long_does_it_take;
  `,
  );

  await db.runSql(
    `
    ALTER TABLE steps
      RENAME COLUMN where_do_you_need_to_go_new TO where_do_you_need_to_go;
  `,
  );

  await db.runSql(
    `
    ALTER TABLE steps
      RENAME COLUMN things_you_will_need_new TO things_you_will_need;
  `,
  );

  await db.runSql(
    `
    ALTER TABLE steps
      RENAME COLUMN what_you_will_need_to_know_new TO what_you_will_need_to_know;
  `,
  );
  await db.runSql('commit;');
};

exports.down = async (db) => {
  await db.runSql('begin;');
  await db.runSql(
    `
    ALTER TABLE steps
      ADD COLUMN how_long_does_it_take_new JSON,
      ADD COLUMN where_do_you_need_to_go_new JSON,
      ADD COLUMN things_you_will_need_new JSON[],
      ADD COLUMN what_you_will_need_to_know_new JSON[];
    `,
  );

  const steps = await db.runSql(
    `
    SELECT
      id,
      how_long_does_it_take,
      where_do_you_need_to_go,
      things_you_will_need,
      what_you_will_need_to_know
    FROM steps
    `,
  );

  const ids = steps.rows.map(({ id }) => id);
  // eslint-disable-next-line camelcase
  const convertedSteps = steps.rows.map(
    ({
      how_long_does_it_take,
      where_do_you_need_to_go,
      things_you_will_need,
      what_you_will_need_to_know,
    }) => {
      return {
        how_long_does_it_take_new: how_long_does_it_take,
        where_do_you_need_to_go_new: where_do_you_need_to_go,
        things_you_will_need_new: things_you_will_need,
        what_you_will_need_to_know_new: what_you_will_need_to_know,
      };
    },
  );

  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    const convertedStep = convertedSteps[i];
    await db.runSql(
      `
      UPDATE steps
        SET
          how_long_does_it_take_new = $1,
          where_do_you_need_to_go_new = $2,
          things_you_will_need_new = $3,
          what_you_will_need_to_know_new = $4
      WHERE id = $5
      `,
      [
        convertedStep.how_long_does_it_take_new,
        convertedStep.where_do_you_need_to_go_new,
        convertedStep.things_you_will_need_new,
        convertedStep.what_you_will_need_to_know_new,
        id,
      ],
    );
  }

  await db.runSql(
    `
    ALTER TABLE steps
      DROP COLUMN "how_long_does_it_take",
      DROP COLUMN "where_do_you_need_to_go",
      DROP COLUMN "things_you_will_need",
      DROP COLUMN "what_you_will_need_to_know";
  `,
  );

  await db.runSql(
    `
    ALTER TABLE steps
      RENAME COLUMN how_long_does_it_take_new TO how_long_does_it_take;
  `,
  );

  await db.runSql(
    `
    ALTER TABLE steps
      RENAME COLUMN where_do_you_need_to_go_new TO where_do_you_need_to_go;
  `,
  );

  await db.runSql(
    `
    ALTER TABLE steps
      RENAME COLUMN things_you_will_need_new TO things_you_will_need;
  `,
  );

  await db.runSql(
    `
    ALTER TABLE steps
      RENAME COLUMN what_you_will_need_to_know_new TO what_you_will_need_to_know;
  `,
  );

  await db.runSql('commit;');
};

exports._meta = {
  version: 1,
};
