import React, { Fragment } from 'react'
import Select from 'react-select';
import { Card, Input, Button } from "semantic-ui-react";
import { compose, withState, withHandlers } from 'recompose'
import { withEither, withMaybe } from "../../../app/helpers/renderingHandler";
import { IsLoading } from "../../../components/isLoading";
import { getLabel } from "../../../app/helpers/app";

const enhance = compose(
  withEither(({ getExchange }) => getExchange.isLoading, IsLoading),
  withMaybe(({ getExchange }) => getExchange.data !== null),
  withState('edit', 'setEdit', false),
  withState('base', 'setBase', ({ exchange }) => {
    return {
      value: exchange.init.base,
      label: exchange.init.base
    }
  }),
  withState('value', 'setValue', ({ exchange }) => exchange.init.value),
  withHandlers({
    updateExchange: ({ setEdit, value, base, getExchangeRequest, updateExchange }) => () => {
      if (value === '') {
        alert('Please insert field.')
      } else {
        setEdit(false);
        updateExchange({ base: base.value, value });
        getExchangeRequest(base.value)
      }
    }
  })
);

const Edit = (props) => {
  const list = Object.keys(props.getExchange.data.rates);

  let options = list.map(x => {
    return {
      value: x,
      label: x
    }
  });

  return (
    <Fragment>

      <div className="d-flex justify-content-between" style={{ height: 30 }}>
        <h4>{props.base.label} - {getLabel(props.base.label)}</h4>
        <Button onClick={props.updateExchange} size='mini' className="btn-add">Save</Button>
      </div>

      <div className="d-flex justify-content-between mt-3">
        <Card.Meta>
          <div style={{ width: 150 }}>
            <Select options={options} value={props.base} onChange={(value) => props.setBase(value)}/>
          </div>
        </Card.Meta>
        <Card.Meta>
          <Input placeholder='Base Currency' type={'number'} value={props.value}
                 onChange={({ target }) => props.setValue(target.value)}/>
        </Card.Meta>
      </div>

    </Fragment>
  )
};

const Content = (props) => {
  return (
    <Fragment>
      <div className="d-flex justify-content-between" style={{ height: 30 }}>
        <h4>{props.base.label} - {getLabel(props.base.label)}</h4>
        <Button onClick={() => props.setEdit(true)} size='mini' className="btn-add">Edit</Button>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <Card.Meta>
          <h2 className="c-tosca">{props.getExchange.data.base}</h2>
        </Card.Meta>
        <Card.Meta>
          <h2>{props.value}</h2>
        </Card.Meta>
      </div>
    </Fragment>
  )
};

export const BaseCurrency = enhance((props) => {
  return (
    <Card.Content>
      {
        !props.edit ? <Content {...props}/> : <Edit {...props}/>
      }
    </Card.Content>
  )
});
