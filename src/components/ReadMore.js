import styled from 'styled-components';
import { Box } from 'rebass';
import { color } from '../styles/colors';

export const ReadMore = styled(Box)`
  border-bottom: 2px solid ${color.grey};
  display: inline-block;
  color: ${color.grey};
  text-decoration: none;

  &:hover {
    color: ${color.pink};
    border-color: ${color.pink};
  }
`;

ReadMore.defaultProps = {
  as: 'a',
  my: [2, 3],
  py: 1,
  fontSize: [2, 3],
};
