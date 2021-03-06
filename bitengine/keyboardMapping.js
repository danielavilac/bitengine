var keysDown = {};

const Key = {
  BACKSPACE: "8",
  TAB: "9",
  CLEAR: "12",
  ENTER: "13",
  SHIFT_L: "16",
  CONTROL_L: "17",
  ALT_L: "18",
  PAUSE: "19",
  CAPS_LOCK: "20",
  ESCAPE: "27",
  SPACE: "32",
  PRIOR: "33",
  NEXT: "34",
  END: "35",
  HOME: "36",
  LEFT: "37",
  UP: "38",
  RIGHT: "39",
  DOWN: "40",
  SELECT: "41",
  PRINT: "42",
  EXECUTE: "43",
  INSERT: "45",
  DELETE: "46",
  HELP: "47",
  EQUAL_BRACERIGHT_0: "48",
  EXCLAM_ONESUPERIOR_1: "49",
  QUOTEDBL_TWOSUPERIOR_2: "50",
  SECTION_THREESUPERIOR_3: "51",
  DOLLAR_4: "52",
  PERCENT_5: "53",
  AMPERSAND_6: "54",
  SLASH_BRACELEFT_7: "55",
  PARENLEFT_BRACKETLEFT_8: "56",
  PARENRIGHT_BRACKETRIGHT_9: "57",
  A: "65",
  B: "66",
  C: "67",
  D: "68",
  E: "69",
  F: "70",
  G: "71",
  H: "72",
  I: "73",
  J: "74",
  K: "75",
  L: "76",
  M: "77",
  N: "78",
  O: "79",
  P: "80",
  Q: "81",
  R: "82",
  S: "83",
  T: "84",
  U: "85",
  V: "86",
  W: "87",
  X: "88",
  Y: "89",
  Z: "90",
  KP_0: "96",
  KP_1: "97",
  KP_2: "98",
  KP_3: "99",
  KP_4: "100",
  KP_5: "101",
  KP_6: "102",
  KP_7: "103",
  KP_8: "104",
  KP_9: "105",
  KP_MULTIPLY: "106",
  KP_ADD: "107",
  KP_SEPARATOR: "108",
  KP_SUBTRACT: "109",
  KP_DECIMAL: "110",
  KP_DIVIDE: "111",
  F1: "112",
  F2: "113",
  F3: "114",
  F4: "115",
  F5: "116",
  F6: "117",
  F7: "118",
  F8: "119",
  F9: "120",
  F10: "121",
  F11: "122",
  F12: "123",
  F13: "124",
  F14: "125",
  F15: "126",
  F16: "127",
  F17: "128",
  F18: "129",
  F19: "130",
  F20: "131",
  F21: "132",
  F22: "133",
  F23: "134",
  F24: "135",
  NUM_LOCK: "136",
  SCROLL_LOCK: "137",
  ACUTE_GRAVE: "187",
  COMMA_SEMICOLON: "188",
  MINUS_UNDERSCORE: "189",
  PERIOD_COLON: "190",
  NUMBERSIGN_APOSTROPHE: "192",
  PLUSMINUS_HYPHEN_MACRON: "210",
  COPYRIGHT_REGISTERED: "212",
  GUILLEMOTLEFT_GUILLEMOTRIGHT: "213",
  MASCULINE_ORDFEMININE: "214",
  AE: "215",
  CENT_YEN: "216",
  QUESTIONDOWN_EXCLAMDOWN: "217",
  ONEQUARTER_ONEHALF_THREEQUARTERS: "218",
  LESS_GREATER_BAR: "220",
  PLUS_ASTERISK_ASCIITILDE: "221",
  MULTIPLY_DIVISION: "227",
  ACIRCUMFLEX: "228",
  ECIRCUMFLEX: "229",
  ICIRCUMFLEX: "230",
  OCIRCUMFLEX: "231",
  UCIRCUMFLEX: "232",
  NTILDE: "233",
  YACUTE: "234",
  OSLASH_OOBLIQUE: "235",
  ARING: "236",
  CCEDILLA: "237",
  THORN: "238",
  ETH: "239",
  DIAERESIS_CEDILLA_CURRENCY: "240",
  AGRAVE_ATILDE: "241",
  EGRAVE: "242",
  IGRAVE: "243",
  OGRAVE_OTILDE: "244",
  UGRAVE: "245",
  ADIAERESIS: "246",
  EDIAERESIS: "247",
  IDIAERESIS: "248",
  ODIAERESIS: "249",
  UDIAERESIS: "250",
  SSHARP_QUESTION_BACKSLASH: "251",
  ASCIICIRCUM_DEGREE: "252",
  STERLING: "253",
  MODE_SWITC: "254"
};

const KeyName = {
  "8": "BACKSPACE",
  "9": "TAB",
  "12": "CLEAR",
  "13": "ENTER",
  "16": "SHIFT_L",
  "17": "CONTROL_L",
  "18": "ALT_L",
  "19": "PAUSE",
  "20": "CAPS_LOCK",
  "27": "ESCAPE",
  "32": "SPACE",
  "33": "PRIOR",
  "34": "NEXT",
  "35": "END",
  "36": "HOME",
  "37": "LEFT",
  "38": "UP",
  "39": "RIGHT",
  "40": "DOWN",
  "41": "SELECT",
  "42": "PRINT",
  "43": "EXECUTE",
  "45": "INSERT",
  "46": "DELETE",
  "47": "HELP",
  "48": "0 EQUAL BRACERIGHT",
  "49": "1 EXCLAM ONESUPERIOR",
  "50": "2 QUOTEDBL TWOSUPERIOR",
  "51": "3 SECTION THREESUPERIOR",
  "52": "4 DOLLAR",
  "53": "5 PERCENT",
  "54": "6 AMPERSAND",
  "55": "7 SLASH BRACELEFT",
  "56": "8 PARENLEFT BRACKETLEFT",
  "57": "9 PARENRIGHT BRACKETRIGHT",
  "65": "A",
  "66": "B",
  "67": "C",
  "68": "D",
  "69": "E",
  "70": "F",
  "71": "G",
  "72": "H",
  "73": "I",
  "74": "J",
  "75": "K",
  "76": "L",
  "77": "M",
  "78": "N",
  "79": "O",
  "80": "P",
  "81": "Q",
  "82": "R",
  "83": "S",
  "84": "T",
  "85": "U",
  "86": "V",
  "87": "W",
  "88": "X",
  "89": "Y",
  "90": "Z",
  "96": "KP_0",
  "97": "KP_1",
  "98": "KP_2",
  "99": "KP_3",
  "100": "KP_4",
  "101": "KP_5",
  "102": "KP_6",
  "103": "KP_7",
  "104": "KP_8",
  "105": "KP_9",
  "106": "KP_MULTIPLY",
  "107": "KP_ADD",
  "108": "KP_SEPARATOR",
  "109": "KP_SUBTRACT",
  "110": "KP_DECIMAL",
  "111": "KP_DIVIDE",
  "112": "F1",
  "113": "F2",
  "114": "F3",
  "115": "F4",
  "116": "F5",
  "117": "F6",
  "118": "F7",
  "119": "F8",
  "120": "F9",
  "121": "F10",
  "122": "F11",
  "123": "F12",
  "124": "F13",
  "125": "F14",
  "126": "F15",
  "127": "F16",
  "128": "F17",
  "129": "F18",
  "130": "F19",
  "131": "F20",
  "132": "F21",
  "133": "F22",
  "134": "F23",
  "135": "F24",
  "136": "NUM_LOCK",
  "137": "SCROLL_LOCK",
  "187": "ACUTE GRAVE",
  "188": "COMMA SEMICOLON",
  "189": "MINUS UNDERSCORE",
  "190": "PERIOD COLON",
  "192": "NUMBERSIGN APOSTROPHE",
  "210": "PLUSMINUS HYPHEN MACRON",
  "212": "COPYRIGHT REGISTERED",
  "213": "GUILLEMOTLEFT GUILLEMOTRIGHT",
  "214": "MASCULINE ORDFEMININE",
  "215": "AE",
  "216": "CENT YEN",
  "217": "QUESTIONDOWN EXCLAMDOWN",
  "218": "ONEQUARTER ONEHALF THREEQUARTERS",
  "220": "LESS GREATER BAR",
  "221": "PLUS ASTERISK ASCIITILDE",
  "227": "MULTIPLY DIVISION",
  "228": "ACIRCUMFLEX",
  "229": "ECIRCUMFLEX",
  "230": "ICIRCUMFLEX",
  "231": "OCIRCUMFLEX",
  "232": "UCIRCUMFLEX",
  "233": "NTILDE NTILDE",
  "234": "YACUTE YACUTE",
  "235": "OSLASH OOBLIQUE",
  "236": "ARING ARING",
  "237": "CCEDILLA CCEDILLA",
  "238": "THORN THORN",
  "239": "ETH ETH",
  "240": "DIAERESIS CEDILLA CURRENCY",
  "241": "AGRAVE AGRAVE ATILDE ATILDE",
  "242": "EGRAVE",
  "243": "IGRAVE",
  "244": "OGRAVE OTILDE",
  "245": "UGRAVE",
  "246": "ADIAERESIS",
  "247": "EDIAERESIS",
  "248": "IDIAERESIS",
  "249": "ODIAERESIS",
  "250": "UDIAERESIS",
  "251": "SSHARP QUESTION BACKSLASH",
  "252": "ASCIICIRCUM DEGREE",
  "253": "3 STERLING",
  "254": "MODE_SWITCH",
};
