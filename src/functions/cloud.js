function rn(from, to) {
  return ~~(Math.random() * (to - from + 1)) + from;
}

function rs() {
  return arguments[rn(1, arguments.length) - 1];
}

export function cloud(max, vw = 5, vh = 5, vmin = 2) {
  let ret = [];
  for (let i = 0; i < max; ++i) {
    ret.push(
      `${rs("#d8e1da", "#f0fff3", "#eafffa")} ${rn(1, vw)}vw ${rn(
        1,
        vh
      )}vh ${rn(20, 20)}vmax ${rn(vmin, vmin)}vmax`
    );
  }
  return ret.join(", ");
}
