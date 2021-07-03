import React, { useEffect } from 'react';
import "./chat.css";
import UserList from '../../components/UserList/UserList';
import ChatBody from '../../components/ChatBody/ChatBody';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import { MessageProvider } from '../../utils/messagecontext';
import { useSubscription } from '@apollo/client';
import { useAuthState } from '../../utils/auth';
import { useMessageDispatch } from '../../utils/messagecontext';
import { NEW_MESSAGE, NEW_REACTION } from '../../utils/subscriptions'
// import Message from "../../components/Message/Message";
// import Online from "../../components/Online/Online";
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//         width: '100vw',
//         height: '80vh',
//         padding: theme.spacing(2),
//         marginTop: theme.spacing(2),
//         background: "whitesmoke",
//         boxShadow: "none",
//     },
// }));

const Chat = () => {




    // const classes = useStyles();

    //     return (
    //         <MessageProvider>
    //             <Paper className={classes.root}>
    //                 <Grid container spacing={2}>
    //                     <Grid item>
    //                         <UserList />
    //                     </Grid>
    //                     <Grid item>
    //                         <ChatBody />
    //                     </Grid>
    //                 </Grid>
    //             </Paper>
    //         </MessageProvider>
    //     )
    // }

    return (
        // <MessageProvider>
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                    <TextField
                          className="chatMenuInput" variant="outlined"
                  
                           label="Find Friends"
                           type="text"
                           placeholder="Who do you want to reconnect with?"
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                   <SearchIcon />
                                   </InputAdornment>
                                  
                                   ),
                               }}
                           />
                       <UserList />
                   </div>
         
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="messagesHere">
                          
                            <ChatBody />
                        </div>
                        {/* <div className="chatBoxBottom">
                            <textarea className="messageInput" placeholder="Write Your Message"></textarea>
                            <button className="submit">Send</button>
                        </div> */}
                    </div>
                </div>
                {/* <div className="chatOnline">
                    <div className="chatOnline">
                        <Online />
                    </div>
                </div> */}
            </div>
        // </MessageProvider>
    )
}

export default Chat
