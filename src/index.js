import { renderResume } from './components/pages/resume';
import { renderMap } from './components/pages/map';
import { renderTime } from './components/pages/time';
import { mount } from './core/mount';
import { unmount } from './core/unmount';
import { reactive, watchEffect } from './core/reactive';
import { renderActivity } from './components/pages/activity';

let currentNode = renderResume();

mount(currentNode, document.getElementById('app'));

const state = reactive({
  time: '0 : 0'
});

function getTime() {
  const minutes = Math.floor(
    (new Date() - new Date(sessionStorage.getItem('startTime'))) / 1000 / 60
  );
  const seconds = Math.floor(
    ((new Date() - new Date(sessionStorage.getItem('startTime'))) / 1000) % 60
  );

  state.time = `${minutes < 10 ? '0' : ''}${minutes} : ${
    seconds < 10 ? '0' : ''
  }${seconds}`;
}

if (sessionStorage.getItem('startTime')) {
  getTime();
} else {
  const startTime = new Date();
  sessionStorage.setItem('startTime', startTime);
}

function setTimer() {
  return setInterval(function () {
    getTime();
  }, 1000);
}

const timerId = setTimer();

watchEffect(() => {
  const idPage = window.location.hash.replace('#', '');
  if (idPage === 'time') {
    unmount(currentNode);
    currentNode = renderTime(state.time);
    mount(currentNode, document.getElementById('app'));
  }
});

window.addEventListener('beforeunload ', function () {
  sessionStorage.removeItem('startTime');
  clearInterval(timerId);
});

const render = (render) => {
  const newNode = render();
  mount(newNode, document.getElementById('app'));
  currentNode = newNode;
};

const hashChange = (e) => {
  const idPage = window.location.hash.replace('#', '');
  if (currentNode) {
    unmount(currentNode);

    if (idPage === 'resume') {
      render(renderResume);
    } else if (idPage === 'map') {
      render(renderMap);
    } else if (idPage === 'time') {
      render(() => renderTime(state.time));
    } else if (idPage === 'activity') {
      render(() => renderActivity(state.time));
    }
  }
};

window.addEventListener('hashchange', hashChange);
