import React, { useEffect } from 'react';
import { AiFillClockCircle } from 'react-icons/ai';
import { usePlayerProvider } from '../context/PlayerContext';
import axios from 'axios';
import { reducerCases } from '../reducer/constants';

const Display = ({ headerbackground }) => {

  const [{ token, selectedPlaylist, selectedPlaylistId }, dispatch] = usePlayerProvider();

  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        owner: response.data.owner.display_name,
        description: response.data.description.startsWith("<a>")
          ? "" : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
      };
      dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist });
    };
    getInitialPlaylist();
  }, [token, dispatch, selectedPlaylistId]);

  const playTrack = async (
    id,
    name,
    artists,
    image,
    context_uri,
    track_number
  ) => {
    const response = await axios.put(
      `https://api.spotify.com/v1/me/player/play`,
      {
        context_uri,
        offset: {
          position: track_number - 1,
        },
        position_ms: 0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );

    if (response) {
      if (response.status === 204) {
        const currentPlaying = response.data?.item
          ? {
            id: response.data.item.id,
            name: response.data.item.name,
            artists: response.data.item.artists.map((artist) => artist.name),
            image: response.data.item.album.images[2]?.url || "fallback-image-url"
          }
          : null;

        if (currentPlaying) {
          dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
        } else {
          dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
        }
        dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
      } else {
        // Handle other status codes or non-204 response
        dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: false })
      }
    } else {
      // Handle case where response is not available (e.g., response is null or undefined)
      dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: false });
    }
  };

  const msToMinutesAndSeconds = (ms) => {
    let minutes = Math.floor(ms / 60000);
    let seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  return (
    <div className='container' headerbackground={headerbackground}>
      {
        selectedPlaylist && (
          <>
            <div className="flex items-center gap-8 mx-8 my-0">
              <div className="image">
                <img
                  className='h-60 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]'
                  src={selectedPlaylist.image}
                  alt="selectedplaylist" />
              </div>
              <div className="flex flex-col gap-4 text-[#e0dede]">
                <span className='type'>PLAYLIST</span>
                <h1 className="text-white text-4xl">{selectedPlaylist.name}</h1>
                <p className="description">{selectedPlaylist.description}</p>
              </div>
            </div>

            <div className="list">
              <div className="grid grid-cols-[0.3fr_3fr_2fr_0.1fr] text-[#dddcdc] sticky transition-[0.3s] duration-[ease-in-out] 
              mt-4 mb-0 mx-0 px-12 py-4 top-[15vh]">
                <div className="col">
                  <span>#</span>
                </div>

                <div className="col">
                  <span>TITLE</span>
                </div>

                <div className="col">
                  <span>ALBUM</span>
                </div>

                <div className="col">
                  <span><AiFillClockCircle /></span>
                </div>
              </div>

              <div className="flex flex-col mb-20 mx-8 my-0">
                {
                  selectedPlaylist.tracks.map(({ id, name, artists, image, duration, album, context_uri, track_number }, index) => {
                    return (
                      <div
                        className="grid grid-cols-[0.3fr_3.1fr_1.9fr_0.1fr] px-4 py-2 hover:bg-[rgba(0,0,0,0.7)]"
                        key={id}
                        onClick={() => playTrack(id, name, artists, image, context_uri, track_number)}>
                        <div className="flex items-center text-[#dddcdc]">
                          <span>{index + 1}</span>
                        </div>

                        <div className="flex items-center text-[#dddcdc] flex gap-4">
                          <div className="image">
                            <img
                              className='h-10'
                              src={image}
                              alt="track" />
                          </div>
                          <div className="flex flex-col">
                            <span className="name">{name}</span>
                            <span>{artists}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-[#dddcdc]">
                          <span>{album}</span>
                        </div>
                        <div className="flex items-center text-[#dddcdc]">
                          <span>{msToMinutesAndSeconds(duration)}</span>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          </>
        )
      }
    </div>
  );
};

export default Display;