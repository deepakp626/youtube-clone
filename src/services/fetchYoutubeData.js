import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { import } from 'meta'

const youtubeApiKey = import.meta.env.VITE_API_YOUTUBE_API_KEY;

export const youtubeApi = createApi({
  reducerPath: "youtubeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/youtube/v3/",
  }),
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: () => ({
        url: "videos",
        method: "GET",
        params: {
          key: youtubeApiKey,
          part: "snippet",
          maxResults: 50,
          chart: "mostPopular",
          regionCode: "IN",
        },
      }),
      // 'videos?key=AIzaSyDJLf7pldjvf6QevVF_Baz0SrcX0InveMI&part=snippet&chart=mostPopular&regionCode=IN'
    }),

    videoInfoById: builder.query({
      query: (id) => ({
        url: `videos`,
        params: {
          id: id,
          regionCode: "IN",
          key: youtubeApiKey,
          part: "snippet",
        },
      }),
    }),

    fetchSuggestionVideo: builder.query({
       query: (suggestVideoTitle) => ({
        url:'search',
        method:"GET",
        params:{
          key: youtubeApiKey,
          part: "snippet",
          q: suggestVideoTitle,
          type:"video",
          maxResults:15,
          chart:"mostPopular",
          regionCode:"IN",
        }
       })
    }),

    searchVideos: builder.query({
      query: (searchItem) => ({
        url: "search",
        method: "GET",
        params: {
          key: youtubeApiKey,
          part: "snippet",
          q: searchItem,
          regionCode: "IN",
          videoType: "any",
          maxResults: 25,
        },
      }),
    }),

    shortsVideo: builder.query({
      query: (id) => {
        console.log({ id });
        return {
          url: "videos",
          params: {
            key: youtubeApiKey,
            videoDuration: "short",
            regionCode: "IN",
            chart: "mostPopular",
            maxResults: 1,
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllDataQuery,
  useSearchVideosQuery,
  useVideoInfoByIdQuery,
  useShortsVideoQuery,
  useFetchSuggestionVideoQuery
} = youtubeApi;
