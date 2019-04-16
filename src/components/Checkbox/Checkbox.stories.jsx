/* eslint-disable react/no-multi-comp */
import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Checkbox from './Checkbox';
import LabeledCheckbox from './LabeledCheckbox';

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
class Stateful extends React.Component {
  state = { test: false, test2: true };

  onChange = (evt) => {
    this.setState({
      [evt.target.id]: evt.target.checked,
    });
  }

  render() {
    const { test, test2 } = this.state;
    return (
      <Column>
        <Checkbox id="test" onChange={this.onChange} checked={test} />
        <Checkbox id="test2" onChange={this.onChange} checked={test2} />
      </Column>
    );
  }
}

class StatefulLabeled extends React.Component {
  state = { test: false, test2: true };

  onChange = (evt) => {
    this.setState({
      [evt.target.id]: evt.target.checked,
    });
  }

  render() {
    const { test, test2 } = this.state;
    return (
      <Column>
        <LabeledCheckbox id="test" onChange={this.onChange} checked={test}>This is a label</LabeledCheckbox>
        <LabeledCheckbox id="test2" onChange={this.onChange} checked={test2}>Second label</LabeledCheckbox>
      </Column>
    );
  }
}
storiesOf('Checkbox', module)
  .add('Base Case', () => (
    <Stateful />
  ), {
    info: {
      propTables: [Checkbox],
      propTablesExclude: [Stateful],
    },
  })
  .add('Labeled checkbox', () => (
    <StatefulLabeled />
  ), {
    info: {
      propTables: [Checkbox],
      propTablesExclude: [StatefulLabeled],
    },
  });
