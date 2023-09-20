import { create } from 'zustand'
import { chatBubblesMC } from '../MockupDatabase/chatBubbles';

interface markerLocation {
    latitude: number,
    longitude: number,
}

interface locaation {
    markerLocation: markerLocation,
    setMarkerLocation: (markerLocation:markerLocation) => void,
}

const useLocation = create<locaation>((set) => ({
    markerLocation: {
    latitude: 0,
    longitude: 0,
  },
  setMarkerLocation: (markerLocation:markerLocation) => set(({ markerLocation: markerLocation })),
}))

export default useLocation