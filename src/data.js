import { v4 as uuidv4 } from "uuid";

function chillhop() {
  return [
    {
      name: "Jazz Cabbage",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
      artist: "Ian Ewing, Strehlow",
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=31498',
      color: ['#c44f43', '#fcdcd3'],
      id: uuidv4(),
      active: true
    },
    {
      name: "Ish Happens",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/bb0db71fd74f15627e9912ad2278c13cee72ac2d-1024x1024.jpg",
      artist: "Mask Man",
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=7836',
      color: ['#0a8f9a', '#d7ad83'],
      id: uuidv4(),
      active: false
    },
    {
      name: "Bae",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/73c3f09a55221100b520fa131f14e2b09c7f4a81-1024x1024.jpg",
      artist: "Misha",
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8639',
      color: ['#bf6781', '#fcc3b0'],
      id: uuidv4(),
      active: false
    },
    {
      name: "Secret Meetings",
      cover:
        "https://chillhop.com/wp-content/uploads/2019/09/5dec57f342128aac26584502148c6415dce9a1e5-1024x1001.jpg",
      artist: "Deeb",
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8598',
      color: ['#d39787', '#efd3a7'],
      id: uuidv4(),
      active: false
    },
    {
      name: "Island Boy",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/58028b4ad62050072228e4c833916e5512772399-1024x1024.jpg",
      artist: "Blue Wednesday, Mr. Shirai",
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9049',
      color: ['#9b7794', '#e9a7bb'],
      id: uuidv4(),
      active: false
    }
  ];
}

export default chillhop;