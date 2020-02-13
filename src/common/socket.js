import socketIOClient from 'socket.io-client';
import CONSTANTS from '../constants/constants'
export default socketIOClient(CONSTANTS.SERVER.HOSTNAME);
