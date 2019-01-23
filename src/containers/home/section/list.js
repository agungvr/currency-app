import React from 'react'
import { compose, withHandlers } from 'recompose'
import { withEither } from "../../../app/helpers/renderingHandler";
import { IsEmpty } from "../../../components/isEmpty";
import { Button, Card, List } from "semantic-ui-react";
import { calculate, getLabel } from "../../../app/helpers/app";

const withRenderValidate = compose(
  withEither(props => !props.exchange.data.length, IsEmpty),
  withHandlers({
    deleteClick: props => (value) => () => props.removeExchange(value)
  })
);

export const ListItem = withRenderValidate(props => {
  const { data, init } = props.exchange;
  const { base, rates } = props.getExchange.data;
  return (
    <Card.Content className="content-list">
      <List divided verticalAlign='middle'>
        {
          data.map((item, index) =>
            <List.Item className='d-flex justify-between align-items-center' key={`${item}-${index}`}>
              <div className="flex-1 mr-3 my-3 separator-right">
                <div className="d-flex justify-content-between mb-2">
                  <span>{item}</span>
                  <span className="text-b">{calculate(init.value, rates[item])}</span>
                </div>
                <div className="mb-1">
                  <span className="text-i-b">{item} - {getLabel(item)}</span>
                </div>
                <div className="mb-1">
                  <span className="f-10 text-i-b">1 {base} = {item} {rates[item]}</span>
                </div>
              </div>

              <Button onClick={props.deleteClick(item)} size={'mini'} className={'btn-delete'}>
                Delete
              </Button>

            </List.Item>
          )
        }
      </List>
    </Card.Content>
  )
});
