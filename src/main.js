import './style.css';
import './display.css';
import './control.css';
import './websocket.js';

// Load appropriate module based on URL
if (window.location.pathname === '/control') {
  import('./control.js');
  import('./control.css');
} else if (window.location.pathname === '/display') {
  import('./display.js');
  import('./display.css');
}
