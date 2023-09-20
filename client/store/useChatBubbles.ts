import { create } from 'zustand'
import { chatBubblesMC } from '../MockupDatabase/chatBubbles';

export interface markerLocation {
  latitude: number,
  longitude: number,
}

export interface chatBubble {
  id: string,
  chatName: string,
  chatDesciption: string,
  chatMembers: number,
  chatLocation: markerLocation
}

export interface chatBubbles {
  chatBubbles: chatBubble[],
  addChatBubble: (newChatBubble:chatBubble[]) => void,
}

const useChatBubbles = create<chatBubbles>((set) => ({
  chatBubbles: chatBubblesMC,
  addChatBubble: (newChatBubble:chatBubble[]) => set(({ chatBubbles: newChatBubble })),
}))

export default useChatBubbles