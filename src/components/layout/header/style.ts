import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 30px;
  background-color: blanchedalmond;

  .left {
    display: flex;
    h2 {
      margin-right: 20px;
    }
    ul {
      display: flex;
      gap: 20px;
    }
  }
`;
