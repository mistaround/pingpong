import React, { useEffect } from "react";
import { getHistory } from "../api";
import { Paper } from "@mui/material";


interface IHistory {
    name: string;
    wins: number;
    points: number;
}

const Leaderboard = () => { 
    const [history, setHistory] = React.useState<IHistory[]>([]);
    
    useEffect(() => {
        getHistory().then((history) => {
            setHistory(history.data.history);
        });
    }, []);

    return (
        <Paper>
            <h1>Leaderboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Wins</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((row) => (
                        <tr key={row.name}>
                            <td>{row.name}</td>
                            <td>{row.wins}</td>
                            <td>{row.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Paper>
    );
}

export default Leaderboard;