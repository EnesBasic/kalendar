// src/api/websocket.ts
import { ScheduleEntry } from '../types/scheduleTypes';

class WebSocketService {
  private socket: WebSocket | null = null;
  private listeners: ((data: ScheduleEntry[]) => void)[] = [];

  connect() {
    this.socket = new WebSocket(process.env.REACT_APP_WS_URL || 'wss://your-api/ws');

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.listeners.forEach(listener => listener(data));
    };

    this.socket.onclose = () => {
      setTimeout(() => this.connect(), 5000);
    };
  }

  subscribe(listener: (data: ScheduleEntry[]) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }
}

export const webSocketService = new WebSocketService();

// Initialize in app.tsx
webSocketService.connect();

// Enhanced useScheduleData hook with WebSocket
export const useScheduleData = () => {
  const [data, setData] = useState<ScheduleEntry[]>([]);
  
  useEffect(() => {
    const unsubscribe = webSocketService.subscribe((newData) => {
      setData(newData);
    });
    return unsubscribe;
  }, []);

  return { data };
};