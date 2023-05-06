import { Button, Grid, List, ListItem, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { updateHistory } from "../api";

interface Round {
    player1: string;
    player2: string;
    score1: number;
    score2: number;
    round: number;
    serve: string;
}

const Match = () => {
    const [player1, setPlayer1] = React.useState<string>('Player1');
    const [player2, setPlayer2] = React.useState<string>('Player2');
    const [serve, setServe] = React.useState<string>('0');
    const [player1score, setPlayer1Score] = React.useState<number>(0);
    const [player2score, setPlayer2Score] = React.useState<number>(0);
    const [round, setRound] = React.useState<number>(0);
    const [rounds, setRounds] = React.useState<Round[]>([]);
    const [winner, setWinner] = React.useState<string | null>(null);

    // useEffect(() => {
    //     if (id) {
    //         getMatch(id).then((match) => {
    //             setPlayer1(match.data.newMatch.player1);
    //             setPlayer2(match.data.newMatch.player2);
    //             setServe(match.data.newMatch.serve);
    //         });
    //     }
    // }, [id]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setPlayer1(params.get('player1') as string);
        setPlayer2(params.get('player2') as string);
        setServe(params.get('serve') as string);
    }, []);

    useEffect(() => {
        // decide who is the winner
        // The ping pong game will follow the 10 point system, where a player wins when he exceeds 10 points. 
        // If both players reach 10 points, the players need to win by 2 points to win.
        if (player1score > 10 && player2score < 10) {
            alert(`${player1} wins!`);
            setWinner(player1);
        } else if (player2score > 10 && player1score < 10) {
            alert(`${player2} wins!`);
            setWinner(player2);
        } else if (player1score >= 10 && player2score >= 10) {
            if (player1score - player2score >= 2) {
                alert(`${player1} wins!`);
                setWinner(player1);
            } else if (player2score - player1score >= 2) {
                alert(`${player2} wins!`);
                setWinner(player2);
            }
        }
    }, [player1score, player2score]);

    useEffect(() => {
        if (winner) {
            updateHistory(winner, winner === player1 ? player1score : player2score);
        }
    }, [winner]);

    return (
        <Grid container sx={{display: 'flex', alignItems: 'center'}}>
            <Grid container xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Grid item xs={6} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography variant="h6">{player1}</Typography>
                    <Typography variant="h1">{player1score}</Typography>
                    <Button variant="contained" disabled={winner !== null}
                    onClick={() => {
                        setRounds([...rounds, {
                            player1: player1 as string,
                            player2: player2 as string,
                            score1: player1score + 1,
                            score2: player2score,
                            round: round + 1,
                            serve: (round % 2 === 0) ? serve as string : (serve === player1 ? player2 as string : player1 as string)
                        }]);
                        setPlayer1Score(player1score + 1); 
                        setRound(round + 1);
                    }}>
                        +
                    </Button>
                </Grid>
                <Grid item xs={6} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography variant="h6">{player2}</Typography>
                    <Typography variant="h1">{player2score}</Typography>
                    <Button variant="contained" disabled={winner !== null}
                    onClick={() => {
                        setRounds([...rounds, {
                            player1: player1 as string,
                            player2: player2 as string,
                            score1: player1score,
                            score2: player2score + 1,
                            round: round + 1,
                            serve: (round % 2 === 0) ? serve as string : (serve === player1 ? player2 as string : player1 as string)
                        }]);
                        setPlayer2Score(player2score + 1); 
                        setRound(round + 1);
                    }}>
                        +
                    </Button>
                </Grid>
                <Grid item xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Button variant="contained" href="/">Quit Game</Button>
                </Grid>
                <Grid item xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '600px'}}>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {rounds.map((round) => {
                            return (
                                <ListItem key={round.round}>
                                    <Typography variant="body1"> round: {round.round} serve: {round.serve} {round.player1} {round.score1} - {round.score2} {round.player2} </Typography>
                                </ListItem>
                            ); 
                        })}
                    </List>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Match;