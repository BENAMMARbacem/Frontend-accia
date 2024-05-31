import React from 'react';

function ContainerLayout({ children }) {
  return (
    <div className=' flex flex-col items-center justify-start mx-auto  w-full'>
      {children}
    </div>
  );
}

export default ContainerLayout;
