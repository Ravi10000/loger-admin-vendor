import './chat-box.css';
import { Empty } from 'antd';
import { PiDotsThreeBold } from 'react-icons/pi';
import { useEffect, useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import Spinner from '../spinner';
import { db } from 'src/firebase/firebase.config';
import {
  ref,
  onValue,
  set,
  push,
  query,
  orderByChild
} from 'firebase/database';
import { useQuery } from '@tanstack/react-query';
import d from 'dayjs';
import api from 'src/api';
function ChatBox({ title, user, booking }) {
  const [text, setText] = useState('');
  const chatBoxRef = useRef(null);
  const inputRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const {
    data,
    error: userError,
    isLoading: isUserLoading
  } = useQuery({
    queryKey: ['user-details', booking?.userId],
    enabled: !!booking?.userId && !user,
    queryFn: async () => {
      const { data: { user = {} } = {} } = await api.get(
        `/user/basic-details/${booking?.userId}`
      );
      console.log({ user });
      user._id = booking?.userId;
      return user;
    }
  });
  user = user || data;
  console.log({ user });

  useEffect(() => {
    try {
      if (booking?._id) {
        const chatsRef = ref(db, `messages/${booking?._id}`);

        const queryRef = query(chatsRef, orderByChild('timestamp'));
        onValue(queryRef, snapshot => {
          const chatsData = snapshot.val();
          console.log({ chatsData });
          if (chatsData) setMessages(chatsData);
          else setMessages([]);
        });
      }
    } catch (err) {
      console.log({ err });
    }
  }, [booking?._id]);

  const { mutate: addMessage, isPending } = useMutation({
    mutationFn: async e => {
      e.preventDefault();
      if (!text) return;
      const newMessage = {
        text,
        from: booking?.propertyId,
        timestamp: Date.now()
      };
      const chatsRef = ref(db, `messages/${booking?._id}`);
      const newMessageRef = push(chatsRef);
      set(newMessageRef, newMessage);
      setText('');
    },
    onError: firebaseError => {
      console.log({ firebaseError });
    },
    onSuccess: () => {
      inputRef.current.focus();
      console.log('Message added successfully');
    }
  });

  useEffect(() => {
    chatBoxRef.current?.scrollTo(0, chatBoxRef.current.scrollHeight);
  }, [messages]);
  const messagesKeys = messages ? Object.keys(messages) : [];

  return (
    <div style={{ maxWidth: '800px' }}>
      {title && <h1>{title}</h1>}
      <div className="cb">
        <div className="cb-messages-container" ref={chatBoxRef}>
          {!messagesKeys?.length ? (
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
            messagesKeys?.map(id => {
              const message = messages?.[id];
              return (
                <Message
                  {...{
                    user,
                    key: id,
                    message,
                    date: new Date(message?.timestamp)
                  }}
                />
              );
            })
          )}
        </div>
        <form className="cb-footer" onSubmit={addMessage}>
          <img src="/add-md.png" alt="" className="cb-icon" />
          <input
            ref={inputRef}
            disabled={isPending}
            value={text}
            onChange={e => setText(e.target.value)}
            type="text"
            placeholder="Type a message here"
            className="cb-text-box"
          />
          <img src="/link.png" alt="" className="cb-icon" />
          {isPending ? (
            <Spinner />
          ) : (
            <button className="cb-submit-button" disabled={isPending}>
              <img
                style={{
                  opacity: text?.length > 0 ? 1 : 0.5,
                  cursor: 'pointer'
                }}
                src="/send.png"
                alt=""
                className="cb-icon"
              />
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

const Message = ({ message, user, date }) => {
  const { text } = message;
  const isReceived = message?.from !== user?._id;

  const profilePicStyles = {};
  if (!isReceived && user?.profilePic) {
    profilePicStyles.backgroundImage = `url("${process.env.REACT_APP_SERVER_URL}/images/${user?.profilePic}")`;
    profilePicStyles.backgroundSize = 'cover';
    profilePicStyles.backgroundPosition = 'center';
  }
  return (
    <div
      className="cb-message"
      style={{
        maxWidth: '60%',
        ...(isReceived ? { marginLeft: 'auto' } : { marginRight: 'auto' })
      }}
    >
      {!isReceived ? (
        <div className="cb-sender-pic" style={profilePicStyles}>
          {!user?.profilePic && user?.initials}
        </div>
      ) : (
        <PiDotsThreeBold className="cb-dots" />
      )}
      <div className="cb-msg-text">
        <p className={`cb-message-text ${isReceived ? 'sent' : 'received'}`}>
          {text}
        </p>
        {date && (
          <p className="cb-msg-date">{d(date).format('DD, MMM, YYYY')}</p>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
