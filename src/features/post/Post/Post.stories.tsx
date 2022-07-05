import React from 'react'
//import { Flair } from '@shared/components'
import Post from './Post'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MockRedux } from '@shared/components'
import { MemoryRouter } from 'react-router-dom'

export default {
  title: 'Post/Post',
  component: Post,
  decorators: [
    (Post) => (
      <MockRedux>
        <MemoryRouter>
          <Post />
        </MemoryRouter>
      </MockRedux>
    )
  ]
} as ComponentMeta<typeof Post>

const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />

export const Default = Template.bind({})
Default.args = {
  data: {
    archived: false,
    author: "Tatsu_hiro",
    author_flair_background_color: '',
    author_flair_richtext: [],
    author_flair_text_color: '',
    author_fullname: "t2_ofvdos0o",
    gallery_data: null,
    likes: null,
    link_flair_background_color: "#ab912b",
    link_flair_richtext: [{e: 'text', t: 'Map'}],
    link_flair_text_color: "light",
    media: null,
    name: "t3_vrfnyk",
    num_comments: 861,
    over_18: false,
    permalink: "/r/europe/comments/vrfnyk/which_european_countries_have_ever_had_a_female/",
    post_hint: "image",
    preview: {
      enabled: true,
      images: [
        { 
          id: "XWviBES2qZ6nsGhPvtWCF88dGp5iqTQRKNlFoZBOp_g",
          variants: {},
          source: {
            height: 3196,
            width: 4592,
            url: "https://preview.redd.it/nty8h0h9vl991.png?auto=webp&s=2b8d243828f39f635e27ec8c2421fae463cedbfe"
          },
          resolutions: [
            {
              height: 75,
              url: "https://preview.redd.it/nty8h0h9vl991.png?width=108&crop=smart&auto=webp&s=9e1c6a0bb30d75b146cc6fce6d39fc24f05d864d",
              width: 108,
            },
            {
              height: 150,
              url: "https://preview.redd.it/nty8h0h9vl991.png?width=216&crop=smart&auto=webp&s=8c68990c61d0737ac4c311b94faef1e787932cd0",
              width: 216,
            },
            {
              height: 222,
              url: "https://preview.redd.it/nty8h0h9vl991.png?width=320&crop=smart&auto=webp&s=e9c821b5fa6fb3c1629899d7b6973ebe31e9228d",
              width: 320,
            },
            {
              height: 445,
              url: "https://preview.redd.it/nty8h0h9vl991.png?width=640&crop=smart&auto=webp&s=62e7c1a451cb7db10040d4bf2918079608fdc137",
              width: 640,
            },
            {
              height: 668,
              url: "https://preview.redd.it/nty8h0h9vl991.png?width=960&crop=smart&auto=webp&s=3d522f054c80478ec3cae33332354c394b77f8cc",
              width: 960,
            },
            {
              height: 751,
              url: "https://preview.redd.it/nty8h0h9vl991.png?width=1080&crop=smart&auto=webp&s=19e8c38aa4eedbdf035d82a40063f4ce8f309928",
              width: 1080,
            }
          ]
        }
      ]
    },
    saved: false,
    score: 6703,
    selftext: "",
    selftext_html: null,
    spoiler: false,
    subreddit: "europe",
    thumbnail: "https://b.thumbs.redditmedia.com/SB2FAcbJR0SINRYWafC9ctZHL4tUXIyzFgh2j0twubw.jpg",
    title: "Which European countries have ever had a female Prime Minister?",
    url: "https://i.redd.it/nty8h0h9vl991.png",
  }
}

export const Archived = Template.bind({})
Archived.args = {
  data: {
    archived: true,
    author: "Tatsu_hiro",
    author_flair_background_color: '',
    author_flair_richtext: [],
    author_flair_text_color: '',
    author_fullname: "t2_ofvdos0o",
    gallery_data: null,
    likes: null,
    link_flair_background_color: "#ab912b",
    link_flair_richtext: [{e: 'text', t: 'Map'}],
    link_flair_text_color: "light",
    media: null,
    name: "t3_vrfnyk",
    num_comments: 861,
    over_18: false,
    permalink: "/r/europe/comments/vrfnyk/which_european_countries_have_ever_had_a_female/",
    post_hint: "image",
    preview: {
      enabled: true,
      images: [
        { 
          id: "XWviBES2qZ6nsGhPvtWCF88dGp5iqTQRKNlFoZBOp_g",
          variants: {},
          source: {
            height: 3196,
            width: 4592,
            url: "https://preview.redd.it/nty8h0h9vl991.png?auto=webp&s=2b8d243828f39f635e27ec8c2421fae463cedbfe"
          },
          resolutions: [
            {
              height: 75,
              url: "https://preview.redd.it/nty8h0h9vl991.png?width=108&crop=smart&auto=webp&s=9e1c6a0bb30d75b146cc6fce6d39fc24f05d864d",
              width: 108,
            },
            {
              height: 150,
              url: "https://preview.redd.it/nty8h0h9vl991.png?width=216&crop=smart&auto=webp&s=8c68990c61d0737ac4c311b94faef1e787932cd0",
              width: 216,
            },
            {
              height: 222,
              url: "https://preview.redd.it/nty8h0h9vl991.png?width=320&crop=smart&auto=webp&s=e9c821b5fa6fb3c1629899d7b6973ebe31e9228d",
              width: 320,
            },
            {
              height: 445,
              url: "https://preview.redd.it/nty8h0h9vl991.png?width=640&crop=smart&auto=webp&s=62e7c1a451cb7db10040d4bf2918079608fdc137",
              width: 640,
            },
            {
              height: 668,
              url: "https://preview.redd.it/nty8h0h9vl991.png?width=960&crop=smart&auto=webp&s=3d522f054c80478ec3cae33332354c394b77f8cc",
              width: 960,
            },
            {
              height: 751,
              url: "https://preview.redd.it/nty8h0h9vl991.png?width=1080&crop=smart&auto=webp&s=19e8c38aa4eedbdf035d82a40063f4ce8f309928",
              width: 1080,
            }
          ]
        }
      ]
    },
    saved: false,
    score: 6703,
    selftext: "",
    selftext_html: null,
    spoiler: false,
    subreddit: "europe",
    thumbnail: "https://b.thumbs.redditmedia.com/SB2FAcbJR0SINRYWafC9ctZHL4tUXIyzFgh2j0twubw.jpg",
    title: "Which European countries have ever had a female Prime Minister?",
    url: "https://i.redd.it/nty8h0h9vl991.png",
  }
}