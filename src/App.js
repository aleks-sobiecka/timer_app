import { useState } from 'react';
import { useEffect } from 'react';
import DisplayComponent from './Components/DisplayComponent/DisplayComponent';
import Button from './Components/Button/Button';
import './styles/global.scss';

const App = () => {

  const [time, setTime] = useState(0);
  const [interv, setInterv] = useState(null);

  const start = (e) => {
    e.preventDefault();
    if (!interv) 
      setInterv(setInterval(() => {
        setTime(time => time + 1);
      }, 1))
  };

  const stop = (e) => {
    e.preventDefault();
    clearInterval(interv);
    setInterv(null);
  };

  const reset = (e) => {
    e.preventDefault();
    clearInterval(interv);
    setInterv(null);
    setTime(0)
  };

  useEffect(() => {
    return () => {
      if (interv) clearInterval(interv);
    };
  }, []);

  return (
    <div>
      <DisplayComponent time={time} />
      <Button onClick={start}>Start</Button>
      <Button onClick={stop}>Stop</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
};

export default App;
