import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const youtubeApiKey = "AIzaSyDJLf7pldjvf6QevVF_Baz0SrcX0InveMI";

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
          key:youtubeApiKey,
          part: "snippet",
          maxResults: 4,
          chart: "mostPopular",
          regionCode: "IN",
        }
      }),
      // 'videos?key=AIzaSyDJLf7pldjvf6QevVF_Baz0SrcX0InveMI&part=snippet&chart=mostPopular&regionCode=IN'
    }),
    

    videoInfoById:builder.query({
      query:(id)=>({
        url:`videos`,
        params:{
          id:id,
          regionCode: "IN",
          key:youtubeApiKey,
          part: "snippet",
        }
      })
    }),

    searchVideos:builder.query({
       query:(searchItem)=>({
        url:"search",
        method:"GET",
        params:{
          key:youtubeApiKey,
          part: "snippet",
          q:searchItem,
          regionCode:"IN",
          videoType:"any",
          maxResults:4
        }
       })
    }),

  }),
});

export const { useGetAllDataQuery, useSearchVideosQuery ,useVideoInfoByIdQuery} = youtubeApi;
