import React from 'react';
import { Loader } from "semantic-ui-react";

export const IsLoading = () => {
  return (
    <div className="h-100 p-5">
      <Loader active inline='centered'/>
    </div>
  )
};
