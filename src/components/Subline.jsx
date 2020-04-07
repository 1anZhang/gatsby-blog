import styled from 'styled-components';

const Subline = styled.div`
  font-size: 12px;
  color: #b3812b;
  ${props => props.sectionTitle && 'margin-top: -3rem'};
  ${props => props.sectionTitle && 'margin-bottom: 4rem'};
  ${props => props.sectionTitle && 'text-align: center'};
`;

export default Subline;
