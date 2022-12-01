import { useState } from 'react';
import { BasicInput } from '../Inputs';
import { Col, Row } from '../Grid';
import { Popover } from 'antd';
import * as T from '../Typography';
import * as S from './style';
import TextWithIcon from '../TextWithIcon';

const Customise = ({ open, handleOpenChange }) => {
  return (
    <Popover
      content={
        <>
          <S.ActionText>
            This resource is customisable, Editing it will set for all
            organisations
          </S.ActionText>
          <S.ActionText
            color="blueLink"
            onClick={() => handleOpenChange(false, true)}
            display="block"
            mt={4}
          >
            Edit anyway
          </S.ActionText>
          <S.ActionText
            color="blueLink"
            onClick={() => handleOpenChange(false)}
            display="block"
            mt={2}
          >
            Close
          </S.ActionText>
        </>
      }
      title="Customisable Resource"
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <T.Link color="blueLink">Custom</T.Link>
    </Popover>
  );
};

const ResourcesSection = ({
  resource,
  setResource,
  removeResource,
  errors = {},
}) => {
  const [enableEdit, setEnableEdit] = useState(resource.type !== 'CUSTOM');
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen, allowEdit) => {
    setOpen(newOpen);
    if (allowEdit) {
      setEnableEdit(true);
    }
  };

  return (
    <Row mb="4" mbT={7}>
      <Col w={[4, 12, 6]}>
        <BasicInput
          label={
            <>
              Resource link{' '}
              {resource.type === 'CUSTOM' && (
                <Customise open={open} handleOpenChange={handleOpenChange} />
              )}
            </>
          }
          value={resource.url}
          handleChange={(value) =>
            setResource({ ...resource, url: value, type: 'EXTERNAL' })
          }
          placeholder="Type/paste link here..."
          helper="Enter your preferred resource link"
          disabled={!enableEdit}
          error={errors.url}
        />
      </Col>
      <Col w={[4, 12, 6]} mtT="4">
        <BasicInput
          label="Resource label"
          value={resource.label}
          handleChange={(value) =>
            setResource({ ...resource, label: value, type: 'EXTERNAL' })
          }
          placeholder="e.g. Our budgeting tool"
          helper="Enter your preferred button label here"
          disabled={!enableEdit}
          error={errors.label}
        />
      </Col>

      <TextWithIcon
        text="Remove resource"
        weight="medium"
        isButton
        mt="4"
        handleClick={removeResource}
        ml="5"
        ai="center"
        disabled={!enableEdit}
        iconProps={{
          icon: 'close',
          color: 'primaryMain',
          pointer: true,
        }}
      />
    </Row>
  );
};

export default ResourcesSection;
