import './chat-box.css';
import { Empty } from 'antd';
import { PiDotsThreeBold } from 'react-icons/pi';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
// const messages = [
//   {
//     text: 'Lorem ipsum dolor sit amet consectetur',
//     type: 'received',
//     date: '1 days ago '
//   },
//   {
//     text: 'LLorem ipsum dolor sit amet consectetur Facilisis eget amet eleifend hendrerit Lectus tellus aliquet id pharetra at velUt ',
//     type: 'received'
//   },
//   {
//     text: 'LLorem ipsum dolor sit amet consectetur Facilisis eget amet eleifend hendrerit Lectus tellus aliquet id pharetra at velUt ',
//     type: 'sent'
//   },
//   {
//     text: 'LLorem ipsum dolor sit amet consectetur Facilisis eget amet eleifend hendrerit Lectus tellus aliquet id pharetra at velUt ',
//     type: 'received'
//   },
//   {
//     text: 'Lorem ipsum dolor sit amet consectetur',
//     type: 'received',
//     date: '2 days ago '
//   },
//   {
//     text: 'Lorem ipsum dolor sit amet consectetur',
//     type: 'received',
//     date: '1 days ago '
//   },
//   {
//     text: 'LLorem ipsum dolor sit amet consectetur Facilisis eget amet eleifend hendrerit Lectus tellus aliquet id pharetra at velUt ',
//     type: 'received'
//   },
//   {
//     text: 'LLorem ipsum dolor sit amet consectetur Facilisis eget amet eleifend hendrerit Lectus tellus aliquet id pharetra at velUt ',
//     type: 'sent'
//   },
//   {
//     text: 'LLorem ipsum dolor sit amet consectetur Facilisis eget amet eleifend hendrerit Lectus tellus aliquet id pharetra at velUt ',
//     type: 'received'
//   },
//   {
//     text: 'Lorem ipsum dolor sit amet consectetur',
//     type: 'received',
//     date: '2 days ago '
//   }
// ];
import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'src/api';
import { useUserStore } from 'src/store/user';
import Spinner from '../spinner';
function ChatBox({ title, messages, user }) {
  const [text, setText] = useState('');
  const chatBoxRef = useRef(null);
  const { bookingId } = useParams();
  const queryClient = useQueryClient();
  const currentUser = useUserStore(state => state.user);

  const { mutate: addMessage, isFetching: isAdding } = useMutation({
    mutationFn: async () => {
      if (!text) {
        return;
      }
      const res = await api.post(`/messages`, { bookingId, text });
      console.log({ res });
      setText('');
      queryClient.invalidateQueries(['messages', bookingId]);
    }
  });

  useEffect(() => {
    chatBoxRef.current?.scrollTo(0, chatBoxRef.current.scrollHeight);
  }, [messages]);
  return (
    <div>
      <h1>{title}</h1>
      <div className="cb">
        <div className="cb-messages-container" ref={chatBoxRef}>
          {!messages?.length ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <Empty description="No requests from user" />
            </div>
          ) : (
            messages?.map((message, idx) => (
              <Message
                user={user}
                key={idx}
                message={{
                  ...message,
                  type:
                    currentUser?._id === message.senderId ? 'sent' : 'received'
                }}
              />
            ))
          )}
        </div>
        <div className="cb-footer">
          <img src="/add-md.png" alt="" className="cb-icon" />
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            type="text"
            placeholder="Type a message here"
            className="cb-text-box"
          />
          <img src="/link.png" alt="" className="cb-icon" />
          {isAdding ? (
            <Spinner />
          ) : (
            <img
              style={{ opacity: text?.length > 0 ? 1 : 0.5, cursor: 'pointer' }}
              src="/send.png"
              alt=""
              className="cb-icon"
              onClick={addMessage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

const Message = ({ message, user }) => {
  const profilePicStyles = {};
  if (message?.type === 'received' && user?.profilePic) {
    profilePicStyles.backgroundImage = `url("${process.env.REACT_APP_SERVER_URL}/images/${user?.profilePic}")`;
    profilePicStyles.backgroundSize = 'cover';
    profilePicStyles.backgroundPosition = 'center';
  }
  return (
    <div
      className="cb-message"
      style={{ justifyContent: message?.type === 'sent' && 'flex-end' }}
    >
      {message?.type === 'received' && (
        <div className="cb-sender-pic" style={profilePicStyles}>
          {!user?.profilePic && user?.initials}
        </div>
      )}
      {message?.type === 'sent' && <PiDotsThreeBold className="cb-dots" />}
      <div className="cb-msg-text">
        <p
          className={`cb-message-text ${
            message?.type === 'sent' ? 'sent' : 'received'
          }`}
        >
          {message?.text}
        </p>
        {message?.date && <p className="cb-msg-date">{message?.date}</p>}
      </div>
      {/* {message?.type === 'received' && (
          <PiDotsThreeBold className="cb-dots" />
        )} */}
    </div>
  );
};

export default ChatBox;
