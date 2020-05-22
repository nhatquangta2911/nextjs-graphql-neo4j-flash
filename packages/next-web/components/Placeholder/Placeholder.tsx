import React from 'react';
import { Placeholder } from 'semantic-ui-react';

type PlaceholderProps = {
  type: string;
  small?: boolean;
};

const PlaceHolder: React.FC<PlaceholderProps> = ({ type, small }) => {
  switch (type) {
    case 'image':
      return (
        <Placeholder
          style={{
            height: small ? '150px' : '220px',
            width: small ? '100px' : '150px',
          }}
        >
          <Placeholder.Image />
        </Placeholder>
      );
    case 'text':
      if (!small) {
        return (
          <Placeholder style={{ width: '200px', height: '100px' }}>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        );
      } else {
        return (
          <Placeholder style={{ width: '150px', height: '50px' }}>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        );
      }
  }
};

export default PlaceHolder;
