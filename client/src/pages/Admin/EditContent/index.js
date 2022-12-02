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
import UnderReview from './UnderReview';

const { Col, Row } = Grid;

const EditContent = () => {
  const [sections, setSections] = useState([]);
  const [pendingSections, setPendingSections] = useState([]);
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
          const { approvedSections, _pendingSections } = data.reduce(
            (accumulator, section) => {
              return section.approvalStatus === 'APPROVED'
                ? {
                    approvedSections: [
                      ...accumulator.approvedSections,
                      section,
                    ],
                    _pendingSections: accumulator._pendingSections,
                  }
                : {
                    approvedSections: accumulator.approvedSections,
                    _pendingSections: [
                      ...accumulator._pendingSections,
                      section,
                    ],
                  };
            },
            {
              approvedSections: [],
              _pendingSections: [],
            }
          );

          setSections(
            approvedSections.map((item) => ({
              ...item,
              id: item.id.toString(),
            }))
          );
          if (_pendingSections.length > 0) {
            setPendingSections(_pendingSections);
          }
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
            Drag the sections to reorder the content that your clients see or
            click you can hide any sections that isn't relevant to your
            organisation.
          </T.P>
        </Col>
      </Row>
      <Row>
        <Col w={[4, 12, 12]}>
          <ButtonsSection
            setButtons={setSections}
            buttons={sections}
            handleHide={handleHide}
            handleEdit={handleEdit}
            m="2"
          />
        </Col>
      </Row>
      {pendingSections?.length > 0 && (
        <UnderReview sections={pendingSections} handleEdit={handleEdit} />
      )}
      {pendingSections?.length < 2 && (
        <Row mb="6" mt="5">
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
      <Row mt={pendingSections?.length < 2 ? '0' : '5'}>
        <Col w={[4, 10, 5]}>
          <Button handleClick={handleSaveChange}>Save changes</Button>
        </Col>
      </Row>
    </>
  );
};

export default EditContent;
