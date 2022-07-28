import React from 'react';

import styled from 'styled-components';

const SchedulePage = () => {
  return (
    <section>
      <Header>
        <h1>Class schedule</h1>
        <button>Add Class Schedule</button>
      </Header>
      <article></article>
    </section>
  );
};

export default SchedulePage;

const Header = styled.header`
  ${({ theme }) => theme.mixins.flexBox('center', 'space-between')}
`;
