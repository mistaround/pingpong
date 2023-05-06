import { Button, Checkbox, Grid, TextField, Typography } from "@mui/material";
// import { createMatch } from "../api";
import React from "react";
import { useNavigate } from "react-router-dom";

const Start = () => { 
    const [player1checked, setPlayer1Checked] = React.useState(false);
    const [player2checked, setPlayer2Checked] = React.useState(false);
    const navigate = useNavigate();

    const handleStart = async () => {
        if (!player1checked && !player2checked) {
            alert("Please check who will be the one to serve first");
            return;
        }
        const player1 = document.getElementById("player1-name") as HTMLInputElement;
        const player2 = document.getElementById("player2-name") as HTMLInputElement;
        if (player1.value === "" || player2.value === "") {
            alert("Please input both players' names");
            return;
        }
        // const match = await createMatch(player1.value, player2.value, player1checked? '0': '1');
        // console.log(match);
        navigate(`/match?player1=${player1.value}&player2=${player2.value}&serve=${player1checked? player1.value: player2.value}`);
    }
    
    return (
        <Grid spacing={2} container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Grid item xs={12} sx={{marginTop: '100px'}}/>
            <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Typography variant="h6">Input Your and your opponent's names and check who will be the one to serve first</Typography>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <TextField id="player1-name" label="Player1"/>
            <Checkbox disabled={player2checked} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPlayer1Checked(event.target.checked)}/>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <TextField id="player2-name" label="Player2"/>
            <Checkbox disabled={player1checked} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPlayer2Checked(event.target.checked)}/>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button variant="contained" onClick={handleStart}>Start Game</Button>
            </Grid>
        </Grid>
    );
}

export default Start;