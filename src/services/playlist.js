import axios from "axios";

const url = "https://vet.brightcove.com/vertical";

const callApi = async (method, endpoint, request = null) => {
  return await axios({
    url: `${url}/${endpoint}`,
    method,
    data: request,
  });
};

const Playlist = Object.assign({
  getPlaylist() {
    return callApi("POST", "playlist", {
      accountID: "6415855143001",
      playlistID: "1807983516569175121",
    });
  },
});

export default Playlist;
