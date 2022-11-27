import React from 'react';

import { ChatEngine } from 'react-chat-engine'; 
// new webpack.EnvironmentPlugin(['NODE_ENV', 'DEBUG']);

const SupportAdmin = () => {
  return (
    <ChatEngine
      projectID='a3d5970b-2622-4d29-84d3-61f4d007df80'
      userName='Vasilis Admin'
      userSecret='vasilisomagkas99'
      height='calc(100vh - 20px)'
    />
  );
}

export default SupportAdmin;
