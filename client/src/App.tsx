import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from './page/Start';
import Match from './page/Match';
import Leaderboard from './page/Leaderboard';
import { Typography, Link, Paper} from '@mui/material';

function App() {
  return (
    <Router>
        <div>
          <Paper sx={{height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
            <Link href='/'>
              <Typography variant="h6">Start Game</Typography>
            </Link>
            <Typography variant="h5">Ping Pong</Typography>
            <Link href='/leaderboard'>
              <Typography variant="h6">Leader Board</Typography>
            </Link>
          </Paper>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/match" element={<Match />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
