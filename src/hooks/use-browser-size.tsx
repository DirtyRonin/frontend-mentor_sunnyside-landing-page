import React from 'react';

export function UseBrowserSize() {
  const [size, setSize] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    function addResizeEvent() {
      const { innerWidth, innerHeight } = window;
      setSize({ width: innerWidth, height: innerHeight });
    }

    window.addEventListener('resize', addResizeEvent);

    return () => {
      window.removeEventListener('resize', addResizeEvent);
    };
  }, []);

  return size;
}
