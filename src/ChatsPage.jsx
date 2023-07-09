import {MultiChatSocket,useMultiChatLogic,MultiChatWindow} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('0e2c11dd-b022-4dd9-8483-dd0e03ed7336',props.user.username,props.user.secret)
    return ( 
        <div style={{height:'100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
        </div>
     );
}
 
export default ChatsPage;