const BASE = '가'.charCodeAt(0); // 한글 코드 시작: 44032

const INITIALS = 'ㄱ,ㄲ,ㄴ,ㄷ,ㄸ,ㄹ,ㅁ,ㅂ,ㅃ,ㅅ,ㅆ,ㅇ,ㅈ,ㅉ,ㅊ,ㅋ,ㅌ,ㅍ,ㅎ'.split(
  ',',
);

const MEDIALS = 'ㅏ,ㅐ,ㅑ,ㅒ,ㅓ,ㅔ,ㅕ,ㅖ,ㅗ,ㅘ,ㅙ,ㅚ,ㅛ,ㅜ,ㅝ,ㅞ,ㅟ,ㅠ,ㅡ,ㅢ,ㅣ'.split(
  ',',
);

const FINALES = ',ㄱ,ㄲ,ㄳ,ㄴ,ㄵ,ㄶ,ㄷ,ㄹ,ㄺ,ㄻ,ㄼ,ㄽ,ㄾ,ㄿ,ㅀ,ㅁ,ㅂ,ㅄ,ㅅ,ㅆ,ㅇ,ㅈ,ㅊ,ㅋ,ㅌ,ㅍ,ㅎ'.split(
  ',',
);

type KoreanSymbol = {
  initial: string;
  medial: string;
  finale: string;
  initialOffset: number;
  medialOffset: number;
  finaleOffset: number;
};

function getSymbol(char: string): KoreanSymbol {
  let initial = '';
  let medial = '';
  let finale = '';
  let initialOffset = -1;
  let medialOffset = -1;
  let finaleOffset = -1;

  //   return false;
  // }

  if (char.match(/[ㄱ-ㅎ]/)) {
    initial = char;
  } else if (char.match(/[ㄱ-ㅎ가-힣]/)) {
    const tmp = char.charCodeAt(0) - BASE;
    finaleOffset = tmp % FINALES.length;
    medialOffset = ((tmp - finaleOffset) / FINALES.length) % MEDIALS.length;
    initialOffset =
      ((tmp - finaleOffset) / FINALES.length - medialOffset) / MEDIALS.length;
    initial = INITIALS[initialOffset];
    medial = MEDIALS[medialOffset];
    finale = FINALES[finaleOffset];
  }
  return { initial, medial, finale, initialOffset, medialOffset, finaleOffset };
}

export { getSymbol };
