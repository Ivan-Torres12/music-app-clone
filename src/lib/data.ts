import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: "Chill Lo-Fi Music",
    color: colors.yellow,
    cover:
      "1.jpg",
    artists: ["NoSpirit", "Casiio"],
  },
  {
    id: '2',
    albumId: 2,
    title: "Lo-Fi Chill Session",
    color: colors.green,
    cover:
      "2.jpg",
    artists: ["Kupla", "Blue Fox"],
  },
  {
    id: '3',
    albumId: 3,
    title: "Study Session",
    color: colors.rose,
    cover:
      "3.jpg",
    artists: ["Tenno", "xander", "Team Astro"],
  },
  {
    id: '4',
    albumId: 4,
    title: "Blue Note Study Time",
    color: colors.blue,
    cover:
      "4.jpg",
    artists: ["Raimu", "Yasumu"],
  },
  {
    id: '5',
    albumId: 5,
    title: "Chau Saura Session",
    color: colors.purple,
    cover:
      "5.jpg",
    artists: ["Chau Saura", "amies", "kyu"],
  },
  {
    id: '6',
    albumId: 6,
    title: "1970 - El Triste (RCA Victor–MKLS - 1880, MX)",
    color: colors.orange,
    cover:
      "jose.jpg",
    artists: ["Jose jose"],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 1,
    "title": "Moonlit Walk",
    "image": `1.jpg`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:12"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Coffee Daze",
    "image": `1.jpg`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "Skyline Serenade",
    "image": `1.jpg`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 1,
    "title": "Urban Echoes",
    "image": `1.jpg`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "Night's End",
    "image": `1.jpg`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 2,
    "title": "Silent Rain",
    "image": `2.jpg`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Lost Pages",
    "image": `2.jpg`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": "Midnight Tales",
    "image": `2.jpg`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 2,
    "title": "City Lights",
    "image": `2.jpg`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 2,
    "title": "Night Drive",
    "image": `2.jpg`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 3,
    "title": "Lunar",
    "image": `3.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "Go go go!",
    "image": `3.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "Keep focus!",
    "image": `3.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 3,
    "title": "JavaScript is the way",
    "image": `3.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "No more TypeScript for me",
    "image": `3.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 4,
    "title": "Lunar",
    "image": "4.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 4,
    "title": "Go go go!",
    "image": "4.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 4,
    "title": "Keep focus!",
    "image": "4.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 4,
    "title": "JavaScript is the way",
    "image": "4.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 4,
    "title": "No more TypeScript for me",
    "image": "4.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 5,
    "title": "Moonlit Walk",
    "image": "5.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:12"
  },
  {
    "id": 2,
    "albumId": 5,
    "title": "Coffee Daze",
    "image": "5.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 5,
    "title": "Skyline Serenade",
    "image": "5.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 5,
    "title": "Urban Echoes",
    "image": "5.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 5,
    "title": "Night's End",
    "image": "5.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 6,
    "title": "Alguien Vendra",
    "image": "jose.jpg",
    "artists": ["Jose jose"],
    "album": "1970 - El Triste (RCA Victor–MKLS - 1880, MX)",
    "duration": "3:53"
  },
  {
    "id": 2,
    "albumId": 6,
    "title": "Mi Niña",
    "image": "jose.jpg",
    "artists": ["Jose jose"],
    "album": "1970 - El Triste (RCA Victor–MKLS - 1880, MX)",
    "duration": "3:29"
  },
  {
    "id": 3,
    "albumId": 6,
    "title": "La Noche De Los Dos",
    "image": "jose.jpg",
    "artists": ["Jose jose"],
    "album": "1970 - El Triste (RCA Victor–MKLS - 1880, MX)",
    "duration": "2:53"
  },
  {
    "id": 4,
    "albumId": 6,
    "title": "Llegara",
    "image": "jose.jpg",
    "artists": ["Jose jose"],
    "album": "1970 - El Triste (RCA Victor–MKLS - 1880, MX)",
    "duration": "2:15"
  },
  {
    "id": 5,
    "albumId": 6,
    "title": "Dios Es Amor",
    "image": "jose.jpg",
    "artists": ["Jose jose"],
    "album": "1970 - El Triste (RCA Victor–MKLS - 1880, MX)",
    "duration": "2:45 "
  },
  {
    "id": 6,
    "albumId": 6,
    "title": "El Triste",
    "image": "jose.jpg",
    "artists": ["Jose jose"],
    "album": "1970 - El Triste (RCA Victor–MKLS - 1880, MX)",
    "duration": "4:13"
  },
  {
    "id": 7,
    "albumId": 6,
    "title": "Esa Cancion De Ayer",
    "image": "jose.jpg",
    "artists": ["Jose jose"],
    "album": "1970 - El Triste (RCA Victor–MKLS - 1880, MX)",
    "duration": "4:13"
  },
  {
    "id": 8,
    "albumId": 6,
    "title": "Nunca Me Dejes",
    "image": "jose.jpg",
    "artists": ["Jose jose"],
    "album": "1970 - El Triste (RCA Victor–MKLS - 1880, MX)",
    "duration": "4:13"
  },
  {
    "id": 9,
    "albumId": 6,
    "title": "Oh Gente!",
    "image": "jose.jpg",
    "artists": ["Jose jose"],
    "album": "1970 - El Triste (RCA Victor–MKLS - 1880, MX)",
    "duration": "4:13"
  },
  {
    "id": 10,
    "albumId": 6,
    "title": " Amoras",
    "image": "jose.jpg",
    "artists": ["Jose jose"],
    "album": "1970 - El Triste (RCA Victor–MKLS - 1880, MX)",
    "duration": "4:13"
  },
  {
    "id": 11,
    "albumId": 6,
    "title": "A Partir De Hoy",
    "image": "jose.jpg",
    "artists": ["Jose jose"],
    "album": "1970 - El Triste (RCA Victor–MKLS - 1880, MX)",
    "duration": "4:13"
  },
  {
    "id": 12,
    "albumId": 6,
    "title": "Dos",
    "image": "jose.jpg",
    "artists": ["Jose jose"],
    "album": "1970 - El Triste (RCA Victor–MKLS - 1880, MX)",
    "duration": "4:13"
  },
  
]