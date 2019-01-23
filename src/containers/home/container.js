import React from 'react'
import { Card } from 'semantic-ui-react'
import { BaseCurrency } from "./section/base";
import { ListItem } from "./section/list";
import { AddCurrency } from "./section/add";

const Container = props => {
  return (
    <div className="container">
      <Card className="box-35">
        <BaseCurrency {...props}/>
        <ListItem {...props}/>
        <AddCurrency {...props}/>
      </Card>
    </div>
  )
};

export default Container;
