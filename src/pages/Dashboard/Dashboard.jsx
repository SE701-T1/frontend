import React from 'react';
import ChatInput from "../../components/ChatInput/ChatInput";

function Dashboard() {
  return (
      <div style={{marginTop:"400px"}}><ChatInput onSend={() => console.log("test")}/></div>
  );
}

export default Dashboard;
