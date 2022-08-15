const button = document.querySelector('button');
const download = () => {

  const link = document.createElement('a');
  link.download = 'video_test.mp4';
  link.href = "https://d2mdxsti6y5rs.cloudfront.net/videos/stargram_videos/Expedito_Andrade_27838_41E.mp4?Expires=1660597490&Signature=CXJgEOCva0noxOhcgBx8DVarhIcISkZpLExdT06pvLu6~I5Cw83M5uFqJze3oOt~4Vxs~41HigfwExCCOx342E5qxR8eV0lxM-PyBR1~YVBntTCkXn8QSj~g7fW6mawHRqB5UF26deg5Lxflf~JDbH4xlO8DRL-CkuTbiBZRs5IiXKyxdyyTMSOvnsBNfa5A~OzWyZd7WvuE9i1oJfjgFZL6BS9DOJfBoZw-8lE7RrrWyeLc25Rc1LTjAX4zc6nyzCGdxcYktcUbfYUAZKlzdN6kuVK~dEmL8KH~hnQznZ045nxLxoSPNDpwj2W3OgstCi0J3xM7gE702OlwM4RebA__&Key-Pair-Id=APKAILDDLRO4TS2ZFQ6Q";
  link.click();
}

button.addEventListener('click', download);