import { Typography as T, Grid } from '../../../components';
import * as S from './style';

import { navRoutes } from '../../../constants';

const { Col } = Grid;

const ContentRow = ({
  organisationName,
  organisationId,
  organisationUniqueSlug,
  email,
  id,
  loggedInUser,
  title,
}) => {
  return (
    <>
      <Col w={[4, 12, 3]} mbT={2}>
        <T.Link
          color="neutralMain"
          weight="semi"
          style={{ width: '100%' }}
          underline
          to={navRoutes.SUPER_ADMIN.ORGANISATION_DETAILS.replace(
            ':id',
            organisationId
          )}
        >
          {organisationName}
        </T.Link>
      </Col>
      <Col w={[4, 12, 4]} mbT={2}>
        <T.P color="neutralMain">
          {email}{' '}
          {email === loggedInUser?.email && (
            <>
              {' '}
              <br /> (You)
            </>
          )}
        </T.P>
      </Col>

      <Col w={[4, 12, 5]}>
        <T.Link
          color="neutralMain"
          style={{ width: '100%' }}
          underline
          to={`${navRoutes.SUPER_ADMIN.REVIEW_SECTION.replace(
            ':id',
            id
          )}?uniqueSlug=${organisationUniqueSlug}&organisationId=${organisationId}`}
        >
          {title.replace(/\*/g, '')}
        </T.Link>
      </Col>
      <S.Divider />
    </>
  );
};

export default ContentRow;
