export const Constants = {
  ytlogo : 'https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg',
  react_yt_opts: {
    playerVars: {
      autoplay: 1,
      disablekb: 1,
      modestbranding: 1,
      rel: 0,
    },
  },
  api_key: '6f696b4f05294b71bfd59897c3f3ce19',
  configuration: {
    iceServers: [
      {
        urls: [
          "stun:stun1.l.google.com:19302",
          "stun:stun2.l.google.com:19302",
        ],
      },
    ],
    iceCandidatePoolSize: 10,
  }
}

export default Constants;