export function getKeyframeFormat(name: string, from: string, to: string) {
  return `@keyframes ${name} {
    from {
     ${from}
    }
    to {
      ${to}
    }
  }`;
}

export function setKeyframeInStyle(keyframe: string) {
  const styleElement = document.createElement('style');
  document.head.appendChild(styleElement);
  const styleSheet = styleElement.sheet as CSSStyleSheet;
  styleSheet.insertRule(keyframe, 0);
}
