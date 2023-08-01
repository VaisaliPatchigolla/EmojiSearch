import React,{useState} from 'react'
import './EmojiStyles.css'
const emojiData = [
    {
        id:1,
        symbol:"❤",
        name:"red heart",
    },
    {
        id:2,
        symbol:"😊",
        name:"smiling face ",
    },
    {
        id:3,
        symbol:"✌",
        name:"victory hand",
    },
    {
        id:4,
        symbol:"🤯",
        name:"exploding head",
    },
    {
        id:5,
        symbol:"🙂",
        name:"smiling face",
    },
    {
        id:6,
        symbol:"😶",
        name:"face without mouth",
    },
    {
        id:7,
        symbol:"😅",
        name:"grinning face ",
    },
    {
        id:8,
        symbol:"😭",
        name:"crying face",
    },
    {
        id:9,
        symbol:"🤤",
        name:"drooling face",
    },
    {
        id:10,
        symbol:"😇",
        name:"angel",
    }
];
function EmojiSearch() {
    const [searchEmoji,setSearchEmoji] = useState(" ");

    const handleChange = (e)=>{
        setSearchEmoji(e.target.value);
    }
    const showEmoji = emojiData.filter((emoji)=>{
        const emojiName = emoji.name.toLowerCase();
        return emojiName.includes(searchEmoji.toLowerCase());
    });
  return (
    <body>
    <div className='Main'>
        <h1>React Emoji App</h1>
        <input type = 'text' placeholder='search for an emoji..' value={searchEmoji} onChange={handleChange} />
        <div className = 'container'>
            {
                showEmoji.map((emoji)=>emoji.symbol)
            }
            </div>
    </div>
    </body>
  )
}

export default EmojiSearch