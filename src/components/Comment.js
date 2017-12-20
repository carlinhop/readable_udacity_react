import React from "react";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

let Comment = ()=>{

  return(
    <div>

    <Card>
        <CardHeader
          title="Author: John Juan"
          subtitle="Time since: 2 hours ago"
        />
        <CardActions>
          <CardText>
          This is an excellent comment
    	  </CardText>
          
        </CardActions>
      </Card>
    </div>
    
  ) 
}

export default Comment