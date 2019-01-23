import React from 'react';
import Select from 'react-select';
import { Button, Card } from "semantic-ui-react";
import { compose, withState, withHandlers } from 'recompose'
import { withEither, withMaybe } from "../../../app/helpers/renderingHandler";
import { IsLoading } from "../../../components/isLoading";


const renderSelect = compose(
  withEither(({ getExchange }) => getExchange.isLoading, IsLoading),
  withMaybe(({ getExchange }) => getExchange.data !== null)
)(props => {

  const list = Object.keys(props.getExchange.data.rates);
  let options = list.map(x => {
    return {
      value: x,
      label: x
    }
  });

  return (
    <div className="d-flex">
      <div style={{ width: 200, marginRight: 20 }}>
        <Select options={options} onChange={({ value }) => props.setValue(value)}/>
      </div>
      <Button onClick={(props.saveClick)} className="btn-add">Save</Button>
    </div>
  )
});

const enhance = compose(
  withState('add', 'setAdd', false),
  withState('value', 'setValue', null),
  withHandlers({
    addClick: ({ setAdd }) => () => setAdd(true),
    saveClick: ({ setAdd, setExchange, exchange, value }) => () => {
      if (exchange.data.includes(value)) {
        alert('Data has been added')
      } else {
        setAdd(false);
        setExchange(value)
      }

    }
  })
);

export const AddCurrency = enhance((props) => {
  return (
    <Card.Content className="d-flex justify-content-center">
      {
        props.add ?
          renderSelect(props)
          :
          <Button className="btn-add" onClick={props.addClick}>
            (+) Add More Currencies
          </Button>
      }
    </Card.Content>
  )
});
