import { renderResume } from './components/pages/resume';
import { renderMap } from './components/pages/map';
import { renderTime } from './components/pages/time';
import { mount } from './core/mount';
import { unmount } from './core/unmount';
import { reactive, watchEffect } from './core/reactive';
import { renderActivity } from './components/pages/activity';
import { renderHeader } from './components/elements/header';

let currentNode = renderMap();

const header = renderHeader();
mount(header, document.getElementById('header'));

mount(currentNode, document.getElementById('main'));

const state = reactive({
  time: '0 : 0',
  map: null
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
    mount(currentNode, document.getElementById('main'));
  }
});

watchEffect(() => {
  unmount(currentNode);
  currentNode = renderMap(state.map);
  console.log(currentNode);
  mount(currentNode, document.getElementById('main'));
});

window.addEventListener('beforeunload ', function () {
  sessionStorage.removeItem('startTime');
  clearInterval(timerId);
});

const render = (render) => {
  const newNode = render();
  mount(newNode, document.getElementById('main'));
  currentNode = newNode;
};

const hashChange = (e) => {
  const idPage = window.location.hash.replace('#', '');
  if (currentNode) {
    unmount(currentNode);

    if (idPage === 'resume') {
      render(renderResume);
    } else if (idPage === 'map') {
      render(() => renderMap(state.map));
    } else if (idPage === 'time') {
      render(() => renderTime(state.time));
    } else if (idPage === 'activity') {
      render(() => renderActivity(state.time));
    }
  }
};

window.addEventListener('hashchange', hashChange);
