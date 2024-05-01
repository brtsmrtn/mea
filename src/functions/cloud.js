function rn(from, to) {
  return ~~(Math.random() * (to - from + 1)) + from;
}

function rs() {
  return arguments[rn(1, arguments.length) - 1];
}

export function cloud(max, vw = 5, vh = 5, vmin1 = 20, vmin2 = 2) {
  let ret = [];
  for (let i = 0; i < max; ++i) {
    ret.push(
      `${rs("#a5a9a6", "#c6f1e7", "#f0fff3", "#eafffa")} ${rn(1, vw)}vw ${rn(
        1,
        vh
      )}vh ${rn(vmin1, vmin1)}vmin ${rn(1, vmin2)}vmin`
    );
  }
  return ret.join(", ");
}
