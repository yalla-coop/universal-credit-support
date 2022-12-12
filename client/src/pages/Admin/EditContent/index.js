import { useState, useEffect } from 'react';
import { Sections } from '../../../api-calls';
import { message } from 'antd';
import { useAdminOrg } from '../../../context/admin-org';

import {
  Typography as T,
  Grid,
  ButtonsSection,
  Button,
} from '../../../components';
import { navRoutes } from '../../../constants';
import { useNavigate } from 'react-router-dom';
import ContentSection from './ContentSection';

const { Col, Row } = Grid;

const EditContent = () => {
  const [sections, setSections] = useState([]);
  const navigate = useNavigate();

  const { adminOrg } = useAdminOrg();

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      const hideMessage = message.loading('Loading...');
      const { data, error } = await Sections.getSections({
        uniqueSlug: adminOrg.uniqueSlug,
      });
      if (mounted) {
        if (error) {
          message.error('Something went wrong, please try again later');
        } else {
          setSections(data);
        }
        hideMessage();
      }
    }

    fetchData();
    return () => {
      mounted = false;
    };
  }, [adminOrg.uniqueSlug]);

  const handleHide = (item) => {
    setSections((old) =>
      old.map((elm) =>
        elm.id === item.id ? { ...elm, hidden: !elm?.hidden } : elm
      )
    );
  };

  const handleEdit = (item) => {
    navigate(navRoutes.ADMIN.SECTION.replace(':id', item.id));
  };

  const handleSaveChange = async () => {
    const orderedItems = sections.map((item, index) => ({
      ...item,
      position: index + 1,
    }));

    const hideMessage = message.loading('Loading...');
    const { error } = await Sections.updateSectionsOrder({
      body: {
        sections: orderedItems,
        uniqueSlug: adminOrg.uniqueSlug,
      },
    });
    if (error) {
      message.error('Something went wrong, please try again later');
    }
    hideMessage();
  };

  const approvedSections = sections.filter(
    (item) => item.approvalStatus === 'APPROVED'
  );

  const rejectedSections = sections.filter(
    (item) => item.approvalStatus === 'REJECTED'
  );
  const awaitingApprovalSections = sections.filter(
    (item) => item.approvalStatus === 'AWAITING_APPROVAL'
  );

  const totalSectionsNotRejected = sections.filter(
    (item) => item.approvalStatus !== 'REJECTED'
  );

  return (
    <>
      <Row mb="6">
        <Col w={[4, 12, 8]}>
          <T.H1>Add/update content</T.H1>
        </Col>
      </Row>
      <Row mb="5">
        <Col w={[4, 12, 8]}>
          <T.P color="neutralDark">
            Drag the sections to reorder the content that your clients see, add
            a new section or hide any sections that isn't relevant to your
            organisation.
          </T.P>
        </Col>
      </Row>
      <Row mb={5}>
        <Col w={[4, 12, 12]}>
          <ButtonsSection
            setButtons={setSections}
            buttons={approvedSections}
            handleHide={handleHide}
            handleEdit={handleEdit}
            m="2"
          />
        </Col>
      </Row>
      {awaitingApprovalSections?.length > 0 && (
        <ContentSection
          sections={awaitingApprovalSections}
          handleEdit={handleEdit}
          title="Under review"
        />
      )}
      {rejectedSections?.length > 0 && (
        <ContentSection sections={rejectedSections} title="Rejected sections" />
      )}
      {totalSectionsNotRejected?.length < 7 && (
        <Row mb="6">
          <Col w={[4, 10, 5]}>
            <Button
              variant="secondary"
              to={navRoutes.ADMIN.SECTION.replace(':id', 'new')}
            >
              Add new section
            </Button>
          </Col>
        </Row>
      )}
      <Row>
        <Col w={[4, 10, 5]}>
          <Button handleClick={handleSaveChange}>Save changes</Button>
        </Col>
      </Row>
    </>
  );
};

export default EditContent;
