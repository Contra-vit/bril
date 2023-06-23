import { io } from 'socket.io-client';

const URL = 'http://localhost:4300';
export const socket = io(URL);
