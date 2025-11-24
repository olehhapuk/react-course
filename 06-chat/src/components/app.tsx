// import { faker } from '@faker-js/faker';
import type { Message } from '@/types/message';
import Header from './header';
import MessageEditor from './message-editor';
import MessagesList from './messages-list';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const user = {
  avatarUrl: 'https://avatars.githubusercontent.com/u/124599?v=4',
  username: 'john_doe',
  displayName: 'John Doe',
  isOnline: false,
};

// const messages: Message[] = Array.from({ length: 100 }).map((_, i) => ({
//   id: `id-${i}`,
//   author: {
//     displayName: faker.person.fullName(),
//   },
//   createdAt: faker.date.past().toISOString(),
//   text: faker.lorem.words(),
//   isMine: faker.datatype.boolean(),
// }));

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  function createMessage(text: string) {
    const newMessage: Message = {
      text,
      id: nanoid(),
      author: {
        displayName: 'John Doe',
      },
      createdAt: new Date().toISOString(),
      isMine: true,
    };

    setMessages([newMessage, ...messages]);
  }

  function deleteMessage(id: string) {
    const filteredMessages = messages.filter((message) => {
      if (message.id === id) {
        return false;
      } else {
        return true;
      }
    });

    setMessages(filteredMessages);

    // setMessages(messages.filter((message) => message.id !== id));
  }

  return (
    <div className="max-w-3xl mx-auto border-x h-dvh flex flex-col">
      <div className="px-4 border-b bg-muted">
        <Header user={user} />
      </div>
      <MessagesList
        className="grow px-2 py-2 overflow-auto"
        messages={messages}
        onDelete={deleteMessage}
      />
      <MessageEditor className="border-t px-2" onCreate={createMessage} />
    </div>
  );
}
