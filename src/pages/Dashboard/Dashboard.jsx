import React, {useContext} from 'react';
import { Typography } from '@mui/material';
import Example from '../../components/Example';
import {SocketContext} from "../../api/sockets/Sockets";

function Dashboard() {
  const socketHandler = useContext(SocketContext);

  console.log(socketHandler);

  return (
    <>
      <Typography>Welcome to the Dashboard</Typography>
      <Example />
      <Example />
    </>
  );
}

export default Dashboard;
