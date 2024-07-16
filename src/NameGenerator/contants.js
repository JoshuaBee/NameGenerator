export const ALPHABET = Array.from('abcdefghijklmnopqrstuvwxyz');
export const MAP = {
  a: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddeffffffffffffffffffgggggggggggggggggggggggggghhiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiijjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnoooppppppppppppppppppppppppppppppppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttuuuuuuuuuuuuuuuuuuuuuuuuuuuvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwwwwwwwwwwwwwwwwwwwwwwxxxxxxxyyyyyyyyyyyyyyyyyyyyyyyzzzzzzzzzzzzz",
  b: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeehiiiiiiiiiiiiiiiiiiiiiiiiillllllllllllllllllllllllllllllllllllllllooooooooooooooooooooooooooooooooooooooorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrtuuuuuuuuuuuuuuuuuuuuuuuuuuuyyyyyyyyyy",
  c: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeehhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhiiiiiiiiiiikkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkklllllllllllllllllllllllllllllllllloooooooooooooooooooooooooooooooooooooooooooooorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrtttttttttttttuuuuuuuuuuuuuuuuuuuuyyyyyyyy",
  d: "aaaaaaaaaaaaaaaaaaaadddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeggggggggggggggiiiiiiiiiiiiiiiiiiiiiiiiiiiiiklllllllmmooooooooooooooooooooooooorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrstuuuuuuuuuuuwwwyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
  e: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffggggggggggggggghiiiiiiiiiiiiiijkkkkkllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllmmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnoooppppppppppppppppppppppppqqrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrsssssssssssssssssssssssssstttttttttttttttttttttttttttttttttttttttttttttttttttttuuuvvvvvvvvvvvvvvvvwwwwwwwwwwwxxxxxxxxxxxxyyyyyyyyyyyyyyz",
  f: "aaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffiiiiiiiiiiiiiiiiiiiiiiiiiiiijlllllllllllllllllllllllllllllllllllllooooooooooooooooooorrrrrrrrrrrrrrrrrrrrrtttttttttttttttttuuuuuuuuuuuyyyyyyyyy",
  g: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeegggggghhhhhhhhhhhhhhhhhhhhhiiiiiiiiiiiiiiiiilllllllllllllllllllllmmmmnnnnnnooooooooooooooooooooooooooooorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrsuuuuuuuuuuuuuuuuuuuuuuuuuyyyyyyyyyyyyy",
  h: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiooooooooooooooooooooooooooooooooooooooooooooooooorrrrrrrrtttttttttttuuuuuuuuuuuuuuuuuuuuuyyyyyyyyyyyyyy",
  i: "aaaaaaaaaaaaaaaabbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffggggggggggggggggggggggggggggikkkkkllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllmmmmmmmmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnoooooooooooooooooooppppppppppppppppqrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrsssssssssssssssssssssssssssssssssssssssssstttttttttttttttttttttttttttttttttttttttttttttttttttttttuvvvvvvvvvvvvvvvvvvvxxxxxxxxxzzzzzz",
  j: "aaaaeeeeeiooooooooouuuuuuuu",
  k: "aaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeehiiiiiiiiiilnnnnnnnnnnooruuuyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
  l: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbcccccddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffgggiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiikkkkkkkkklllllllllllllllllllllllllllllllllllllllllllllllllllllllllllmmmmmooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooopppppsssssttttttttttttttttttttttttuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuvvvvvvyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
  m: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiilmmmmmmmmoooooooooooooooooooooooooooooooooooooooooppppppppppppppppppppppppppppppppuuuuuuuuuuuuuuuuuuyyyyyyyyyyyyyy",
  n: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggiiiiiiiiiiiiiiiiiiiiiiiiiiiiijjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkllllmnnnnnnnnnnnnnnooooooooooooooooooooooooooooooooprssssssssttttttttttttttttttttttttttttttttttttttttttttttttttttuuuuuuuuuuuvvwyyyyyyyyyyyyyyyyyyyyyyyyyyz",
  o: "aaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbcccccccccccccccccccccccccdddddddddddddddddddddddddeeeeffffffffffgggggggggiiiiiiiiiiiiiiiiiiiiikkkkkkkkkkkkkkkkkllllllllllllllllllllllllllllllllllmmmmmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnoooooooooooooooooooooooooooooooooooooooooooooooooooooooooopppppppppppppppppppppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrsssssssssssssssssssssssssssssssttttttttttttttttttttttttttttttttttttttttttuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuvvvvvvvvvvvvvvvvvvvvvvvvvvwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwxxxxxxxxyyyyyyyyyyzzzzzz",
  p: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeehhhhhhhhhhhhhiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiillllllllllllllllllllllllllllnooooooooooooooooooooooooooooooooppppppppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrsssssssttttttttttttttuuuuuuuuuuuuuuuuuuuuuyyyyyyyyyyyyyyyyy",
  q: "uuuuuuuuuuuuuuuuuuuuuuuuuuuuu",
  r: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbccccccccccdddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffggggggggggggghhhiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiikkkkkkkkkkkkklllllllllllmmmmmmmmnnnnnnnnnnnnnnnnnoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooopppppprrrrrrrrrrrrrrrrrrssssssssssssssssttttttttttttttttttttttttttttttttttttuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuvvvvvvvyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
  s: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeehhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhiiiiiiiiiiiiiiiiiiiiiiiikkkkkkkkkkkkkkkkkkkkllllllllllllllllllllllllllllllmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnooooooooooooooooooooooppppppppppppppppppppppppppppppppppppppppppppppppppqqqsssssssssssssssssssssssssssssssssssstttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttuuuuuuuuuuuuuuuuuwwwwwwwwwwwwwwwwwwwwwwwyyyyyyyyyyyyyyyyyyyyy",
  t: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiilllooooooooooooooooooooooooooooooooooooooooooooooooooooorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrsstttttttttttttttttttttuuuuuuuuuuuuuuuuuuuwwwwwwwwwyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyzzz",
  u: "aaaaaaaaaaaaaaabbbbbbbbccccccccccccccccccccddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffggggggggggggggggggiiiiiiiiiiiiiiiiiiiiiiikllllllllllllllllllllllllllllllllllmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnoooppppppppppppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrsssssssssssssssssssssssssssssssssssssssssssssssssssssssttttttttttttttttttttttttttttttttttttttttttttvvxyzz",
  v: "aaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeiiiiiiiiiiiiiiiiiiiiiiiiiiiooooooooooooooooooooouvyyyyyy",
  w: "aaaaaaaaaaaaaaaaaaaaaaaaadddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefhhhhhhhhhhhhhhhhhhiiiiiiiiiiiiiiiiiiiiiiiiiiikllllllllllnnnnnnnnnnnnnnnnnoooooooooooooooooooooorrrrrrrrrrrrruyy",
  x: "aaceeeeeeiiiiiiiiiioptttttuyy",
  y: "aaaabbcdeeeeeeeeeeegiiiiiilllllllllllmmmmmnnnoooooppppprrrrss",
  z: "aaeeeeeeeeeeeeeeeeeiooouyyyyyyyzzzzz",
};
