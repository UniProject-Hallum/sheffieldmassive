import React from 'react'
import { Header, Button, Popup, Grid } from 'react'
import bathroom from '../../assets/bathroom.png'

const PopupFlowing = () => (
  <Popup trigger={<Button>Add / Remove</Button>} flowing hoverable>
    <Grid centered divided columns={3}>
      <Grid.Column textAlign='center'>
        <Header as='h4'>Bathroomn</Header>
        <div>
          
        </div>
        <Button>Choose</Button>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Header as='h4'>Electric</Header>
        <p>
        <img className='w-1/12' src={bathroom} alt="bathroom" />
        </p>
        <Button>Choose</Button>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Header as='h4'>General</Header>
        <p>
         
        </p>
        <Button>Choose</Button>
      </Grid.Column>
    </Grid>
  </Popup>
)

export default PopupFlowing