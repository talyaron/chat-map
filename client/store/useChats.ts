import { create } from 'zustand';
import { latestChats } from '@/MockupDatabase/chats/groupChat';

interface ChatType {
    title: string;
    createdAt: Date;
    conversation: {
        text: string;
        user: string;
    }[];
    id: string;
}

interface ChatStoreType {
    chats: ChatType[];
    setChatStore: (chats: ChatType[]) => void;
}

const useChats = create<ChatStoreType>((set) => ({
    chats: latestChats,
    setChatStore: (chats: ChatType[]) => set({ chats }),
}));

export default useChats;
